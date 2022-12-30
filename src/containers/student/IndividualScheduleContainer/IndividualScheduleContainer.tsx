import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { StudentFilters } from '@components/student/StudentFilters';
import { IndividualScheduleComponent } from '@components/student/IndividualSchedule/IndividualScheduleComponent';

import {
  useIndividualLessonsScheduleQuery,
  useIndividualFilterQuery,
  LessonType,
  SkillLevel,
  LessonTime
 } from '@graphql';

type IndividualScheduleContainerProps = {
  className?: string
};

export const IndividualScheduleContainer: React.FC<IndividualScheduleContainerProps> = ({
  className
}) => {
  const { loading: loadingFilters, data: individualFilters, error: errorFilters } = useIndividualFilterQuery();

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const locationId = parseInt(query.get('locationId'), 10);
  const lessonTime = query.get('time');
  const lessonType = query.get('lessonType');
  const skillLevel = query.get('skillLevel');

  const { loading, data, error } = useIndividualLessonsScheduleQuery({
    variables: {
      locationId,
      time: lessonTime as LessonTime,
      skillLevel: skillLevel as SkillLevel,
      lessonType: lessonType as LessonType
    }
  });

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const { individualLessonsSchedule } = data;
  const { locations } = individualFilters;

  return (
    <div className={className}>
      <StudentFilters
        lessonType={lessonType}
        locations={[
          { id: null, name: 'Выбрать' },
          ...locations,
        ]}
        location={locationId}
        lessonTime={lessonTime}
        skillLevel={skillLevel}
        isIndividual={true}
      />
      <IndividualScheduleComponent individualLessonsSchedule={individualLessonsSchedule} />
    </div>
  );
};