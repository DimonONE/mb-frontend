/* tslint:disable:no-var-requires */

import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';
import * as dayjs from 'dayjs';
import loadable from '@loadable/component';
import { useTranslation } from 'react-i18next';

import { LoginRequiredRoute } from '@ui/LoginRequiredRoute';
import {
  teacherCabinet,
  newsPage,
  authBase,
  studentPage,
  trialLessonModalHash,
} from '@urls';

import './BaseApp.sss';
import { ErrorBoundary } from '@components/ui/ErrorBoundary';
import { NotFoundPage } from '@pages/common/404';
import { TrialLessonModalContainer } from '@containers/site/TrialLessonModal';

if (typeof window !== 'undefined') {
  require('lazysizes');
  const smoothscroll = require('smoothscroll-polyfill');
  smoothscroll.polyfill();
}

const LoadableTeacherRoutes = loadable(() => import('@routes/teacher'), { ssr: false });
const LoadableNewsRoutes = loadable(() => import('@routes/news'));
const LoadableStudentRoutes = loadable(() => import('@routes/student'), { ssr: false });
const LoadableAuthRoutes = loadable(() => import(/* webpackPrefetch: true */ '@routes/auth'), { ssr: false });
const LoadableSiteRoutes = loadable(() => import('@routes/site'));

export const BaseApp: React.FC = () => {
  const { i18n } = useTranslation();
  dayjs.locale(i18n.language);

  return (
    <ErrorBoundary>
      <Switch>
        {/* Admin */}
        <Route
          exact={true}
          path={[
            '/admin',
            '/admin/#'
          ]}
          component={loadable(() => import('@/admin/App'), { ssr: false })}
        />

        {/* Teacher cabinet */}
        <LoginRequiredRoute
          path={teacherCabinet}
          component={LoadableTeacherRoutes}
        />

        {/* News */}
        <Route
          path={newsPage}
          component={LoadableNewsRoutes}
        />

        {/* Student cabinet */}
        <LoginRequiredRoute
          path={studentPage}
          component={LoadableStudentRoutes}
        />

        {/* Auth */}
        <Route
          path={authBase}
          component={LoadableAuthRoutes}
        />

        {/* Site */}
        <Route
          path="/"
          component={LoadableSiteRoutes}
        />
        <Route
          path="*"
          component={NotFoundPage}
        />
      </Switch>

      <Route
        render={
          ({ history }) => (
            <TrialLessonModalContainer
              isOpen={history.location.hash === trialLessonModalHash}
              onRequestClose={() => history.replace({ ...history.location, hash: '' })}
            />
          )
        }
      />
    </ErrorBoundary>
  );
};

export default BaseApp;
