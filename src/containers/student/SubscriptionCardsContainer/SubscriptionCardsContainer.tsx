import * as React from 'react';

import { PurchasedSubscriptionsFeed } from '@components/student/PurchasedSubscriptionsFeed';

import { useStudentSubscriptionQuery } from '@graphql';

type SubscriptionCardsContainerProps = {
  className?: string
};

export const SubscriptionCardsContainer: React.FC<SubscriptionCardsContainerProps> = ({
  className
}) => {

  const { loading, data, error } = useStudentSubscriptionQuery();

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const {
    viewer: {
      student: {
        purchasedLessonSubscriptions
      }
    }
  } = data;

  return (
    <PurchasedSubscriptionsFeed 
      purchasedLessonSubscriptions={purchasedLessonSubscriptions}
    />
  );
};