import * as React from 'react';
import { ReactNode } from 'react';
import * as classNames from 'classnames';

import {
  Button,
  ButtonProps
} from '@components/student/Button';
import {
  facebookAuthenticate,
  FacebookAuthResponse,
  googleAuthenticate,
  GoogleAuthenticatedUser,
} from '@utils/auth';
import GoogleColoredIcon from '@static/svg/googleColored.svg';
import FacebookFilledIcon from '@static/svg/facebookFilled.svg';
import { SocialAuthProviderEnum } from '@graphql';

import * as s from './SocialButton.sss';

export type SocialButtonProps = Omit<ButtonProps, 'type'> & {
  type: SocialAuthProviderEnum
  onAuthenticated: (token: string) => void
};

const buttonIcon: { [K in SocialAuthProviderEnum]: ReactNode } = {
  [SocialAuthProviderEnum.Google]: <GoogleColoredIcon className={s.icon} />,
  [SocialAuthProviderEnum.Facebook]: <FacebookFilledIcon className={s.icon} />,
};

const socialClassName: { [K in SocialAuthProviderEnum]: string } = {
  [SocialAuthProviderEnum.Google]: s.google,
  [SocialAuthProviderEnum.Facebook]: s.facebook,
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  type,
  children,
  onAuthenticated,
  className
}) => {
  const onGoogleAuthenticate = (user?: GoogleAuthenticatedUser) => {
    if (user) {
      onAuthenticated(user.getAuthResponse().access_token);
    }
  };

  const onFacebookAuthenticate = (authResponse?: FacebookAuthResponse) => {
    if (authResponse) {
      onAuthenticated(authResponse.accessToken);
    }
  };

  const socialClickHandler: { [K in SocialAuthProviderEnum]: () => void } = {
    [SocialAuthProviderEnum.Facebook]: () => facebookAuthenticate(onFacebookAuthenticate),
    [SocialAuthProviderEnum.Google]: () => googleAuthenticate(onGoogleAuthenticate),
  };

  return (
    <Button
      className={classNames(s.root, className, socialClassName[type])}
      theme="clean"
      onClick={socialClickHandler[type]}
    >
      {buttonIcon[type]}
      {children}
    </Button>
  );
};