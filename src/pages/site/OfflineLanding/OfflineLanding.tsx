import * as React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Footer } from '@components/site/Footer';
import { IndexSubscriptionForm } from '@components/site/IndexSubscriptionForm';
import { IndexReviewsBlock } from '@components/site/IndexReviewsBlock';
import { QABlock } from '@components/site/QABlock';
import { OfflineSecondBlock } from '@components/site/OfflineSecondBlock';
import { OfflineMainBlock } from '@components/site/OfflineMainBlock';
import { OfflineDirections } from '@components/site/OfflineDirections';
import { OfflineAdventages } from '@components/site/OfflineAdventages';
import { OfflineBalletFitsYou } from '@components/site/OfflineBalletFitsYou';
import { TeachersBlock } from '@components/site/TeachersBlock';
import { OfflineSubscriptionsListContainer } from '@containers/site/OfflineSubscriptionsList';
import { SiteLayout } from '@components/site/SiteLayout';
import { ChooseWorkout } from '@components/site/ChooseWorkout';
import { safeFbq } from '@utils/analytics';

import * as s from './OfflineLanding.sss';

export const OfflineLanding: React.FC = () => {
  const { t } = useTranslation();

  useEffect(
    () => void setTimeout(
      () => safeFbq('track', 'ViewContent'),
      2000,
    ),
  );

  return (
    <SiteLayout className={s.root}>
      <Helmet>
        <title>{t('site~ᐅ Уроки балету у студії Mary Ballet у Києві - заняття балетом для дорослих')}</title>
        <meta
          name="description"
          content={t('site~Уроки балету для доросих у Києві в студії Mary Ballet ❤ Індивідуальні та групові заняття⭐')}
        />
        <meta name="theme-color" content="#CAB5D4" />
      </Helmet>
      <OfflineMainBlock />
      <OfflineSecondBlock />
      <OfflineDirections />
      <ChooseWorkout />
      <OfflineAdventages />
      <OfflineSubscriptionsListContainer theme="orange" />
      <TeachersBlock type="offline" />
      <OfflineBalletFitsYou />
      <QABlock />
      <IndexReviewsBlock />
      <IndexSubscriptionForm />
      <Footer />
    </SiteLayout>
  );
};

export default OfflineLanding;