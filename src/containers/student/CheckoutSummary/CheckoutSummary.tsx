import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  CheckoutSummary,
  CheckoutSummaryProps
} from '@components/student/CheckoutSummary';
import {
  useCreateGroupSubscriptionOrderMutation,
  useCreateIndividualSubscriptionOrderMutation
} from '@graphql';
import { studentCheckoutThanks } from '@urls';

type CheckoutSummaryContainerProps = Omit<CheckoutSummaryProps, 'paymentData'> & {
  subscriptionId: number
};

const returnUrl = `${window.location.origin}${studentCheckoutThanks}`;

export const CheckoutSummaryContainer: React.FC<CheckoutSummaryContainerProps> = props => {
  const { schedule, subscriptionId } = props;
  const [createGroupOrder] = useCreateGroupSubscriptionOrderMutation();
  const [createIndividualOrder] = useCreateIndividualSubscriptionOrderMutation();
  const [paymentData, setPaymentData] = useState<object | undefined>();

  // TODO (lnalkman): avoid inefficient order creation
  useEffect(
    () => {(
      async () => {
        let wfpDataString;
        if ('groupId' in schedule) {
          const { data } = await createGroupOrder({
            variables: {
              returnUrl,
              groupId: schedule.groupId,
              lessonSubscriptionId: subscriptionId,
            }
          });
          wfpDataString = data.createLessonPurchaseOrder.data;
        } else if ('lessonTemplatesIds' in schedule) {
          const { data } = await createIndividualOrder({
            variables: {
              returnUrl,
              lessonTemplatesIds: schedule.lessonTemplatesIds,
              lessonSubscriptionId: subscriptionId,
            }
          });
          wfpDataString = data.createLessonPurchaseOrder.data;
        }
        setPaymentData(JSON.parse(wfpDataString));
      }
    )(); },
    [schedule, subscriptionId]
  );

  return (
    <CheckoutSummary
      {...props}
      paymentData={paymentData}
    />
  );
};