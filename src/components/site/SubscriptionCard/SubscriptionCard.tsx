import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/student/Button';
import { Card } from '@components/ui/Card';
import { trialLessonModalHash } from '@urls';
import { Link } from '@components/ui/Link';
import CheckIcon from '@svg/check.svg';

import * as s from './SubscriptionCard.sss';

export enum SubscriptionType {
  Offline,
  Online
}

export type Subscription = {
  image: {
    x1: string
    x2: string
  }
  name: string
  description: string
  price: number
  monthsCount: number
  benefits: string[]
};

type SubscriptionCardProps = {
  subscription: Subscription
  type: SubscriptionType
  isBestChoice?: boolean
  className?: string
};

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  type,
  isBestChoice = false,
  className,
}) => {
  const { t } = useTranslation();
  const {
    image,
    name,
    description,
    price,
    monthsCount,
    benefits,
  } = subscription;

  return (
    <Card className={classNames(s.root, s.online, className)}>
      <div>
        <img
          className={classNames(s.image, 'lazyload')}
          data-srcset={`${image.x1} 1x, ${image.x2} 2x`}
        />

        <div className={s.name}>{name}</div>
        <div className={s.description}>{description}</div>
        <div className={classNames(s.price, type === SubscriptionType.Offline ? s.offline : '' )}>{price}</div>
        <div className={s.pricePer}>
          {
            type === SubscriptionType.Online
            ? 'грн/урок'
            : 'грн/місяць'
          }
        </div>

        <div className={s.benefits}>
          {
            benefits.map(
              (benefit, i) => (
                <div key={i} className={s.benefit}>
                  <CheckIcon className={s.checkIcon} />
                  {benefit}
                </div>
              )
            )
          }
        </div>
      </div>

      <Link theme="clean" to={trialLessonModalHash}>
        <Button
          theme={type === SubscriptionType.Offline ? "ghostPurple" : "ghostOrange"}
          className={s.button}
        >
          {
            type === SubscriptionType.Online
            ? t('site~Купити')
            : t(`site~Купить за ${price}/${monthsCount > 1 ? monthsCount : ''}міс.`)
          }
        </Button>
      </Link>
    </Card>
  );
};