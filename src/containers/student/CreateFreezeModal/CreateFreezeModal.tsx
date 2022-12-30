import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { withTypes } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

import {
  CreateFreezeModal,
  CreateFreezeModalProps,
  FormValues,
} from '@components/student/CreateFreezeModal';
import { useCreateSubscriptionFreezingMutation } from '@graphql';
import { getFieldsSingleError } from '@utils/common';

type CreateFreezeModalContainerProps = CreateFreezeModalProps & {
  lessonPurchaseId: number
  onFreezeCreated: () => void
};

export const CreateFreezeModalContainer: React.FC<CreateFreezeModalContainerProps> = ({
  lessonPurchaseId,
  onFreezeCreated,
  ...props
}) => {
  const { t } = useTranslation();
  const { Form } = withTypes<FormValues>();
  const [createFreezing]  = useCreateSubscriptionFreezingMutation();

  const onSubmit = async (values: FormValues) => {
    const response = await createFreezing({
      variables: {
        lessonPurchaseId,
        startDate: values.startDate.id.format('YYYY-MM-DD'),
        durationDays: values.durationDays.id,
        reference: values.reference,
      }
    });

    const mutationErrors = response.data?.createSubscriptionFreezing?.errors;
    if (mutationErrors) {
      return getFieldsSingleError(mutationErrors);
    }

    if (!response?.data) {
      return {
        [FORM_ERROR]: t('student~Что-то пошло не так:(')
      };
    }

    onFreezeCreated();
  };

  // TODO (lnalkman): add errors handling in form
  return (
    <Form
      onSubmit={onSubmit}
      render={
        () => <CreateFreezeModal {...props} />
      }
    />
  );
};