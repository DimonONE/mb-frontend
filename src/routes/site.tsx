import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import {
  answersToQuestions,
  onlineLanding,
  siteAboutUs,
  siteGenericPage,
  siteIndex,
  siteOfflineLanding,
  sitePrivacyPolicy,
  siteSchedule,
  siteStudioDetail,
  siteStudios,
  siteSubscriptionsBase,
} from '@urls';
import { NotFoundPage } from '@pages/common/404';
import AnswersToQuestions from '@/pages/site/AnswersToQuestions';

const LoadableOfflineLanding = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/OfflineLanding'));
const LoadableOnlineLanding = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/OnlineLanding'));
const LoadableStudios = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/Studios'));
const LoadableSubscriptions = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/Subscriptions'));
const LoadableSchedule = loadable(
  () => import(/* webpackPrefetch: true */ '@pages/site/Schedule'),
  { ssr: false },
);
const LoadableAboutUs = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/AboutUs'));
const LoadableIndex = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/Index'));
const LoadableGenericPage = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/GenericPage'));
const LoadableAnswersToQuestions = loadable(() => import(/* webpackPrefetch: true */ '@pages/site/AnswersToQuestions'));

export const SiteRoutes: React.FC = () => {

  return (
    <Switch>
      <Route
        path={siteOfflineLanding}
        component={LoadableOfflineLanding}
      />
      <Route
        path={onlineLanding}
        component={LoadableOnlineLanding}
      />
      <Route
        path={[
          siteStudioDetail,

          // Should be last, to allow first url resolve params
          siteStudios,
        ]}
        component={LoadableStudios}
      />
      <Route
        path={siteSubscriptionsBase}
        component={LoadableSubscriptions}
      />
      <Route
        path={siteSchedule}
        component={LoadableSchedule}
      />
      <Route
        path={siteAboutUs}
        component={LoadableAboutUs}
      />
      <Route
        path={siteGenericPage}
        component={({ match }) => <LoadableGenericPage  slug={match.params.slug} />}
      />
      <Route
        path={answersToQuestions}
        component={LoadableAnswersToQuestions}
      />
      <Route
        path={sitePrivacyPolicy}
        render={() => <LoadableGenericPage slug="privacy-policy" />}
      />
      <Route
        exact={true}
        path={siteIndex}
        component={LoadableIndex}
      />
      <Route
        path="*"
        component={NotFoundPage}
      />
    </Switch>
  );
};

export default SiteRoutes;