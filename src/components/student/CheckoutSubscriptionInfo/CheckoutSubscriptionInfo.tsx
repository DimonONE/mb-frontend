import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { SubscriptionCard, SubscriptionCardProps } from '@components/student/SubscriptionCard';
import { Button } from '@components/student/Button';

import * as s from './CheckoutSubscriptionInfo.sss';

type CheckoutSubscriptionInfoProps = SubscriptionCardProps & {
  className?: string
};

export const CheckoutSubscriptionInfo: React.FC<CheckoutSubscriptionInfoProps> = ({
  className,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.title}>{t('student~Абонемент')}</div>

      <SubscriptionCard {...props} />

      <Button
        className={s.changeSubscriptionButton}
        theme="secondaryPurple"
      >
        {t('student~Выбрать другой абонемент')}
      </Button>
    </div>
  );
};
