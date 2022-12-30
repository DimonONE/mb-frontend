import { ViewerType } from '@constants';
import { teacherCabinet } from '@urls';

const googleUserListenerKey = 'GoogleUserListenerKey';

export type GoogleAuthenticatedUser = {
  getAuthResponse: () => { access_token: string }
};
export type FacebookAuthResponse = {
  accessToken: string
};

type googleAuthCallback = (authenticatedUser?: GoogleAuthenticatedUser) => void;
export const googleAuthenticate = (callback: googleAuthCallback) => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn();

    if (!window[googleUserListenerKey]) {
      authInstance
        .currentUser
        .listen(callback);
      window[googleUserListenerKey] = true;
    }
  } catch (e) {
    /* tslint:disable:no-empty */
  }
};

type facebookAuthCallback = (authResponse?: FacebookAuthResponse) => void;
export const facebookAuthenticate = (callback: facebookAuthCallback) => {
  FB.getLoginStatus(response => {
    const {
      loginStatus,
      authResponse
    } = response;

    if (loginStatus === 'connected') {
      callback(authResponse);
    } else {
      FB.login(
        () => {
          FB.getLoginStatus(
            loginResponse => {
              callback(loginResponse.authResponse);
            }
          );
        },
        {scope: 'public_profile,email'}
      );
    }

  });
};

export const moveToPersonalPage = (viewerType: ViewerType) => {
  if (viewerType === ViewerType.Coach) {
    window.location.href = teacherCabinet;
  } else if (viewerType === ViewerType.Student) {
    window.location.href = '/';
  } else {
    throw new Error(`Invalid viewer type ${viewerType}`);
  }
};