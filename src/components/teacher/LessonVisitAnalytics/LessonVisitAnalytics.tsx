import * as React from 'react';
import * as classNames from 'classnames';

import Close from '@svg/close.svg';
import ExclemationMark from '@svg/exclemationMark.svg';
import UAH from '@svg/UAH.svg';

import * as s from './LessonVisitAnalytics.sss';

type VisitTypeInfoProps = {
  icon: React.ReactElement
  count: number
  className?: string
};
type LessonVisitAnalyticsProps = {
  notPaid: number
  trialLesson: number
  willAbsent: number
  isClosed: boolean
  className?: string
};

export const VisitTypeInfo: React.FC<VisitTypeInfoProps> = ({
  icon,
  count,
  children,
  className,
}) => (
  <div className={classNames(s.visitTypeInfo, className)}>
    <div className={s.icon}>
      {icon}
    </div>
    <span>{count}</span>
    <span className={s.tabletOrWider}>{children}</span>
  </div>
);

export const LessonVisitAnalytics: React.FC<LessonVisitAnalyticsProps> = ({
  notPaid,
  trialLesson,
  willAbsent,
  isClosed,
  className,
}) => (
  <div className={classNames(className, { [s.disabled]: isClosed })}>
    <VisitTypeInfo
      className={s.red}
      icon={<UAH />}
      count={notPaid}
    >
      не оплачено
    </VisitTypeInfo>
    <VisitTypeInfo
      className={s.blue}
      icon={<ExclemationMark />}
      count={trialLesson}
    >
      пробное занаятие
    </VisitTypeInfo>
    <VisitTypeInfo
      className={s.fiolet}
      icon={<Close />}
      count={willAbsent}
    >
      не придут
    </VisitTypeInfo>
  </div>
);

export default LessonVisitAnalytics;