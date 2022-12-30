import * as React from 'react';
import { useState } from 'react';
import * as classNames from 'classnames';

import { PaymentSource } from '@constants';
import { VisitorToggleVisit } from '@containers/teacher/VisitorToggleVisit';
import { VisitorTogglePayment } from '@containers/teacher/VisitorTogglePayment';
import { StudentCardCommentsContainer } from '@containers/teacher/StudentCardComments';
import Dialog from '@svg/dialog.svg';
import ExclemationMark from '@svg/exclemationMark.svg';

import * as s from './LessonDetailStudentCard.sss';

type PaymentInfo = {
  paid: boolean
  source: PaymentSource.Online | PaymentSource.OnLesson | null
  amount: number
};

type LessonDetailStudentCardProps = {
  visitorId: number
  isVisited: boolean
  avatarUrl: string
  firstName: string
  lastName: string
  paymentInfo: PaymentInfo | undefined
  isFirstVisit: boolean
  newMessages: boolean
  isLessonClosed: boolean
  className?: string
};

export const LessonDetailStudentCard: React.FC<LessonDetailStudentCardProps> = ({
  visitorId,
  isVisited,
  avatarUrl,
  firstName,
  lastName,
  paymentInfo,
  isFirstVisit,
  isLessonClosed,
  className,
}) => {
  const [isCommentsOpened, setIsCommentsOpened] = useState(false);

  let paymentInfoComponent;
  if (paymentInfo) {
    if (!paymentInfo.paid) {
      paymentInfoComponent = (
        <div className={s.notPaid}>
          не оплачено {paymentInfo.amount}
        </div>
      );
    } else if (paymentInfo.source === PaymentSource.Online) {
      paymentInfoComponent = (
        <div className={s.paidOnline}>
          оплачено
        </div>
      );
    } else if (paymentInfo.source === PaymentSource.OnLesson) {
      paymentInfoComponent = (
        <div className={s.paidOnLesson}>
          оплачено
        </div>
      );
    }
  }

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.actionGroup}>
        <VisitorTogglePayment
          className={s.actionButtonLeft}
          visitorId={visitorId}
          paymentInfo={paymentInfo}
          disabled={isLessonClosed}
        />
        <div
          className={s.profile}
          onClick={() => setIsCommentsOpened(!isCommentsOpened)}
        >
          <div className={s.avatarOuter}>
            <img
              className={s.avatar}
              src={avatarUrl}
              alt={`${firstName} ${lastName}`}
            />
          </div>
          <div className={s.info}>
            <div className={s.fullName}>
              <span>{firstName} {lastName}</span>
              {
                isFirstVisit &&
                  <ExclemationMark className={s.icon} />
              }
            </div>
            {paymentInfoComponent}
            <div className={s.commentIconOuter}>
              <Dialog className={s.icon} />
              <span className={s.commentWord}>комментарий</span>
            </div>
          </div>
        </div>
        <VisitorToggleVisit
          className={s.actionButtonRight}
          visitorId={visitorId}
          isVisited={isVisited}
          disabled={isLessonClosed}
        />
      </div>
      {
        isCommentsOpened &&
        <StudentCardCommentsContainer
          visitorId={visitorId}
          className={s.comments}
        />
      }
    </div>
  );
};
