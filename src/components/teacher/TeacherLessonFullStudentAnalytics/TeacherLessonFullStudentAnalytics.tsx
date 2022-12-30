import * as React from 'react';
import * as classNames from 'classnames';

import LessonVisitAnalytics from '@components/teacher/LessonVisitAnalytics';

import * as s from './TeacherLessonFullStudentAnalytics.sss';

type TeacherLessonFullStudentAnalyticsProps = {
  inAll: number
  shouldPresent: number
  notPaid: number
  trialLesson: number
  willAbsent: number
  isClosed: boolean
  className?: string
};

export const TeacherLessonFullStudentAnalytics: React.FC<TeacherLessonFullStudentAnalyticsProps> = ({
  inAll,
  shouldPresent,
  className,
  ...props
}) => (
  <div className={classNames(s.root, classNames)}>
    <LessonVisitAnalytics
      className={s.baseAnalytics}
      {...props}
    />
    <div className={s.visitorCount}>
      {shouldPresent}/{inAll}
      {' '}
      <div className={s.tabletOrWider}>балеринок</div>
    </div>
  </div>
);

export default TeacherLessonFullStudentAnalytics;