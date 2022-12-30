import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Redirect, useParams } from 'react-router-dom';

import { BasePage } from '@components/student/BasePage';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { CheckoutSubscriptionInfo } from '@components/student/CheckoutSubscriptionInfo';
import { CheckoutScheduleInfo } from '@components/student/CheckoutScheduleInfo';
import { CheckoutSummaryContainer } from '@containers/student/CheckoutSummary';
import useStudentCheckoutData from '@local-state/hooks/useStudentCheckoutData';
import { ScheduleType } from '@constants';
import { studentSchedule, studentScheduleSelectSubscription } from '@urls';

import * as s from './CheckoutPage.sss';

type RouterParams = {
  scheduleType: ScheduleType | string
};

export const CheckoutPage: React.FC = () => {
  const { t } = useTranslation();
  const { scheduleType } = useParams<RouterParams>();
  const {
    group,
    lessonTemplates,
    subscription
  } = useStudentCheckoutData();

  let schedule;
  if (scheduleType === ScheduleType.Group) {
    if (!group) {
      return <Redirect to={generatePath(studentSchedule, { scheduleType })} />;
    }
    schedule = group;
  } else if (scheduleType === ScheduleType.Individual || scheduleType === ScheduleType.Trial) {
    if (!lessonTemplates.length) {
      return <Redirect to={generatePath(studentSchedule, { scheduleType })} />;
    }
    schedule = lessonTemplates;
  } else {
    throw new Error('Unknown schedule type');
  }
  if (!subscription) {
    return <Redirect to={generatePath(studentScheduleSelectSubscription, { scheduleType })} />;
  }

  return (
    <BasePage className={s.root} theme="grey">
      <LayoutContainer>
        <div className={s.title}>{t('student~Оформление заказа')}</div>
        <div className={s.content}>
          <div className={s.leftSide}>
            <CheckoutScheduleInfo
              className={s.scheduleInfo}
              schedule={schedule}
            />
            <CheckoutSubscriptionInfo
              className={s.subscriptionInfo}
              subscription={subscription}
            />
          </div>
          <div className={s.rightSide}>
            <CheckoutSummaryContainer
              className={s.summary}
              lessonsCount={subscription.lessonsCount}
              isTrial={false}
              price={subscription.price}
              schedule={
                schedule.__typename === 'Group'
                ? { groupId: schedule.id }
                : { lessonTemplatesIds: schedule.map(template => template.id) }
              }
              subscriptionId={subscription.id}
            />
          </div>
        </div>
      </LayoutContainer>
    </BasePage>
  );
};

export default CheckoutPage;