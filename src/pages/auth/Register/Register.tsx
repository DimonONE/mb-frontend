import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

import { RegisterFormContainer } from '@containers/auth/RegisterForm';
import { SocialAuthProviderEnum } from '@graphql';
import { ViewerType } from '@constants';
import { studentPage, teacherCabinet } from '@urls';
import { FormValues as RegisterFormValues } from '@components/auth/RegisterForm';

export type LocationState = {
  // If social info provided, then social registration flow
  // is used
  social?: {
    token: string
    provider: string
  }
  initialFormData?: RegisterFormValues
};

export const Register: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { state } = useLocation<LocationState | undefined>();

  const onRegistered = (viewerType: ViewerType) => {
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
        <title>{t('login~Регистрация')}</title>
      </Helmet>
      <RegisterFormContainer
        onRegistered={onRegistered}
        initialFormData={state.initialFormData}
        social={
          state?.social
          ? {
            token: state.social.token,
            provider: state.social.provider as SocialAuthProviderEnum
          }
          : undefined
        }
      />
    </>
  );
};

export default Register;