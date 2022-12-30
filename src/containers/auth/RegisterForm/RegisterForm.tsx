import * as React from 'react';
import { useState } from 'react';
import { Form, FormProps } from 'react-final-form';

import {
  FormValues as RegisterFormValues,
  RegisterForm,
} from '@components/auth/RegisterForm';
import {
  FormValues as RequestPhoneFormValues,
  RequestPhoneForm,
} from '@components/auth/RequestPhoneForm';
import {
  FormValues as VerificationCodeFormValues,
  VerificationCodeForm,
} from '@components/auth/VerificationCodeForm';
import {
  LoginCheckDocument,
  SocialAuthProviderEnum,
  useRegisterMutation,
  useRegisterSocialMutation,
  useSendPasswordSmsMutation
} from '@graphql';
import { getFieldsSingleError } from '@utils/common';
import { ViewerType } from '@constants';

type FormValues =
  // 1 step form values
  RegisterFormValues
  // 3 step form values after 1 step
  | (RegisterFormValues & VerificationCodeFormValues)
  // 2 step form values
  | RequestPhoneFormValues
  // 3 step form values after 2 step
  | (RequestPhoneFormValues & VerificationCodeFormValues);

type RegisterFormProps = FormProps<FormValues>;
enum ActiveForm {
  registration,
  phone,
  verificationCode
}

type RegisterFormContainerProps = {
  initialFormData?: RegisterFormValues
  onRegistered: (viewerType: ViewerType) => void
  social?: {
    token: string
    provider: SocialAuthProviderEnum
  }
};

export const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({
  initialFormData,
  social,
  onRegistered
}) => {
  const [sendPasswordSms] = useSendPasswordSmsMutation();
  const [register] = useRegisterMutation({
    refetchQueries: [{
      query: LoginCheckDocument
    }],
    awaitRefetchQueries: true,
  });
  const [registerSocial] = useRegisterSocialMutation({
    refetchQueries: [{
      query: LoginCheckDocument
    }],
    awaitRefetchQueries: true,
  });
  const [activeForm, setActiveForm] = useState<ActiveForm>(
    social
    ? ActiveForm.phone
    : ActiveForm.registration
  );

  const onSubmit: RegisterFormProps['onSubmit'] = async values => {
    if (activeForm === ActiveForm.registration || activeForm === ActiveForm.phone) {
      const response = await sendPasswordSms({
        variables: { phoneNumber: values.phoneNumber }
      });
      const errors = response.data.sendPasswordSms.errors;
      if (errors) {
        return getFieldsSingleError(errors);
      }

      setActiveForm(ActiveForm.verificationCode);
    } else {
      if ('password' in values) {
        let user;
        let errors;

        // If classical registration
        if ('firstName' in values) {
          const response = await register({
            variables: values
          });
          ({user, errors} = response.data.registerUser);

        // Social registration
        } else {
          const response = await registerSocial({
            variables: {
              ...values,
              accessToken: social.token,
              socialType: social.provider
            }
          });
          ({user, errors} = response.data.registerUser);
        }

        if (errors) {
          return getFieldsSingleError(errors);
        }

        if (user) {
          onRegistered(
            user.isCoach
            ? ViewerType.Coach
            : ViewerType.Student
          );
        } else {
          throw new Error('Empty user');
        }
      } else {
        throw new Error('No password in submit');
      }
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialFormData}
      render={
        () => (
          <>
            {/* 1 step - ask registration data */}
            {activeForm === ActiveForm.registration && <RegisterForm />}

            {/* 2 step (optional) - ask phone number if it's not provided (social registration) */}
            {activeForm === ActiveForm.phone && <RequestPhoneForm />}

            {/* 3 step - ask phone verification code */}
            {activeForm === ActiveForm.verificationCode && <VerificationCodeForm />}
          </>
        )
      }
    />
  );
};
