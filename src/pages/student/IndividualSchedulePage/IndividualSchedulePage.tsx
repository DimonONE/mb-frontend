import * as React from 'react';

import { BasePage } from '@components/student/BasePage';
import { IndividualScheduleContainer } from '@containers/student/IndividualScheduleContainer';

import * as s from './IndividualSchedulePage.sss';

type IndividualSchedulePageProps = {
  className?: string
};

export const IndividualSchedulePage: React.FC<IndividualSchedulePageProps> = ({
  className
}) => (
  <BasePage className={s.root}>
    <IndividualScheduleContainer />
  </BasePage>
);

export default IndividualSchedulePage;