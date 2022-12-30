import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as classNames from 'classnames';

import { SubscriptionCard, SubscriptionType } from '@components/site/SubscriptionCard';
import { LayoutContainer } from '@components/student/LayoutContainer';

import {
  individualSubscriptions,
  subscriptions
} from './constants';

import * as s from './OnlineSubscriptions.sss';

type OnlineSubscriptionsProps = {
  theme?: keyof typeof themeClassName
  className?: string
};

const themeClassName = {
  violet: s.themeViolet,
  lightGrey: s.themeLightGrey,
};

export const OnlineSubscriptions: React.FC<OnlineSubscriptionsProps> = ({
  theme = 'violet',
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, themeClassName[theme], className)}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Вартість')}</div>
        <div className={s.subTitle}>{t('site~Mary Ballet - це про зручний вибір для здійснення мрій. Обирай - займатись в групі чи індивідуально. А далі почнеться magie!')}</div>

        <div className={s.subscriptionsBlock}>
          {
            subscriptions.map(
              subscription => (
                <SubscriptionCard
                  key={subscription.id}
                  className={s.card}
                  type={SubscriptionType.Online}
                  subscription={{
                    ...subscription,
                    name: subscription.title,
                    benefits: subscription.subscription.map(s => s.text),
                    price: subscription.priceNumber,
                    monthsCount: 1
                  }}
                />
              )
            )
          }
        </div>

        <div
          className={classNames(s.title, s.individualsTitle)}
        >
          {t('site~Індивідуальні заняття')}
        </div>
        <div className={s.subTitle}>{t('site~У групі займатися веселіше, але тут весь час присвячений тільки тобі. \n' +
          'Урок будується згідно твоїх побажань, а навантаження підбирається за особливостями твого тіла. Скажи нам свої цілі і ми разом почнемо їх здійснювати!\n')}</div>

        <div className={s.subscriptionsBlock}>
          {
            individualSubscriptions.map(
              subscription => (
                <SubscriptionCard
                  key={subscription.id}
                  className={s.card}
                  type={SubscriptionType.Online}
                  subscription={{
                    ...subscription,
                    name: subscription.title,
                    benefits: subscription.subscription.map(s => s.text),
                    price: subscription.priceNumber,
                    monthsCount: 1
                  }}
                />
              )
            )
          }
        </div>
      </LayoutContainer>
    </div>
  );
};