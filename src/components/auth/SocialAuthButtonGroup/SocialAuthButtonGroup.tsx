import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { SocialButtonContainer } from '@containers/auth/SocialButton';
import { SocialAuthProviderEnum } from '@graphql';
import { ViewerType } from '@constants';
import { authRegister, studentPage, teacherCabinet } from '@urls';
import { LocationState as RegisterPageLocationState } from '@pages/auth/Register';

import * as s from './SocialAuthButtonGroup.sss';

type SocialAuthButtonGroupProps = {
  className?: string
};

export const SocialAuthButtonGroup: React.FC<SocialAuthButtonGroupProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const history = useHistory();

  const onAuthenticated = (viewerType: ViewerType) => {
    if (viewerType === ViewerType.Coach) {
      history.replace(teacherCabinet);
    } else if (viewerType === ViewerType.Student) {
      history.replace(studentPage);
    } else {
      throw new Error(`Unknown viewer type ${viewerType}`);
    }
  };

  const onRegistrationRequired = (token: string, provider: SocialAuthProviderEnum) => {
    const historyState: RegisterPageLocationState = {
      social: {
        token,
        provider
      }
    };
    history.push(
      authRegister,
      historyState,
    );
  };

  return (
    <div className={className}>
      <SocialButtonContainer
        className={s.button}
        type={SocialAuthProviderEnum.Google}
        onAuthenticated={onAuthenticated}
        onRegistrationRequired={token => onRegistrationRequired(
            token,
            SocialAuthProviderEnum.Google,
          )
        }
      >
        {t('login~Продолжить с Google')}
      </SocialButtonContainer>

      <SocialButtonContainer
        className={s.button}
        type={SocialAuthProviderEnum.Facebook}
        onAuthenticated={onAuthenticated}
        onRegistrationRequired={token => onRegistrationRequired(
            token,
            SocialAuthProviderEnum.Facebook,
          )
        }
      >
        {t('login~Продолжить с Facebook')}
      </SocialButtonContainer>
    </div>
  );
};