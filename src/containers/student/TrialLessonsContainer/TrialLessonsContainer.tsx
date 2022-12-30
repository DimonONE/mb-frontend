import * as React from 'react';
import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { StudentFilters } from '@components/student/StudentFilters';
import { TrialLessonsComponent } from '@components/student/TrialLessonsComponent';
import { FilterDaysCarousel } from '@components/student/FilterDaysCarousel';

import {
  useTrialLessonsQuery,
  useTrialFilterQuery,
  LessonType,
  SkillLevel,
  LessonTime
 } from '@graphql';

type TrialLessonsContainerProps = {
  className?: string
};

export const TrialLessonsContainer: React.FC<TrialLessonsContainerProps> = ({
  className
}) => {
  const { t } = useTranslation();

  const { loading: loadingFilters, data: individualFilters, error: errorFilters } = useTrialFilterQuery();

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const locationId = parseInt(query.get('locationId'), 10);
  const lessonTime = query.get('time');
  const lessonType = query.get('lessonType');
  const skillLevel = query.get('skillLevel');
  
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(currentDate);

  const endDate = useMemo(() => startDate.add(7).endOf('week'), [startDate]);
  const maxDate = useMemo(() => currentDate.day() === 6 ? currentDate.day(21) : currentDate.day(14), [currentDate]);

  const { loading, data, error } = useTrialLessonsQuery({
    variables: {
      locationId,
      time: lessonTime as LessonTime,
      skillLevel: skillLevel as SkillLevel,
      lessonType: lessonType as LessonType,
      startDate: startDate.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10)
    }
  });

  const setPreviousWeek = () => {
    const lastWeek = startDate.subtract(7, 'day');
    lastWeek < currentDate ? setStartDate(currentDate) : setStartDate(lastWeek);
  };

  const setNextWeek = () => setStartDate(endDate);

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const { trialLessons } = data;
  const { locations } = individualFilters;

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
        skillLevel={skillLevel}
      />
      <FilterDaysCarousel
        startDate={startDate}
        endDate={endDate}
        isLastWeekAvailable={startDate > currentDate}
        isNextWeekAvailable={endDate < maxDate}
        setPreviousWeek={setPreviousWeek}
        setNextWeek={setNextWeek}
      />
      <TrialLessonsComponent trialLessons={trialLessons} />
    </div>
  );
};