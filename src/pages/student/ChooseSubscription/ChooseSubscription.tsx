import * as React from 'react';
import * as s from '@pages/student/CheckoutPage/CheckoutPage.sss';

import { BasePage } from '@components/student/BasePage';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { ChooseSubscriptionListContainer } from '@containers/student/ChooseSubscriptionList/ChooseSubscriptionList';

export const ChooseSubscription: React.FC = () => {

  return (
    <BasePage className={s.root} theme="grey">
      <LayoutContainer>
        <ChooseSubscriptionListContainer />
      </LayoutContainer>
    </BasePage>
  );
};

export default ChooseSubscription;