import * as React from 'react';
import { withTypes } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Config } from 'final-form';

import {
  ChangePasswordForm,
  ChangePasswordFormProps,
  FormValues
} from '@components/student/ChangePasswordForm';
import { useChangePasswordFormMutation } from '@graphql';
import { getFieldsSingleError } from '@utils/common';

type ChangePasswordFormContainerProps = ChangePasswordFormProps;

export const ChangePasswordFormContainer: React.FC<ChangePasswordFormContainerProps> = props => {
  const { t } = useTranslation();
  const { Form } = withTypes<FormValues>();
  const [changePassword] = useChangePasswordFormMutation();

  const onSubmit: Config<FormValues>['onSubmit'] = async (values, form) => {
    const { newPassword, newPasswordRepeat } = values;

    if (newPassword !== newPasswordRepeat) {
      return {
        newPasswordRepeat: t('Пароли не совпадают')
      };
    }

    const { data } = await changePassword({ variables: { newPassword } });
    if (data.changePassword.errors) {
      return getFieldsSingleError(data.changePassword.errors);
    }

    setTimeout(form.reset);
    return;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={() => <ChangePasswordForm {...props} />}
    />
  );
};