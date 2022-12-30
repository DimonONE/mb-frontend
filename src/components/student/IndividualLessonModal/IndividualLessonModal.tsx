import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Modal,
  ModalProps,
} from '@components/student/Modal';
import type { LessonSchedule } from '@components/student/ScheduleCard';
import { Button } from '@components/student/Button';
import {
  levelRepresentation,
  typeRepresentation
} from '@constants';

import * as s from './IndividualLessonModal.sss';

type IndividualLessonModalProps = ModalProps & {
  lessonData: LessonSchedule
  withClose?: boolean
  setChosenLessons: (id: number) => void
};

export const IndividualLessonModal: React.FC<IndividualLessonModalProps> = ({
  lessonData: {
    id,
    hall,
    level,
    teacher,
    time,
    type
  },
  setChosenLessons,
  ...props
}) => {
    const { t } = useTranslation();

    return (
      <Modal
        className={s.root}
        theme="orange"
        withClose
        {...props}
      >
        <div className={s.title}>{t('student~Выбрать день')}</div>
        <div className={s.lessonInfo}>
          <div className={s.infoItem}>
            {t('student~Метро')}: {hall.locations.map(location => <span key={location.id}>{location.name} </span>)}
          </div>
          <div className={s.infoItem}>{t('student~Время')}: {time.slice(0, 5)}</div>
          <div className={s.infoItem}>{t('student~Уровень')}: {levelRepresentation[level]}</div>
          <div className={s.infoItem}>{t('student~Направление')}: {typeRepresentation[type]}</div>
          <div className={s.infoItem}>{t('student~Адрес')}: {t('student~ул.')} {hall.street}</div>
          <div className={s.infoItem}>{t('student~Педагог')}: {teacher.firstName} {teacher.lastName}</div>
        </div>
        <Button
          className={s.button}
          theme="ghostPurple"
          onClick={e => { setChosenLessons(id); props.onRequestClose(e); }}
        >
          {t('student~Выбрать день')}
        </Button>
      </Modal>
    );
};