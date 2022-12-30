import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { SubscriptionCard, SubscriptionType, Subscription } from '@components/site/SubscriptionCard';
import { LayoutContainer } from '@components/student/LayoutContainer';

import * as s from './OfflineSubscriptionsList.sss';

export type OfflineSubscriptionsListProps = {
  balletSubscriptions: SubscriptionCardType[]
  pointeSubscriptions: SubscriptionCardType[]
  theme?: keyof typeof themeClassName
  className?: string
};

export interface SubscriptionCardType extends Subscription {
  available: boolean;
  freezeDaysCount: number;
  id: number;
  lessonsCount: number;
  title: string,
  subscription: {text: string}[] | null;
  priceNumber: number,
  __typename?: string
}

const themeClassName = {
  orange: s.themeOrange,
  lightGrey: s.themeLightGrey,
};

export const OfflineSubscriptionsList: React.FC<OfflineSubscriptionsListProps> = ({
  balletSubscriptions,
  pointeSubscriptions,
  theme = 'orange',
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, themeClassName[theme], className)}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Абонементи на балет та стретчинг')}</div>
        <div className={s.subscriptionsBlock}>
          {
            balletSubscriptions.map(
              subscription => (
                <SubscriptionCard
                  key={subscription.id}
                  className={s.card}
                  type={SubscriptionType.Offline}
                  subscription={{
                    ...subscription,
                    name: subscription.title,
                    benefits: subscription.subscription.map(s => s.text),
                    price: subscription.priceNumber,
                    monthsCount: 1,
                  }}
                />
              )
            )
          }
        </div>

        {!!pointeSubscriptions.length &&
          <>
            <div className={classNames(s.title, s.pointeTitle)}>
              {t('site~Абонементи на пуанти')}
            </div>
            <div className={s.subscriptionsList}>
              {
                pointeSubscriptions.map(subscription => (
                    <SubscriptionCard
                      key={subscription.id}
                      className={s.card}
                      type={SubscriptionType.Offline}
                      subscription={subscription}
                    />
                  )
                )
              }
            </div>
          </>
        }
      </LayoutContainer>
    </div>
  );
};