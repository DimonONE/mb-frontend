import * as React from 'react';
import {
  Link,
  generatePath
} from 'react-router-dom';
import update from 'immutability-helper';

import ScheduleLesson from '@components/teacher/ScheduleLesson';
import { ScheduleContainer } from '@components/teacher/ScheduleContainer';
import {
  monthAsDatePartVerbose,
  weekdayVerbose,
} from '@constants';
import { formatTime } from '@utils/common';
import { ScheduleInfiniteScroll } from '@components/teacher/ScheduleInfiniteScroll';
import { teacherLessonDetail } from '@urls';
import { useTeacherScheduleDaysQuery } from '@graphql';

type ScheduleDaysContainerProps = {
  after?: string
  className?: string;
};

const first = 20;

export const ScheduleDaysContainer: React.FC<ScheduleDaysContainerProps> = ({
  after,
  className
}) => {
  const {
    data,
    loading,
    fetchMore,
  } = useTeacherScheduleDaysQuery({
    variables: { after, first },
    notifyOnNetworkStatusChange: true
  });

  if (loading && !data?.viewer) {
    return <div>Loading...</div>;
  }

  if (!data.viewer.lessons.edges.length) {
    return <div>Здесь пока пусто</div>;
  }

  // Contains groups of lessons
  const days: React.ReactElement[] = [];

  // Contains lessons for current group (day)
  let dayLessons: React.ReactElement[] = [];

  const edges = data.viewer.lessons.edges;
  const edgesCount = edges.length;
  let previousDate = new Date(
    data
      .viewer
      .lessons
      .edges[0]
      .node
      .time
  );
  let previousDateString = previousDate.toDateString();
  for (let i = 0; i < edges.length; i++) {
    const { node } = edges[i];
    const lessonDate = new Date(node.time);
    const lessonDateString = lessonDate.toDateString();

    const {
      hall,
      visitAnalytics,
    } = node;
    const lesson = (
      <Link
        to={
          generatePath(
            teacherLessonDetail,
            { id: node.id }
          )
        }
      >
        <ScheduleLesson
          key={node.id}
          time={formatTime(lessonDate)}
          address={`${hall.street}, ${hall.number}`}
          firstLesson={visitAnalytics.trialLesson}
          didntPay={visitAnalytics.notPaid}
          studentsAmount={visitAnalytics.inAll}
        />
      </Link>
    );

    // If lesson from the same day as previous
    if (lessonDateString === previousDateString) {
      dayLessons.push(lesson);
    }

    // If lesson date not the same as in previous lesson, then this lesson have to be
    // in new group, so we put current group in container and add it in array.
    // In addition we force put lessons in container if it's last (i === edgesCount - 1) lesson
    if (lessonDateString !== previousDateString || i === edgesCount - 1) {
      // Add group
      days.push(
        <ScheduleContainer
          key={`${previousDateString} ${dayLessons.length}`}
          dayOfWeek={weekdayVerbose[previousDate.getDay()]}
          date={`${previousDate.getDate()} ${monthAsDatePartVerbose[previousDate.getMonth()]}`}
          lessonsAmount={dayLessons.length}
        >
          {dayLessons}
        </ScheduleContainer>
      );

      // Start new group
      dayLessons = [lesson];
      previousDate = lessonDate;
      previousDateString = lessonDateString;
    }
  }

  const onRequestLoadMore = async () => {
    if (!data.viewer.lessons.pageInfo.hasNextPage || loading) {
      return;
    }

    await fetchMore({
      variables: {
        first,
        after: data.viewer.lessons.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const lessons = fetchMoreResult.viewer.lessons;
        return (
          lessons.edges.length
          ? {
            viewer: {
              ...data.viewer,
              lessons: {
                edges: [
                  ...previousResult.viewer.lessons.edges,
                  ...lessons.edges
                ],
                pageInfo: lessons.pageInfo,
                __typename: lessons.__typename,
              }
            }
          }
          : update(
            previousResult,
            {
              viewer: {
                lessons: {
                  pageInfo: {
                    $set: lessons.pageInfo
                  }
                }
              }
            }
          )
        );
      }
    });
  };

  const onRequestLoadMorePrevious = async () => {
    if (!data.viewer.lessons.pageInfo.hasPreviousPage || loading) {
      return;
    }

    await fetchMore({
      variables: {
        first,
        before: data.viewer.lessons.pageInfo.startCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const lessons = fetchMoreResult.viewer.lessons;
        return (
          lessons.edges.length
          ? {
            viewer: {
              ...data.viewer,
              lessons: {
                edges: [
                  ...lessons.edges,
                  ...previousResult.viewer.lessons.edges,
                ],
                pageInfo: lessons.pageInfo,
                __typename: lessons.__typename,
              }
            }
          }
          : update(
            previousResult,
            {
              viewer: {
                lessons: {
                  pageInfo: {
                    $set: lessons.pageInfo
                  }
                }
              }
            }
          )
        );
      }
    });
  };

  // Add check if we can't load previous lessons
  // because no lessons left
  return (
    <ScheduleInfiniteScroll
      className={className}
      isLoadingMore={loading}
      onRequestLoadMore={onRequestLoadMore}
      canLoadMorePrevious={data.viewer.lessons.pageInfo.hasPreviousPage}
      onRequestLoadMorePrevious={onRequestLoadMorePrevious}
    >
      {days}
    </ScheduleInfiniteScroll>
  );
};
