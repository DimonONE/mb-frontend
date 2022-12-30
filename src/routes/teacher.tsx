import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  teacherCabinet,
  teacherCabinetSchedule,
  teacherCurrentLesson,
  teacherDaysSchedule,
  teacherLessonDetail
} from '@urls';
import { CoachPersonalPage } from '@pages/teacher/CoachPersonalPage';
import { CoachLessonDetails } from '@pages/teacher/CoachLessonDetails';

export const TeacherRoutes: React.FC = () => {

  return (
    <Switch>
      <Route
        exact={true}
        path={teacherCabinetSchedule}
        component={() => <Redirect to={teacherDaysSchedule} />}
      />
      <Route
        path={teacherCabinetSchedule}
        component={CoachPersonalPage}
      />

      <Route
        path={[
          teacherLessonDetail,
          teacherCurrentLesson,
        ]}
        component={CoachLessonDetails}
      />

      <Route
        path={teacherCabinet}
        component={() => <Redirect to={teacherDaysSchedule} />}
      />
    </Switch>
  );
};

export default TeacherRoutes;