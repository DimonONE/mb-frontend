import React from 'react';
import { useState } from 'react';
import * as classNames from 'classnames';
import * as dayjs from 'dayjs';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { TrialLessonModal } from '@components/student/TrialLessonModal';
import { ScheduleCard, Hall, Teacher } from '@components/student/ScheduleCard';
import { SkillLevel, LessonType } from '@graphql';

import * as s from './TrialLessonsComponent.sss';

export type TrialLesson = {
  id?: string | number
  hall: Hall
  level?: SkillLevel
  teacher?: Teacher
  time: string
  type: LessonType
  days?: number[]
  lessonTemplate: {
    id: number
    weekday: number
  }
};

type TrialLessonsComponentProps = {
  className?: string
  trialLessons: TrialLesson[]
};

export const TrialLessonsComponent: React.FC<TrialLessonsComponentProps> = ({
  className,
  trialLessons
}) => {
  const [trialDataForModal, setTrialDataForModal] = useState<TrialLesson | undefined>();

  const groupByDays = trialLessons.reduce(
    (acc, curr) => {
      const currTime = curr.time.slice(0, 10);
      if (acc[currTime]) {
        return {...acc, [currTime]: [...acc[currTime], curr]};
      } else {
        return {...acc, [currTime]: [curr]};
      }
    },
    {}
  );

  return (
    <LayoutContainer>
      {trialDataForModal &&
        <TrialLessonModal
          isOpen={!!trialDataForModal}
          onRequestClose={() => setTrialDataForModal(undefined)}
          lessonData={trialDataForModal}
        />
      }
      <div className={classNames(s.root, className)}>
      {Object.values(groupByDays).map(
        (dayGroup: TrialLesson[], index) => (
          <div className={s.dayGroup} key={index}>
            <div className={s.dayGroupName}>{dayjs(dayGroup[0].time).format('dd, D MMMM')}</div>
            {
              dayGroup.map(
                lessonCard => (
                  <div
                    className={s.trialLessonCard}
                    key={lessonCard.id}
                    onClick={() => setTrialDataForModal(lessonCard)}
                  >
                    <ScheduleCard
                      lessonSchedule={lessonCard}
                      calendarView={true}
                      isTrial={true}
                    />
                  </div>
                )
              )
            }
          </div>
        )
      )}
      </div>
    </LayoutContainer>
  );
};