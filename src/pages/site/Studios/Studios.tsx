import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { JumbotronLayout } from '@components/site/JumbotronLayout';
import { HallsListContainer } from '@containers/site/HallsList';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { HallDetailsContainer } from '@containers/site/HallDetails';
import { HallsMapContainer } from '@containers/site/HallsMap';
import { Footer } from '@components/site/Footer';
import { QABlock } from '@components/site/QABlock';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './Studios.sss';

type Params = {
  id?: string
};

export const Studios: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<Params>();

  return (
    <SiteLayout className={s.root}>
      <JumbotronLayout
        theme="orange"
        title={t('site~Локації')}
        description={t('site~Студії Mary Ballet знаходяться на дуже зручних локаціях поруч з метро аби ти танцювала в задоволення!')}
      />
      <HallsMapContainer />
      <LayoutContainer className={s.container}>
        <HallsListContainer
          className={s.hallsList}
          activeHallId={+id}
        />
        <HallDetailsContainer
          className={s.hallDetails}
          hallId={id ? +id : undefined}
        />
      </LayoutContainer>
      <QABlock />
      <Footer />
    </SiteLayout>
  );
};

export default Studios;