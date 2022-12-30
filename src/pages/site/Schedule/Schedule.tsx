import * as React from 'react';
import { Helmet } from 'react-helmet';

import { JumbotronLayout } from '@components/site/JumbotronLayout';
import { useTranslation } from 'react-i18next';
import { QABlock } from '@components/site/QABlock';
import { Footer } from '@components/site/Footer';
import { ScheduleContainerWithoutClient } from '@IndexLanding/containers/Schedule';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './Schedule.sss';
import { TeachersBlock } from '@/components/site/TeachersBlock';

export const Schedule: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SiteLayout className={s.root}>
      <Helmet>
        <title>{t('site~ᐅ Розклад занять у студії балету для доросих Mary Ballet у Києві')}</title>
        <meta name="description" content="Розклад занять у студії балету Mary Ballet ❤ Індивідуальні та групові заняття для дорослих ⭐" />
      </Helmet>

      <JumbotronLayout
        title={t('site~Розклад')}
        description={t('site~Обирай зручний день, час, локацію і бери зручну форму. Ми чекаємо тебе у балетній залі!')}
      />
      <LayoutContainer className={s.scheduleLayout}>
        <div>
          <ScheduleContainerWithoutClient />
          </div>
      </LayoutContainer>
      <TeachersBlock type="all-teachers" />
      <QABlock />
      <Footer />
    </SiteLayout>
  );
};

export default Schedule;