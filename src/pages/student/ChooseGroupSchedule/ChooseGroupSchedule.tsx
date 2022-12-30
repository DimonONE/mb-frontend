import * as React from 'react';

import { BasePage } from '@components/student/BasePage';
import { GroupsScheduleContainer } from '@containers/student/GroupsScheduleContainer';

import * as s from './ChooseGroupSchedule.sss';

type ChooseGroupSchedulePageProps = {
  className?: string
};

export const ChooseGroupSchedulePage: React.FC<ChooseGroupSchedulePageProps> = ({
  className
}) => (
  <BasePage className={s.root}>
    <GroupsScheduleContainer />
  </BasePage>
);

export default ChooseGroupSchedulePage;