import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import SnowflakeIcon from '@static/svg/snowflake.svg';
import SquaresIcon from '@static/svg/squares.svg';

import * as s from './SubscriptionCard.sss';

export type Subscription = {
  name: string
  lessonsCount: number
  price: number
  description: string
  movesCount: number
  freezeDaysCount: number
};

export type SubscriptionCardProps = {
  subscription: Subscription
  action?: React.ReactNode
  className?: string
};

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  action,
  className
}) => {
  const { t } = useTranslation();
  const {
    name,
    lessonsCount,
    price,
    description,
    movesCount,
    freezeDaysCount,
  } = subscription;

  return (
    <div className={classNames(s.root, className)}>
      <div>
        <div className={s.name}>{name}</div>
        <div className={s.price}>за {price} грн</div>
        <div className={s.pricePerLesson}>
          {
            lessonsCount > 1 &&
            t('student~за {{price}} грн / заняття', { price: Math.ceil(price / lessonsCount) })
          }
        </div>

        <div className={s.description}>{description}</div>

        {
          movesCount || freezeDaysCount
          ? (
            <div className={s.perks}>
              {
                movesCount > 0 &&
                  <div className={s.perk}>
                    <SquaresIcon className={s.perkIcon} />
                    {t('student~Перенос {{movesCount}} заняття', { movesCount })}
                  </div>
              }
              {
                freezeDaysCount > 0 &&
                  <div className={s.perk}>
                    <SnowflakeIcon className={s.perkIcon} />
                    {t('student~Заморозка до {{freezeCount}} днів', { freezeCount: freezeDaysCount })}
                  </div>
              }
            </div>
          )
          : null
        }
      </div>

      {action && <div className={s.action}>{action}</div>}
    </div>
  );
};
