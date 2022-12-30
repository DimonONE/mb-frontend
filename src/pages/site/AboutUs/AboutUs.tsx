import * as React from 'react';

import { AboutMainBlock } from '@components/site/AboutMainBlock';
import { AboutSecondBlock } from '@components/site/AboutSecondBlock';
import { AboutMissionValues } from '@components/site/AboutMissionValues';
import { AboutCreatorFirst } from '@components/site/AboutCreatorFirst';
import { AboutCreatorSecond } from '@components/site/AboutCreatorSecond';
import { AboutApplyForJobBlock } from '@components/site/AboutApplyForJobBlock';
import { Footer } from '@components/site/Footer';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './AboutUs.sss';

export const AboutUs: React.FC = () => {

  return (
    <SiteLayout className={s.root}>
      <AboutMainBlock />

      <AboutSecondBlock />
      <AboutMissionValues />
      <AboutCreatorFirst />
      <AboutCreatorSecond />
      <AboutApplyForJobBlock />
      <Footer />
    </SiteLayout>
  );
};

export default AboutUs;