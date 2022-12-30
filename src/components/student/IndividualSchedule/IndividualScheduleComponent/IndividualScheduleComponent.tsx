import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { useDesktopOrWider } from '@utils/mediaQuery';
import { LessonSchedule } from '@components/student/ScheduleCard';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { Button } from '@components/student/Button';
import { IndividualLessonModal } from '@components/student/IndividualLessonModal';
import { individualScheduleVar } from '@local-state/vars';
import { IndividualScheduleDesktop } from '@components/student/IndividualSchedule/IndividualScheduleDesktop';
import { IndividualScheduleMobile } from '@components/student/IndividualSchedule/IndividualScheduleMobile';

import * as s from './IndividualScheduleComponent.sss';

type IndividualScheduleComponentProps = {
  className?: string
  individualLessonsSchedule: LessonSchedule[]
};

export const IndividualScheduleComponent: React.FC<IndividualScheduleComponentProps> = ({
  className,
  individualLessonsSchedule
}) => {
  const { t } = useTranslation();

  const [lessonDataForModal, setLessonDataForModal] = useState<LessonSchedule | undefined>();
  const [chosenLessons, setChosenLessons] = useState([]);

  const isDesktopOrWider = useDesktopOrWider();

  return (
    <LayoutContainer className={classNames(s.root, className)}>
      {lessonDataForModal &&
        <IndividualLessonModal
          isOpen={!!lessonDataForModal}
          onRequestClose={() => setLessonDataForModal(undefined)}
          lessonData={lessonDataForModal}
          setChosenLessons={id => setChosenLessons([...chosenLessons, id])}
        />
      }
      {!isDesktopOrWider ?
        <IndividualScheduleMobile
          individualLessonsSchedule={individualLessonsSchedule}
          chosenLessons={chosenLessons}
          setChosenLessons={lessons => setChosenLessons(lessons)}
          setLessonDataForModal={lessonData => setLessonDataForModal(lessonData)}
        />
        :
        <IndividualScheduleDesktop
          individualLessonsSchedule={individualLessonsSchedule}
          chosenLessons={chosenLessons}
          setChosenLessons={lessons => setChosenLessons(lessons)}
          setLessonDataForModal={lessonData => setLessonDataForModal(lessonData)}
        />
      }
      <Button
        className={s.primaryButton}
        disabled={!chosenLessons.length}
        onClick={() => individualScheduleVar(chosenLessons)}
      >
        {t('student~Сохранить расписание')}
      </Button>
    </LayoutContainer>
  );
};