import * as React from 'react';
import * as classNames from 'classnames';

import { levelRepresentation } from '@constants';
import { SkillLevel } from '@graphql';

import * as s from './LessonDetailsCard.sss';

export type LessonDetailsCardProps = {
  date: string
  time: string
  location: string
  duration: number
  level: SkillLevel
  isClosed: boolean
  className?: string
};

export const LessonDetailsCard: React.FC<LessonDetailsCardProps> = ({
  date,
  time,
  location,
  duration,
  level,
  isClosed,
  className,
  children,
}) => {
  return (
    <div className={className}>
      {
        isClosed &&
          <div className={s.closedInfo}>
            Этот класс закрыт. Вы больше не можете вносить в него изменения.
          </div>
      }
      <div className={classNames(s.root, className)}>
        <div className={s.row}>
          <span>Дата:</span>
          <span>{date}</span>
        </div>
        <div className={s.row}>
          <span>Время:</span>
          <span>{time}</span>
        </div>
        <div className={s.row}>
          <span>Адрес:</span>
          <span>{location}</span>
        </div>
        <div className={s.row}>
          <span>Длительность:</span>
          <span>{duration}</span>
        </div>
        <div className={s.row}>
          <span>Уровень:</span>
          <span>{levelRepresentation[level]}</span>
        </div>
        {children}
      </div>
    </div>
  );
};