import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/student/Button';
import { LessonSchedule, ScheduleCard } from '@components/student/ScheduleCard';

import * as s from './CheckoutScheduleInfo.sss';

type CheckoutScheduleInfoProps = {
  schedule: LessonSchedule | LessonSchedule[]
  className?: string
};

export const CheckoutScheduleInfo: React.FC<CheckoutScheduleInfoProps> = ({
  schedule,
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.title}>
        {t('student~Расписание занятий')}
      </div>

      {
        Array.isArray(schedule)
        ? schedule.map(
          lesson => <ScheduleCard key={lesson.id} lessonSchedule={lesson} />
        )
        : <ScheduleCard lessonSchedule={schedule} />
      }

      <Button
        className={s.changeScheduleButton}
        theme="secondaryPurple"
      >
        {t('student~Выбрать другое расписание')}
      </Button>
    </div>
  );
};