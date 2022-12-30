import * as React from 'react';
import * as classNames from 'classnames';

import { LessonSchedule } from '@components/student/ScheduleCard';
import { ScheduleCard } from '@components/student/ScheduleCard';
import { weekdayVerbose } from '@constants';

import * as s from './IndividualScheduleDesktop.sss';

type IndividualScheduleDesktopProps = {
  className?: string
  individualLessonsSchedule: LessonSchedule[]
  chosenLessons: number[]
  setChosenLessons: (chosenLessons: number[]) => void
  setLessonDataForModal: (lessonData: LessonSchedule) => void
};

export const IndividualScheduleDesktop: React.FC<IndividualScheduleDesktopProps> = ({
  className,
  individualLessonsSchedule,
  chosenLessons,
  setChosenLessons,
  setLessonDataForModal
}) => {

  const [, ...daysSchedule] = Object.values(weekdayVerbose);

  return (
    <div className={classNames(s.root, className)}>
      {daysSchedule.map(
        (day, id) => {
          const sortedLessons = individualLessonsSchedule.filter(lesson => lesson.weekday === id + 1);
          return (
            <div className={s.dayGroup} key={id}>
              <div className={s.dayGroupName}>{day}</div>
              {sortedLessons.map(
                lessonCard => {
                  const chosenLessonIndex = chosenLessons.indexOf(lessonCard.id);
                  return (
                    <div
                      className={s.individualCard}
                      key={lessonCard.id}
                      onClick={() => {
                        if (chosenLessonIndex !== -1) {
                          setChosenLessons([
                            ...chosenLessons.slice(0, chosenLessonIndex),
                            ...chosenLessons.slice(chosenLessonIndex + 1)
                          ]);
                        } else {
                          setLessonDataForModal(lessonCard);
                        }
                      }}
                    >
                      <ScheduleCard
                        lessonSchedule={lessonCard}
                        calendarView={true}
                        isChosen={chosenLessonIndex !== -1}
                      />
                    </div>
                  );
                }
              )}
            </div>
          );
        }
      )}
    </div>
  );
};