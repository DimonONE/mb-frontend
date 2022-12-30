import * as React from 'react';

import { VisitorToggleActionButton } from '@components/teacher/VisitorToggleActionButton';
import { useVisitorTogglePaymentMutation } from '@graphql';
import { PaymentSource } from '@constants';
import HandPay from '@svg/handPay.svg';
import MoneyBag from '@svg/moneyBag.svg';

import * as s from './VisitorTogglePayment.sss';

type PaymentInfo = {
  paid: boolean
  source: PaymentSource.Online | PaymentSource.OnLesson | null
  amount: number
};

type VisitorTogglePaymentProps = {
  visitorId: number
  paymentInfo: PaymentInfo;
  disabled: boolean
  className?: string
};

export const VisitorTogglePayment: React.FC<VisitorTogglePaymentProps> = ({
  visitorId,
  paymentInfo,
  disabled,
  className,
}) => {
  const [toggleVisit] = useVisitorTogglePaymentMutation({
    variables: { visitorId, isPaid: !paymentInfo.paid },
  });

  const canPay = (
    paymentInfo.source === null ||
    paymentInfo.source === undefined ||
    paymentInfo.source === PaymentSource.OnLesson
  );

  return (
    <VisitorToggleActionButton
      className={className}
      active={paymentInfo.paid}
      disabled={!canPay || disabled}
      onClick={toggleVisit}
    >
      {
        paymentInfo.paid
        ? (
          <MoneyBag className={s.moneyBagIcon} />
        )
        : (
          <HandPay className={s.handPayIcon} />
        )
      }
    </VisitorToggleActionButton>
  );
};