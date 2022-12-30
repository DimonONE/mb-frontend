import * as React from 'react';
import * as dayjs from 'dayjs';
import {
  generatePath,
  useHistory
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Modal,
  ModalProps,
} from '@components/student/Modal';
import type { LessonSchedule } from '@components/student/ScheduleCard';
import { Button } from '@components/student/Button';
import {
  levelRepresentation,
  ScheduleType,
  typeRepresentation
} from '@constants';
import { studentScheduleSelectSubscription } from '@urls';
import { selectedGroupVar } from '@local-state/vars';

import * as s from './BookGroupModal.sss';

type BookGroupModalProps = ModalProps & {
  groupData: LessonSchedule
  withClose?: boolean
};

export const BookGroupModal: React.FC<BookGroupModalProps> = ({
  groupData: {
    id,
    hall,
    level,
    teacher,
    time,
    type,
    days
  },
  ...props
}) => {
    const { t } = useTranslation();
    const history = useHistory();

    return (
      <Modal
        className={s.root}
        theme="orange"
        withClose
        {...props}
      >
        <div className={s.title}>{t('student~Забронировать группу')}</div>
        <div className={s.groupInfo}>
          <div className={s.infoItem}>
            {t('student~Группа')}: {days.map(day => dayjs().day(day).format('dddd')).join(' - ')}
          </div>
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
          onClick={() => {
            selectedGroupVar(id);
            history.push(generatePath(
              studentScheduleSelectSubscription,
              { scheduleType: ScheduleType.Group }
            ));
          }}
        >
          {t('student~Забронировать')}
        </Button>
      </Modal>
    );
};