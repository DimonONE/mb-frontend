import * as React from 'react';
import * as classNames from 'classnames';
import { Route } from 'react-router-dom';

import {
  teacherDaysSchedule,
  teacherMonthsSchedule,
  teacherWeeksSchedule,
} from '@urls';
import { NextLessonContainer } from '@containers/teacher/NextLesson';
import { ScheduleDaysContainer } from '@containers/teacher/ScheduleDays';
import { ScheduleAggregations } from '@containers/teacher/ScheduleAggregations';
import { LessonAggregationPeriods } from '@graphql';
import { useSearchParams } from '@utils/common';

import * as s from './ScheduleContainerWrapper.sss';

type ScheduleContainerWrapperProps = {
  className?: string
};

export const ScheduleContainerWrapper: React.FC<ScheduleContainerWrapperProps> = ({
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.schedules}>
      <Route
        path={teacherDaysSchedule}
        component={
          () => {
            const searchParams = useSearchParams();

            return (
              <ScheduleDaysContainer after={searchParams.get('after')} />
            );
          }
        }
      />

      <Route
        path={teacherWeeksSchedule}
        component={() => {
          const searchParams = useSearchParams();

          return (
            <ScheduleAggregations
              groupBy={LessonAggregationPeriods.Day}
              after={searchParams.get('after')}
            />
          );
        }}
      />

      <Route
        path={teacherMonthsSchedule}
        component={() => <ScheduleAggregations groupBy={LessonAggregationPeriods.Week} />}
      />
    </div>
    <NextLessonContainer className={s.currentLesson} />
  </div>
);

export default ScheduleContainerWrapper;
