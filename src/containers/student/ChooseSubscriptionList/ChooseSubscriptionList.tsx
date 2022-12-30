import * as React from 'react';
import { ChooseSubscriptionList } from '@components/student/ChooseSubscriptionList';
import { useChooseSubscriptionListQuery } from '@graphql';

export const ChooseSubscriptionListContainer = () => {
  const { data } = useChooseSubscriptionListQuery({
    variables: { forPointe: false }
  });

  if (!data) {
    return null;
  }

  const subscriptions = data.viewer.student.lessonSubscriptions;

  return (
    <ChooseSubscriptionList
      subscriptions={subscriptions}
    />
  );
};