import * as React from 'react';
import * as classNames from 'classnames';
import * as dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/student/Button';
import type { TrialLesson } from '@components/student/TrialLessonsComponent';
import { SkillLevel, LessonType } from '@graphql';
import {
  levelRepresentation,
  typeRepresentation
} from '@constants';

import * as s from './ScheduleCard.sss';

export type Teacher = {
  id: number
  firstName: string
  lastName: string
};

export type Hall = {
  id: number
  name: string
  city: string
  street: string
  number: string
  locations: Location[]
};

type Location = {
  id: number
  name: string
  color: string
};

export type LessonSchedule = {
  id: number
  hall: Hall
  level?: SkillLevel
  teacher?: Teacher
  time: string
  type: LessonType
  days?: number[]
  weekday?: number
};

type ScheduleCardProps = {
  className?: string
  lessonSchedule: LessonSchedule | TrialLesson
  calendarView?: boolean
  isChosen?: boolean
  isTrial?: boolean
  onButtonClick?: () => void
};

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  className,
  lessonSchedule,
  calendarView = false,
  isChosen = false,
  isTrial = false,
  onButtonClick
}) => {
  const { t } = useTranslation();

  const {
    hall,
    level,
    teacher,
    time,
    type,
    days
  } = lessonSchedule;

  return (
    <div className={classNames(s.root, className)}>
      {!calendarView && 
        <div className={s.groupName}>
          {days.map(day => dayjs().day(day).format('dddd'))
          .join(' - ')}
        </div>
      }
      <div
        className={classNames(s.groupInfo, { [s.calendarView]: calendarView }, { [s.isChosen]: isChosen })}
        style={{ borderLeftColor: isChosen ? '#7A4694' : hall.locations[0]?.color || '#ADB5BD' }}
      >
        <div className={classNames(s.infoItem, { [s.metroInfo]: calendarView })}>
          <span className={classNames(s.infoProp, { [s.hideInfo]: calendarView })}>{t('student~Метро')}: </span>
          {hall.locations.length 
            ?
              hall.locations.map(location => <span key={location.id}>{location.name} </span>)
            : ''
          }
        </div>
        <div className={classNames(s.infoItem, { [s.timeInfo]: calendarView })}>
          <span className={classNames(s.infoProp, { [s.hideInfo]: calendarView })}>{t('student~Время')}: </span>
          {!isTrial ? time.slice(0, 5) : time.slice(11, 16)}
        </div>
        <div className={classNames(s.infoItem, { [s.levelInfo]: calendarView })}>
          <span className={classNames(s.infoProp, { [s.hideInfo]: calendarView })}>{t('student~Уровень')}: </span>
          {levelRepresentation[level]}
        </div>
        <div className={classNames(s.infoItem, { [s.typeInfo]: calendarView })}>
          <span className={classNames(s.infoProp, { [s.hideInfo]: calendarView })}>{t('student~Направление')}: </span>
          {typeRepresentation[type]}
        </div>
        <div className={classNames(s.infoItem, { [s.hideInfo]: calendarView })}>
          <span className={s.infoProp}>{t('student~Адрес')}: </span>{t('student~ул.')} {hall.street}
        </div>
        {
          teacher &&
            <div className={classNames({ [s.hideInfo]: calendarView })}>
              <span className={s.infoProp}>{t('student~Педагог')}: </span>{teacher.firstName} {teacher.lastName}
            </div>
        }
        {(calendarView && !isChosen) ?
          <Button
            theme="secondaryPurple"
            className={s.ghostButton}
            onClick={onButtonClick}
            >
              {t('student~Записаться на занятие')}
            </Button>
          : null
        }
      </div>
    </div>
  );
};