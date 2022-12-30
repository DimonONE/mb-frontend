import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { getLessonDeclension } from '@utils/wordDeclension';

import * as s from './ScheduleContainer.sss';

type ScheduleContainerProps = {
  className?: string
  isActive?: boolean
  dayOfWeek: string
  date: string
  lessonsAmount: number
};

export const ScheduleContainer: React.FC<ScheduleContainerProps> = ({
  className,
  isActive = false,
  dayOfWeek,
  date,
  lessonsAmount,
  children
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        classNames(
          s.root,
          {[s.active]: isActive},
          className
        )
      }
    >
      <div className={s.header}>
        <div>
          <span className={s.pill}>
            {dayOfWeek}
          </span>
          <span className={s.date}>{date}</span>
        </div>
        <div className={s.lessonsCount}>
          {lessonsAmount} {getLessonDeclension(t, lessonsAmount)}
        </div>
      </div>

      <div className={s.children}>
        {children}
      </div>
    </div>
  );
};
