import * as React from 'react';
import { FilterDaysCarousel } from '@components/student/FilterDaysCarousel';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { TrialLessonsComponent } from '@components/student/TrialLessonsComponent';
import { useMyScheduleQuery } from '@graphql';
import { useHistory } from 'react-router-dom';

dayjs.extend(isoWeek);

type MyScheduleContainerProps = {
  currentYear: number
  currentWeek: number
  previousWeekUrl?: string | null
  nextWeekUrl?: string | null
};

export const MyScheduleContainer: React.FC<MyScheduleContainerProps> = ({
  currentWeek,
  currentYear,
  previousWeekUrl,
  nextWeekUrl,
}) => {
  const history = useHistory();
  const { data } = useMyScheduleQuery({
    variables: {
      year: currentYear,
      week: currentWeek
    }
  });

  const startDate = dayjs().year(currentYear).isoWeek(currentWeek);
  const endDate = startDate.add(7).endOf('week');

  if (!data) {
    return null;
  }

  const { schedule } = data.viewer.student;
  return (
    <>
      <FilterDaysCarousel
        startDate={startDate}
        endDate={endDate}
        isLastWeekAvailable={!!previousWeekUrl}
        isNextWeekAvailable={!!nextWeekUrl && !!schedule.length}
        setPreviousWeek={() => history.push(previousWeekUrl)}
        setNextWeek={() => history.push(nextWeekUrl)}
      />
      <TrialLessonsComponent trialLessons={schedule} />
    </>

  );
};