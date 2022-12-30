import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import { getLessonDeclension } from '@utils/wordDeclension';
import { Button } from '@components/student/Button';
import ArrowToBottomIcon from '@svg/arrowToBottom.svg';
import { CreateFreezeModalContainer } from '@containers/student/CreateFreezeModal';

import * as s from './PurchasedSubscriptionCard.sss';

type LessonSubscription = {
  id: number
  name: string
  lessonsCount: number
  movesCount: number
  freezeDaysCount: number
};

export type Hall = {
  id: number
  name: string
  city: string
  street: string
  number: string
};

type Schedule = {
  id: number
  hall: Hall
  weekday: number
  time: string
};

export type PurchasedSubscription = {
  id: number
  lessonSubscription: LessonSubscription
  freezeUsed: boolean
  lessonsUsed: number
  movementsUsed: number
  expireAt: string
  schedule?: Schedule[]
};

type PurchasedSubscriptionCardProps = {
  className?: string
  purchasedSubscription: PurchasedSubscription
};

export const PurchasedSubscriptionCard: React.FC<PurchasedSubscriptionCardProps> = ({
  className,
  purchasedSubscription
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false);
  const {
    id,
    lessonSubscription,
    freezeUsed,
    lessonsUsed,
    movementsUsed,
    expireAt,
    schedule
  } = purchasedSubscription;

  const groupInfo = schedule.map(
    lesson => (
      `${t('student~ул.')} ${lesson.hall.street}, ${lesson.hall.number}` +
      ' ' +
      `${dayjs().day(lesson.weekday).format('dd').toUpperCase()}, ${lesson.time}`
    )
  ).join(' | ');
  return (
    <div className={classNames(s.root, className)}>
      <div
        className={s.header}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {lessonSubscription.name}
        <ArrowToBottomIcon className={
          classNames(
            s.arrow,
            { [s.expanded]: isExpanded }
          )}
        />
      </div>
      <div className={s.topInfo}>
        <div className={s.infoItem}>
          <span>{t('student~Использовано занятий')}</span>
          <span className={s.count}>
            <span className={s.highlightedCount}>{lessonsUsed}</span>/{lessonSubscription.lessonsCount}
          </span>
        </div>
        <div className={s.infoItem}>
          <span>{t('student~Использовано переносов')} </span>
          <span className={s.count}>
            <span className={s.highlightedCount}>{movementsUsed}</span>/{lessonSubscription.movesCount}
          </span>
        </div>
        <div className={s.infoItem}>
          <span>{t('student~Использовано заморозок')} </span>
          <span className={s.count}>
            <span className={s.highlightedCount}>{+freezeUsed}</span>/{+!!lessonSubscription.freezeDaysCount}
          </span>
        </div>
      </div>
      <div className={classNames(s.secondaryInfo, {[s.expandedMenu]: isExpanded })}>
        <div className={s.subHeader}>{t('student~Информация об абонементе')}</div>
        <div className={s.hidenInfo}>
          {t('student~Количество занятий')}:
          {' '}
          {lessonSubscription.lessonsCount} {getLessonDeclension(t, lessonSubscription.lessonsCount)}
        </div>
        <div className={s.hidenInfo}>
          {t('student~Срок действия: до')} {dayjs(expireAt).format('DD MMMM')}
        </div>
        <div className={s.hidenInfo}>
          {t('student~Количество переносов')}: {lessonSubscription.movesCount}
        </div>
        <div className={s.hidenInfo}>
          {t('student~Количество дней заморозок')}: {+lessonSubscription.freezeDaysCount}
        </div>
        <div className={s.hidenInfo}>
          {t('student~Группа')}:
          {' '}
          {groupInfo}
        </div>
      </div>
      <div className={classNames(s.buttonContainer, {[s.expandedMenu]: isExpanded })}>
        <div className={s.buttons}>
          <Button className={s.ghostButton} theme="ghostOrange">{t('student~Изменить')}</Button>
          <Button
            className={s.ghostButton}
            theme="ghostOrange"
            onClick={() => setIsFreezeModalOpen(true)}
          >
            {t('student~Заморозить')}
          </Button>
        </div>
        <Button className={s.primaryButton} theme="primaryOrange">{t('student~Продлить абонемент')}</Button>
      </div>

      <CreateFreezeModalContainer
        isOpen={isFreezeModalOpen}
        onRequestClose={() => setIsFreezeModalOpen(false)}
        onFreezeCreated={() => setIsFreezeModalOpen(false)}
        lessonPurchaseId={id}
        lessonsCount={lessonSubscription.lessonsCount}
        lastLessonTime={dayjs(expireAt)}
        movesCount={lessonSubscription.movesCount}
        freezeCount={1}
        groupInfo={groupInfo}
      />
    </div>
  );
};