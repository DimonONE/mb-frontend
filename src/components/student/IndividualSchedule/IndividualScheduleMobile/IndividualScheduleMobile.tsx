import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LessonSchedule } from '@components/student/ScheduleCard';
import { ScheduleCard } from '@components/student/ScheduleCard';
import CloseIcon from '@static/svg/close.svg';
import { weekdayVerbose } from '@constants';

import * as s from './IndividualScheduleMobile.sss';

type IndividualScheduleMobileProps = {
  className?: string
  individualLessonsSchedule: LessonSchedule[]
  chosenLessons: number[]
  setChosenLessons: (chosenLessons: number[]) => void
  setLessonDataForModal: (lessonData: LessonSchedule) => void
};

export const IndividualScheduleMobile: React.FC<IndividualScheduleMobileProps> = ({
  className,
  individualLessonsSchedule,
  chosenLessons,
  setChosenLessons,
  setLessonDataForModal
}) => {
  const { t } = useTranslation();

  const [, ...daysSchedule] = Object.values(weekdayVerbose);
  
  const sortedLessons = chosenLessons.length
    ? individualLessonsSchedule.reduce(
        (acc, lesson) => {
          return chosenLessons.includes(lesson.id) ? [lesson, ...acc] : [...acc, lesson];
        },
        []
      )
    : individualLessonsSchedule;

  return (
    <div className={classNames(s.root, className)}>
      {chosenLessons.length ? <div className={s.chosenDays}>{t('student~Выбранные дни')}</div> : null}
      {sortedLessons.map(
        lessonCard => {
          const chosenLessonIndex = chosenLessons.indexOf(lessonCard.id);
          return (
            <div key={lessonCard.id}>
              <div className={s.chosenLessonTitle}>
                <div className={s.dayGroupName}>{daysSchedule[lessonCard.weekday - 1]}</div>
                {chosenLessonIndex !== -1 &&
                  <CloseIcon
                    className={s.closeIcon}
                    onClick={() => setChosenLessons([
                        ...chosenLessons.slice(0, chosenLessonIndex),
                        ...chosenLessons.slice(chosenLessonIndex + 1)
                      ])
                    }
                  />
                }
              </div>
              <ScheduleCard
                className={s.individualCard}
                lessonSchedule={lessonCard}
                calendarView={true}
                isChosen={chosenLessonIndex !== -1}
                onButtonClick={() => setLessonDataForModal(lessonCard)}
              />
            </div>
          );
        }
      )} 
    </div>
  );
};