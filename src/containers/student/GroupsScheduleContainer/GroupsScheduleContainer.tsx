import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GroupsSchedule } from '@components/student/GroupsSchedule';
import { StudentFilters } from '@components/student/StudentFilters';
import {
  useGroupsLessonsScheduleQuery,
  useGroupsFilterQuery,
  LessonType,
  SkillLevel,
  LessonTime
} from '@graphql';

type GroupsScheduleContainerProps = {
  className?: string
};

export const GroupsScheduleContainer: React.FC<GroupsScheduleContainerProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const { loading: loadingFilters, data: groupFilters, error: errorFilters } = useGroupsFilterQuery();

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const locationId = parseInt(query.get('locationId'), 10);
  const lessonTime = query.get('time');
  const groupString = query.get('days');
  const lessonType = query.get('lessonType');
  const skillLevel = query.get('skillLevel');

  const { loading, data, error } = useGroupsLessonsScheduleQuery({
    variables: {
      locationId,
      time: lessonTime as LessonTime,
      days: groupString && groupString.split(',').map(day => parseInt(day, 10)),
      skillLevel: skillLevel as SkillLevel,
      lessonType: lessonType as LessonType
    }
  });

  if (loading || loadingFilters) {
    return null;
  }

  if (error || errorFilters) {
    throw error || errorFilters;
  }

  if (!data || !groupFilters) {
    throw new Error('Empty error');
  }

  const { groupsLessonsSchedule } = data;
  const { groupsFilter, locations } = groupFilters;

  return (
    <div className={className}>
      <StudentFilters
        lessonType={lessonType}
        locations={[
          { id: null, name: `${t('student~Выбрать')}` },
          ...locations,
        ]}
        location={locationId}
        lessonTime={lessonTime}
        groups={[
          { value: null, name: `${t('student~Выбрать')}` },
          ...groupsFilter,
        ]}
        group={groupString}
        skillLevel={skillLevel}
      />
      <GroupsSchedule
        groupsLessonsSchedule={groupsLessonsSchedule}
      />
    </div>
  );
};