import * as React from 'react';
import * as classNames from 'classnames';

import LessonVisitAnalytics from '@components/teacher/LessonVisitAnalytics';

import * as s from './ScheduleLesson.sss';

type ScheduleLessonProps = {
  className?: string
  time: string
  address: string
  firstLesson: number
  didntPay: number
  studentsAmount: number
};

export const ScheduleLesson: React.FC<ScheduleLessonProps> = ({
  className,
  time,
  address,
  firstLesson,
  didntPay,
  studentsAmount
}) => {
  return(
    <div className={classNames(s.scheduleLesson, className)}>
      <div className={s.scheduleLessonTime}>
        {time}
      </div>
      <LessonVisitAnalytics
        className={s.scheduleLessonInfo}
        notPaid={didntPay}
        trialLesson={firstLesson}
        willAbsent={0}
        isClosed={false}
      />
      <div className={s.scheduleLessonAddress}>
        {address}
      </div>
      <div className={s.scheduleLessonPeople}>
        {studentsAmount} чел.
      </div>
    </div>
  );
};

export default ScheduleLesson;