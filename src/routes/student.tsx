import * as React from 'react';
import { generatePath, Route, Switch } from 'react-router-dom';

import { ScheduleType } from '@constants';
import { Settings } from '@pages/student/Settings';
import { CheckoutPage } from '@pages/student/CheckoutPage';
import { ChooseSubscription } from '@pages/student/ChooseSubscription';
import { ChooseGroupSchedulePage } from '@pages/student/ChooseGroupSchedule';
import { IndividualSchedulePage } from '@pages/student/IndividualSchedulePage';
import { TrialSchedulePage } from '@pages/student/TrialSchedulePage';
import { StudentPage } from '@pages/student/StudentPage';
import { CheckoutThanks } from '@pages/student/CheckoutThanks';
import { MySchedulePage } from '@pages/student/MySchedule';
import {
  studentCheckout,
  studentCheckoutThanks,
  studentPageMySchedule,
  studentPageMyScheduleWithParams,
  studentPageSettings,
  studentPageSubscription,
  studentSchedule,
  studentScheduleSelectSubscription,
  studentTrialSchedule,
} from '@urls';

export const StudentRoutes: React.FC = () => {
  
  return (
    <Switch>
      <Route
        path={studentPageSettings}
        component={Settings}
      />
      <Route
        path={studentCheckout}
        component={CheckoutPage}
      />
      <Route
        path={studentScheduleSelectSubscription}
        component={ChooseSubscription}
      />
      <Route
        path={generatePath(studentSchedule, { scheduleType: ScheduleType.Group })}
        component={ChooseGroupSchedulePage}
      />
      <Route
        path={generatePath(studentSchedule, { scheduleType: ScheduleType.Individual })}
        component={IndividualSchedulePage}
      />
      <Route
        path={studentTrialSchedule}
        component={TrialSchedulePage}
      />
      <Route
        path={studentPageSubscription}
        component={StudentPage}
      />
      <Route
        exact={true}
        path={studentCheckoutThanks}
        component={CheckoutThanks}
      />
      <Route
        path={[
          studentPageMyScheduleWithParams,
          studentPageMySchedule
        ]}
        component={MySchedulePage}
      />
    </Switch>
  );
};

export default StudentRoutes;