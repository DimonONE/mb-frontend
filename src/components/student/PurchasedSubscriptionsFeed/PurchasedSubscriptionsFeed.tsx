import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import {
  PurchasedSubscriptionCard,
  PurchasedSubscription
} from '@components/student/PurchasedSubscriptionCard';
import { LayoutContainer } from '@components/student/LayoutContainer';

import * as s from './PurchasedSubscriptionsFeed.sss';

type PurchasedSubscriptionsFeed = {
  className?: string
  purchasedLessonSubscriptions: PurchasedSubscription[]
};

export const PurchasedSubscriptionsFeed: React.FC<PurchasedSubscriptionsFeed> = ({
  purchasedLessonSubscriptions,
  className
}) => {
  const { t } = useTranslation();

  return (
    <LayoutContainer className={classNames(s.root, className)}>
      <div className={s.header}>
        {t('student~Мой абонемент')}
      </div>
      {
        purchasedLessonSubscriptions.map(
          purchasedSubscription => (
            <PurchasedSubscriptionCard
              purchasedSubscription={purchasedSubscription}
              key={purchasedSubscription.id}
            />
          )
        )
      }
    </LayoutContainer>
  );
};