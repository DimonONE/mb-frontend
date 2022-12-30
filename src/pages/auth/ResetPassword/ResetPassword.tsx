import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { ResetPasswordFormContainer } from '@containers/auth/ResetPasswordForm';

export const ResetPassword: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('login~Восстановить пароль')}</title>
      </Helmet>
      <ResetPasswordFormContainer />
    </>
  );
};

export default ResetPassword;