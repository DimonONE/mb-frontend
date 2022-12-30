import * as React from 'react';

import { SocialButton, SocialButtonProps } from '@components/ui/SocialButton';
import { useLoginCheckLazyQuery, useSocialLoginMutation } from '@graphql';
import { ViewerType } from '@constants';

type SocialButtonContainerProps = Omit<SocialButtonProps, 'onAuthenticated'> & {
  onRegistrationRequired: (token: string) => void
  onAuthenticated: (viewerType: ViewerType) => void
};

export const SocialButtonContainer: React.FC<SocialButtonContainerProps> = ({
  type,
  onRegistrationRequired,
  onAuthenticated: parentOnAuthenticated,
  ...props
}) => {
  const [login] = useSocialLoginMutation();
  const [fetchViewer] = useLoginCheckLazyQuery({
    fetchPolicy: 'network-only',
  });

  const onAuthenticated = async (token: string) => {
    const response = await login({
      variables: {
        accessToken: token,
        socialType: type,
      }
    });
    const responseData = response.data.socialAuthenticateUser;
    if (responseData.registrationRequired) {
      onRegistrationRequired(token);
    } else {
      await fetchViewer();
      const user = responseData.user;
      parentOnAuthenticated(
        user.isCoach
        ? ViewerType.Coach
        : ViewerType.Student
      );
    }
  };

  return (
    <SocialButton
      type={type}
      onAuthenticated={onAuthenticated}
      {...props}
    />
  );
};