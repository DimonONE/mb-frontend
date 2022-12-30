import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { IndexMainBlock } from '@components/site/IndexMainBlock';
import { IndexSecondBlock } from '@components/site/IndexSecondBlock';
import { IndexThirdBlock } from '@components/site/IndexThirdBlock';
import { IndexDirectionBlock } from '@components/site/IndexDirectionBlock';
import { IndexReviewsBlock } from '@components/site/IndexReviewsBlock';
import { IndexSubscriptionForm } from '@components/site/IndexSubscriptionForm';
import { IndexBlogBlock } from '@components/site/IndexBlogBlock';
import { Footer } from '@components/site/Footer';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './Index.sss';

export const Main: React.FC = () => {
  const { t } = useTranslation();

  return (            
    <SiteLayout className={s.root}>
      <Helmet>
        <title>{t('site~ᐅ Студія балету для доросих Mary Ballet у Києві')}</title>
        <meta
          name="description"
          content={t('site~Школа балету для доросих Mary Ballet ❤️ Індивідуальні та групові заняття⭐️ 5 локацій у Києві')}
        />
        <meta name="theme-color" content="#CAB5D4" />
      </Helmet>
      <IndexMainBlock className={s.mainBlock} />
      <IndexSecondBlock />
      <IndexThirdBlock />
      <IndexDirectionBlock />
      <IndexReviewsBlock />
      <IndexSubscriptionForm />
      <IndexBlogBlock />
      <Footer />
    </SiteLayout>
  );
};

export default Main;