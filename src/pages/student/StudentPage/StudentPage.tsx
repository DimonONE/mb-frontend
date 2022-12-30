import * as React from 'react';

import { BasePage } from '@components/student/BasePage';
import { SubscriptionCardsContainer } from '@containers/student/SubscriptionCardsContainer';

import * as s from './StudentPage.sss';

type StudentPageProps = {
  className?: string
};

export const StudentPage: React.FC<StudentPageProps> = ({
  className
}) => (
  <BasePage className={s.root}>
    <SubscriptionCardsContainer />
  </BasePage>
);

export default StudentPage;