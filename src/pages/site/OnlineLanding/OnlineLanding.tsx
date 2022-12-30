import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { IndexReviewsBlock } from '@components/site/IndexReviewsBlock';
import { Footer } from '@components/site/Footer';

import * as s from './OnlineLanding.sss';
import { OnlineSecondBlock } from '@components/site/OnlineSecondBlock';
import { OnlineTrainingProcess } from '@components/site/OnlineTrainingProcess';
import { OnlineMainBlock } from '@components/site/OnlineMainBlock';
import { TeachersBlock } from '@components/site/TeachersBlock';
import { QABlock } from '@components/site/QABlock';
import { OnlineSubscriptions } from '@components/site/OnlineSubscriptions';
import { SiteLayout } from '@components/site/SiteLayout';

export const OnlineLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SiteLayout className={s.root}>
      <Helmet>
        <title>{t('site~ᐅ Уроки балету онлайн у Києві - заняття балетом онлайн для дорослих')}</title>
        <meta
          name="description"
          content={t('site~Уроки балету онлайн у Києві в студії Mary Ballet ❤ Індивідуальні та групові заняття для дорослих ⭐')}
        />
        <meta name="theme-color" content="#CAB5D4" />
      </Helmet>
      <OnlineMainBlock className={s.mainBlock} />
      <OnlineSecondBlock />
      <OnlineTrainingProcess />
      <TeachersBlock />
      <OnlineSubscriptions />
      <IndexReviewsBlock />
      <QABlock />
      <Footer />
    </SiteLayout>
  );
};

export default OnlineLanding;