import * as React from 'react';
import * as dayjs from 'dayjs';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import { Link } from 'react-router-dom';

import { LessonAggregationPeriods, useTeacherScheduleAggregationsQuery } from '@graphql';
import { ScheduleAggregationCard } from '@components/teacher/ScheduleAggregationCard';
import { ScheduleContainer } from '@components/teacher/ScheduleContainer';
import { ScheduleInfiniteScroll } from '@components/teacher/ScheduleInfiniteScroll';
import {
  teacherDaysSchedule,
  teacherWeeksSchedule
} from '@urls';

dayjs.extend(isoWeek);

type ScheduleAggregationsProps = {
  groupBy: LessonAggregationPeriods
  after?: string
  className?: string
};

const groupTimeFunctions = {
  [LessonAggregationPeriods.Day]: (date: dayjs.Dayjs) => {
    const start = date.isoWeekday(1);
    const end = date.isoWeekday(7);
    return [
      `${date.isoWeek()}`,
      `${start.format('DD.MM')}-${end.format('DD.MM')}`
    ];
  },
  [LessonAggregationPeriods.Week]: (date: dayjs.Dayjs) => ([
    `${date.format('MM')}`,
    `${date.format('MMMM')}`
  ]),
};
const aggregationTimeFunctions = {
  [LessonAggregationPeriods.Day]: (date: dayjs.Dayjs) => (
    date.format('DD.MM dddd')
  ),
  [LessonAggregationPeriods.Week]: (date: dayjs.Dayjs) => (
    `${date.isoWeekday(1).format('DD.MM')}-${date.isoWeekday(7).format('DD.MM')}`
  ),
};

const aggregationPaths = {
  [LessonAggregationPeriods.Day]: teacherDaysSchedule,
  [LessonAggregationPeriods.Week]: teacherWeeksSchedule,
};

export const ScheduleAggregations: React.FC<ScheduleAggregationsProps> = ({
  groupBy,
  after,
  className,
}) => {
  const {
    data,
    loading,
    fetchMore,
  } = useTeacherScheduleAggregationsQuery({
    variables: { groupBy, after },
    notifyOnNetworkStatusChange: true,
  });
  const groupTimeFunction = groupTimeFunctions[groupBy];
  const aggregationTimeFunction = aggregationTimeFunctions[groupBy];

  if (loading && !data?.viewer) {
    return <div>Loading...</div>;
  }

  if (!data.viewer.lessonsPeriodAggregation.edges.length) {
    return <div>Здесь пока пусто</div>;
  }

  const groups: React.ReactElement[] = [];
  let aggregationCards: React.ReactElement[] = [];

  const edges = data.viewer.lessonsPeriodAggregation.edges;
  const edgesCount = edges.length;
  let [currentGroupTimePoint, currentGroupTime] = groupTimeFunction(
    dayjs(edges[0].node.startDate)
  );
  let lessonsCount = 0;
  for (let i = 0; i < edgesCount; i++) {
    const { node, cursor } = edges[i];
    const startDate = dayjs(node.startDate);
    const [groupTimePoint, groupTime] = groupTimeFunction(startDate);
    const aggregationTime = aggregationTimeFunction(startDate);

    const search = new URLSearchParams();
    search.set('after', cursor);
    const aggregationComponent = (
      <Link
        to={{
          pathname: aggregationPaths[groupBy],
          search: `?${search.toString()}`
        }}
      >
        <ScheduleAggregationCard
          key={aggregationTime}
          time={aggregationTime}
          groupLessons={node.groupLessonsCount}
          personalLessons={node.individualLessonsCount}
        />
      </Link>
    );

    if (currentGroupTime === groupTime) {
      lessonsCount += node.groupLessonsCount + node.individualLessonsCount;
      aggregationCards.push(aggregationComponent);
    }

    if (currentGroupTime !== groupTime || i === edgesCount - 1) {
      groups.push(
        <ScheduleContainer
          key={currentGroupTime}
          date={currentGroupTime}
          dayOfWeek={currentGroupTimePoint}
          lessonsAmount={lessonsCount}
        >
          {aggregationCards}
        </ScheduleContainer>
      );
      lessonsCount = node.groupLessonsCount + node.individualLessonsCount;
      aggregationCards = [aggregationComponent];
      currentGroupTime = groupTime;
      currentGroupTimePoint = groupTimePoint;
    }
  }

  const onRequestLoadMore = async () => {
    if (!data.viewer.lessonsPeriodAggregation.pageInfo.hasNextPage || loading) {
      return;
    }

    await fetchMore({
      variables: {
        after:
          data
            .viewer
            .lessonsPeriodAggregation
            .pageInfo
            .endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const aggregations = fetchMoreResult.viewer.lessonsPeriodAggregation;
        return (
          aggregations.edges.length
          ? {
            viewer: {
              ...data.viewer,
              lessonsPeriodAggregation: {
                edges: [
                  ...previousResult.viewer.lessonsPeriodAggregation.edges,
                  ...aggregations.edges
                ],
                pageInfo: aggregations.pageInfo,
                __typename: aggregations.__typename,
              }
            }
          }
          : previousResult
        );
      }
    });
  };

  // TODO(lnalkman) implement canLoadMorePrevious
  return (
    <ScheduleInfiniteScroll
      className={className}
      isLoadingMore={loading}
      canLoadMorePrevious={false}
      onRequestLoadMore={onRequestLoadMore}
    >
      {groups}
    </ScheduleInfiniteScroll>
  );
};
