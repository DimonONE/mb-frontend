import * as React from 'react';
import {
  Redirect,
  generatePath,
} from 'react-router-dom';

import { useTeacherCurrentLessonIdQuery } from '@graphql';
import {
  teacherCabinetSchedule,
  teacherLessonDetail,
} from '@urls';

export const CurrentLessonRedirect = () => {
  const { loading, data, error } = useTeacherCurrentLessonIdQuery({
    fetchPolicy: 'network-only'
  });

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (data) {
    if (!data.viewer.nearestLesson) {
      return (
        <Redirect to={teacherCabinetSchedule}/>
      );
    }
    return (
      <Redirect
        to={
          generatePath(
            teacherLessonDetail,
            { id: data.viewer.nearestLesson.id }
          )
        }
      />
    );
  }

  throw new Error('Empty render');
};
