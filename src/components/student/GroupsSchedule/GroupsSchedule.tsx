import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { LessonSchedule } from '@components/student/ScheduleCard';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { ScheduleCard } from '@components/student/ScheduleCard';
import { Button } from '@components/student/Button';
import { BookGroupModal } from '@components/student/BookGroupModal';

import * as s from './GroupsSchedule.sss';

type GroupsScheduleProps = {
  className?: string
  groupsLessonsSchedule: LessonSchedule[]
};

export const GroupsSchedule: React.FC<GroupsScheduleProps> = ({
  className,
  groupsLessonsSchedule
}) => {

  const { t } = useTranslation();
  const [ groupDataForModal, setGroupDataForModal] = useState<LessonSchedule | undefined>();

  return (
    <LayoutContainer className={classNames(s.root, className)}>
      {groupDataForModal &&
        <BookGroupModal
          isOpen={!!groupDataForModal}
          onRequestClose={() => setGroupDataForModal(undefined)}
          groupData={groupDataForModal}
        />
      }
      <div className={s.mainInfo}>
        {
          groupsLessonsSchedule.map( 
            group =>
              <div
                className={s.groupCard}
                key={group.id}
                onClick={() => setGroupDataForModal(group)}
              >
                <ScheduleCard lessonSchedule={group} />
                <Button
                  className={s.primaryButton}
                  onClick={() => setGroupDataForModal(group)}
                >
                  {t('student~Забронировать группу')}
                </Button>
              </div>
          )
        }
      </div>
      <div className={s.additionalInfo}>
        <div>{t('student~Ничего не подходит? Вы можете создать свое индивидуальное расписание')}</div>
        <Button theme="ghostPurple" className={s.ghostButton}>{t('student~Индивидуальное расписание')}</Button>
      </div>
    </LayoutContainer>
  );
};