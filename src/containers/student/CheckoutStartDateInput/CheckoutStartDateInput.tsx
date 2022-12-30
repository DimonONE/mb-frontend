import * as React from 'react';
import dayjs from 'dayjs';

import { CheckoutStartDateInput } from '@components/student/CheckoutStartDateInput';
import { useCheckoutStartDateInputInfoQuery } from '@graphql';

type CheckoutStartDateInputContainerProps = {
  value?: dayjs.Dayjs
  onChange: (value: dayjs.Dayjs) => void
  schedule: ScheduleInfo
};

export type ScheduleInfo = (
  { groupId: number }
  | { lessonTemplatesIds: number }
);

export const CheckoutStartDateInputContainer:
  React.FC<CheckoutStartDateInputContainerProps> = ({
    value,
    onChange,
  }) => {
  const { loading, data, error } = useCheckoutStartDateInputInfoQuery({
    variables: { groupId: 1 },
    onCompleted: ({ subscriptionStartDates }) => {
      onChange(dayjs(subscriptionStartDates[0]));
    }
  });

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (value) {
    if (data) {
      const dates = data.subscriptionStartDates.map(
        date => dayjs(date)
      );
      return (
        <CheckoutStartDateInput
          availableDates={dates}
          value={value}
          onChange={onChange}
        />
      );
    }

    throw new Error('Empty render');
  }

  return null;
};