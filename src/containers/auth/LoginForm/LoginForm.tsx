import * as React from 'react';
import { Form, FormProps } from 'react-final-form';

import { FormValues, LoginForm } from '@components/auth/LoginForm';
import { LoginCheckDocument, useLoginMutation } from '@graphql';
import { getFieldsSingleError } from '@utils/common';
import { ViewerType } from '@constants';

export type LoginFormContainerProps = {
  onLogin: (viewerType: ViewerType) => void
};

export const LoginFormContainer: React.FC<LoginFormContainerProps> = ({
  onLogin,
}) => {
  const [login] = useLoginMutation({
    refetchQueries: [{
      query: LoginCheckDocument
    }],
    awaitRefetchQueries: true,
  });

  const onSubmit: FormProps<FormValues>['onSubmit'] = async values => {
    const response = await login({
      variables: values
    });
    const responseData = response.data.authenticate;

    if (responseData.errors) {
      return getFieldsSingleError(responseData.errors);
    }

    onLogin(
      responseData.user.isCoach
      ? ViewerType.Coach
      : ViewerType.Student
    );

    return null;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={
        () => (
          <LoginForm />
        )
      }
    />
  );
};
