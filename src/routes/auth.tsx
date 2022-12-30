import * as React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import { BaseLoginLayout } from '@components/auth/BaseLoginLayout';
import { Login } from '@pages/auth/Login';
import { Register } from '@pages/auth/Register';
import { ResetPassword } from '@pages/auth/ResetPassword';
import { authLogin, authRegister, authResetPassword } from '@urls';

export const AuthRoutes: React.FC = () => {
  const location = useLocation();

  const transition = useTransition(
    location,
    {
      enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
      from: { opacity: 0, transform: 'translate3d(0,-5px,0)' },
      to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    }
  );

  return (
    <BaseLoginLayout>
      {transition(style => (
        <animated.div style={style}>
          <Switch>
            <Route
              path={authLogin}
              component={Login}
            />
            <Route
              path={authRegister}
              component={Register}
            />
            <Route
              path={authResetPassword}
              component={ResetPassword}
            />
            <Redirect to={authLogin} />
          </Switch>
        </animated.div>
        )
      )}
    </BaseLoginLayout>
  );
};

export default AuthRoutes;