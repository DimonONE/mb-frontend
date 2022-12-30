import * as React from 'react';
import { useState } from 'react';
import { FormProps, withTypes } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import {
  RequestPhoneForm,
  FormValues as RequestPhoneFormValues,
} from '@components/auth/RequestPhoneForm';
import {
  VerificationCodeForm,
  FormValues as VerificationCodeFormValues,
} from '@components/auth/VerificationCodeForm';
import {
  NewPasswordForm,
  FormValues as NewPasswordFormValues,
} from '@components/auth/NewPasswordForm';
import { useResetPasswordMutation, useSendVerificationCodeMutation, useVerifyCodeMutation } from '@graphql';
import { getFieldsSingleError } from '@utils/common';
import { FORM_ERROR } from 'final-form';

type FormValues = RequestPhoneFormValues
  | VerificationCodeFormValues
  | NewPasswordFormValues;

type ResetPasswordData = {
  phone?: string
  verificationCode?: string
};

export const ResetPasswordFormContainer: React.FC = () => {
  const { t } = useTranslation();
  const { Form } = withTypes<FormValues>();
  const [resetPasswordData, setResetPasswordData] = useState<ResetPasswordData>({});
  const [sendVerificationCode] = useSendVerificationCodeMutation();
  const [verifyCode] = useVerifyCodeMutation();
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit: FormProps<FormValues>['onSubmit'] = async values => {
    if ('password1' in values) {
      // 3 step - reset password
      if (values.password1 !== values.password2) {
        return {
          [FORM_ERROR]: t('login~Пароли должны совпадать')
        };
      }
      const response = await resetPassword({
        variables: {
          phoneNumber: resetPasswordData.phone,
          verificationCode: resetPasswordData.verificationCode,
          password: values.password1,
        }
      });
      const { errors } = response.data.resetPassword;
      if (errors) {
        const fieldsSingleError = getFieldsSingleError(errors);
        return {
          ...fieldsSingleError,
          password: fieldsSingleError.verficationCode,
          [FORM_ERROR]: fieldsSingleError.password,
        };
      }
    } else if ('password' in values) {
      // 2 step - check verification code
      const response = await verifyCode({
        variables: {
          phoneNumber: resetPasswordData.phone,
          verificationCode: values.password,
        }
      });
      const { errors } = response.data.verifyNumber;
      if (errors) {
        const fieldsSingleError = getFieldsSingleError(errors);
        return fieldsSingleError;
      }
      setResetPasswordData({
        ...resetPasswordData,
        verificationCode: values.password,
      });
    } else if ('phoneNumber' in values) {
      // 1 step - send verification code sms
      const response = await sendVerificationCode({
        variables: { phoneNumber: values.phoneNumber }
      });
      const { errors } = response.data.sendPhoneVerificationCode;
      if (errors) {
        return getFieldsSingleError(errors);
      }
      setResetPasswordData({
        ...resetPasswordData,
        phone: values.phoneNumber,
      });
    } else {
      throw new Error(`Can't handle submit for state ${JSON.stringify(values)}`);
    }

  };

  return (
    <Form
      onSubmit={onSubmit}
      render={
        () => {
          // 1 step - input phone number
          if (!resetPasswordData.phone) {
            return <RequestPhoneForm />;
          }

          // 2 step - verify phone number by code from sms
          if (!resetPasswordData.verificationCode) {
            return <VerificationCodeForm />;
          }

          // 3 step - change password
          return <NewPasswordForm />;
        }
      }
    />
  );
};