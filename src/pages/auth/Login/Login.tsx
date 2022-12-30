import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { LoginFormContainer } from '@containers/auth/LoginForm';
import { ViewerType } from '@constants';
import { studentPage, teacherCabinet } from '@urls';

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const onLogin = (viewerType: ViewerType) => {
    if (viewerType === ViewerType.Coach) {
      history.replace(teacherCabinet);
    } else if (viewerType === ViewerType.Student) {
      history.replace(studentPage);
    } else {
      throw new Error(`Unknown viewer type ${viewerType}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('login~Вход')}</title>
      </Helmet>
      <LoginFormContainer onLogin={onLogin} />
    </>
  );
};

export default Login;