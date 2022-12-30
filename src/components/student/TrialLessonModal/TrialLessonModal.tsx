import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Modal,
  ModalProps,
} from '@components/student/Modal';
import type { TrialLesson } from '@components/student/TrialLessonsComponent';
import { Button } from '@components/student/Button';
import {
  levelRepresentation,
  typeRepresentation
} from '@constants';
import { trialLessonVar } from '@local-state/vars';

import * as s from './TrialLessonModal.sss';

type TrialLessonModalProps = ModalProps & {
  lessonData: TrialLesson
};

export const TrialLessonModal: React.FC<TrialLessonModalProps> = ({
  lessonData: {
    id,
    hall,
    level,
    teacher,
    time,
    type
  },
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
        <div className={s.title}>{t('student~Пробное занятие')}</div>
        <div className={s.lessonInfo}>
          <div className={s.infoItem}>
            {t('student~Метро')}: {hall.locations.map(location => <span key={location.id}>{location.name} </span>)}
          </div>
          <div className={s.infoItem}>{t('student~Время')}: {time.slice(11, 16)}</div>
          <div className={s.infoItem}>{t('student~Уровень')}: {levelRepresentation[level]}</div>
          <div className={s.infoItem}>{t('student~Направление')}: {typeRepresentation[type]}</div>
          <div className={s.infoItem}>{t('student~Адрес')}: {t('student~ул.')} {hall.street}</div>
          <div className={s.infoItem}>{t('student~Педагог')}: {teacher.firstName} {teacher.lastName}</div>
        </div>
        <Button
          className={s.button}
          theme="ghostPurple"
          onClick={e => { trialLessonVar(id); props.onRequestClose(e); }}
        >
          {t('student~Записаться на занятие')}
        </Button>
      </Modal>
    );
};