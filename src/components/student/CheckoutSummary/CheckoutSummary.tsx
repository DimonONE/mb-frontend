import * as React from 'react';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import {
  CheckoutStartDateInputContainer,
  ScheduleInfo
} from '@containers/student/CheckoutStartDateInput';
import { getLessonDeclension } from '@utils/wordDeclension';
import { Button } from '@components/student/Button';
import { Link } from '@components/ui/Link';
import { paymentDataToFormInputs } from '@utils/common';

import * as s from './CheckoutSummary.sss';

export type CheckoutSummaryProps = {
  lessonsCount: number
  isTrial: boolean
  price: number
  schedule: ScheduleInfo
  paymentData: object | undefined
  className?: string
};

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  lessonsCount,
  isTrial,
  price,
  schedule,
  paymentData,
  className,
}) => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<dayjs.Dayjs | undefined>();

  let subscriptionName;
  if (isTrial) {
    subscriptionName = t('student~Попробовать');
  } else if (lessonsCount === 1) {
    subscriptionName = t('student~Разовое занятие');
  } else {
    subscriptionName = `${lessonsCount} ${getLessonDeclension(t, lessonsCount)}`;
  }

  return (
    <div className={className}>
      <div className={s.title}>{t('student~Итого:')}</div>
      <div className={s.card}>
        <div className={s.priceSection}>
          <div className={s.subscriptionName}>
            {subscriptionName}
            <CheckoutStartDateInputContainer
              schedule={schedule}
              value={startDate}
              onChange={setStartDate}
            />
          </div>
          <div className={s.subscriptionPrice}>{price} грн</div>
        </div>
        <div className={s.bottomSection}>
          <div className={s.summarySection}>
            <div className={s.summary}>{t('student~Итого:')}</div>
            <div className={s.summaryPrice}>{price} грн</div>
          </div>

          <form
            method="POST"
            action="https://secure.wayforpay.com/pay"
          >
            {!!paymentData && paymentDataToFormInputs(paymentData)}
            <Button
              className={s.payButton}
              type="submit"
              disabled={!paymentData}
            >
              {t('student~Оплатить')}
            </Button>
          </form>

          <div className={s.legalInfo}>
            <Trans ns="student">
              Нажимая кнопку "Оплатить", вы принимаете
              {' '}
              <Link href="/">лицензионное соглашение</Link>
              {' '}
              и
              {' '}
              <Link href="/">политику конфиденциальности</Link>
            </Trans>
          </div>
        </div>
      </div>
    </div>
  );
};