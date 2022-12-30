import * as React from 'react';

import { BasePage } from '@components/student/BasePage';
import { TrialLessonsContainer } from '@containers/student/TrialLessonsContainer';

import * as s from './TrialSchedulePage.sss';

type TrialSchedulePageProps = {
  className?: string
};

export const TrialSchedulePage: React.FC<TrialSchedulePageProps> = ({
  className
}) => (
  <BasePage className={s.root}>
    <TrialLessonsContainer />
  </BasePage>
);

export default TrialSchedulePage;