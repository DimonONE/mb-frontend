import * as React from 'react';

import ScheduleViewModeBar from '@components/teacher/ScheduleViewModeBar';
import ScheduleContainerWrapper from '@components/teacher/ScheduleContainerWrapper';
import MainMenuWrapper from '@components/teacher/MainMenuWrapper';
import BaseCoachCabinet from '@pages/teacher/BaseCoachCabinet';

import * as s from './CoachPersonalPage.sss';

export const CoachPersonalPage: React.FC = () => {

  return (
    <BaseCoachCabinet className={s.root}>
      <MainMenuWrapper/>
      <ScheduleContainerWrapper />
      <ScheduleViewModeBar/>
    </BaseCoachCabinet>
  );
};

export default CoachPersonalPage;