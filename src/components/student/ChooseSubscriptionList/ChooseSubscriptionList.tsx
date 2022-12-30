import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import {
  Subscription as CardSubscriptionInfo,
  SubscriptionCard
} from '@components/student/SubscriptionCard';
import { Button } from '@components/student/Button';
import { selectedSubscriptionVar } from '@local-state/vars';
import { generatePath, useHistory, useRouteMatch } from 'react-router-dom';
import { studentCheckout, studentScheduleSelectSubscription } from '@urls';
import { ScheduleType } from '@constants';

import * as s from './ChooseSubscriptionList.sss';

type MatchParams = {
  scheduleType: ScheduleType
};

export type Subscription = CardSubscriptionInfo & {
  id: number
};

type ChooseSubscriptionListProps = {
  subscriptions: Subscription[]
  className?: string
};

export const ChooseSubscriptionList: React.FC<ChooseSubscriptionListProps> = ({
  subscriptions,
  className
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const match = useRouteMatch<MatchParams>(studentScheduleSelectSubscription);

  const onPurchaseClick = (subscriptionId: number) => {
    selectedSubscriptionVar(subscriptionId);
    history.push(
      generatePath(
        studentCheckout,
        { scheduleType: match.params.scheduleType }
      )
    );
  };

  return (
    <div className={classNames(s.root, className)}>
      {
        subscriptions.map(subscription => (
            <SubscriptionCard
              key={subscription.id}
              className={s.card}
              subscription={subscription}
              action={
                <Button
                  className={s.actionButton}
                  theme="primaryOrange"
                  onClick={() => onPurchaseClick(subscription.id)}
                >
                  {t('student~Купить')}
                </Button>
              }
            />
          )
        )
      }
    </div>
  );
};