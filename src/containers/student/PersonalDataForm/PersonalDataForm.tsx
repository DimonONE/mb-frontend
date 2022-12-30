import * as React from 'react';
import { useState } from 'react';
import { FormProps, withTypes } from 'react-final-form';

import {
  PersonalDataForm,
  FormValues,
} from '@components/student/PersonalDataForm';
import {
  usePersonalDataQuery,
  useSendPhoneVerificationCodeMutation,
  useUpdatePersonalDataMutation,
} from '@graphql';
import { getFieldsSingleError, normalizePhoneNumber } from '@utils/common';

export const PersonalDataFormContainer: React.FC = () => {
  const [requestPhoneVerification, setRequestPhoneVerification] = useState(false);
  const { Form } = withTypes<FormValues>();
  const { loading, data, error } = usePersonalDataQuery();
  const [updateProfile] = useUpdatePersonalDataMutation();
  const [sendVerificationCode] = useSendPhoneVerificationCodeMutation();

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (!data.viewer) {
    throw new Error('Empty viewer');
  }

  const onSubmit: FormProps<FormValues>['onSubmit'] = async (values, form) => {
    const { phoneNumber } = values;
    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    const isPhoneNumberChanged = normalizedPhoneNumber !== form.getFieldState('phoneNumber').initial;

    // If user changed phone number we need to ask verification
    if (!requestPhoneVerification && isPhoneNumberChanged) {
      const { data: sendVerificationCodeData } = await sendVerificationCode({
        variables: { phoneNumber }
      });
      if (sendVerificationCodeData.sendPhoneVerificationCode.errors) {
        return getFieldsSingleError(
          sendVerificationCodeData.sendPhoneVerificationCode.errors
        );
      }
      setRequestPhoneVerification(true);
      return;
    }

    const { data: mutationData } = await updateProfile({
      variables: values
    });

    if (mutationData.updateProfile.errors) {
      return getFieldsSingleError(mutationData.updateProfile.errors);
    }

    return;
  };

  const { viewer } = data;
  return (
    <Form
      initialValues={viewer}
      onSubmit={onSubmit}
      render={() => (
        <PersonalDataForm
          requestPhoneVerification={requestPhoneVerification}
          avatarUrl={viewer.avatarUrl}
        />
      )}
    />
  );
};