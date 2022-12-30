import * as React from 'react';
import {
  generatePath,
  Redirect,
  useParams,
} from 'react-router-dom';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

import { MyScheduleContainer } from '@containers/student/MySchedule';
import { BasePage } from '@components/student/BasePage';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { studentPageMyScheduleWithParams } from '@urls';

import * as s from './MySchedule.sss';

dayjs.extend(isoWeek);

type Params = {
  year: string
  week: string
} | {};

export const MySchedulePage: React.FC = () => {
  const params = useParams<Params>();

  if (!('year' in params)) {
    const now = dayjs();
    return (
      <Redirect
        to={
          generatePath(
            studentPageMyScheduleWithParams,
            { year: now.year(), week: now.isoWeek() }
          )
        }
      />
    );
  }

  return (
    <BasePage className={s.root}>
      <LayoutContainer>
        <MyScheduleContainer
          currentYear={+params.year}
          currentWeek={+params.week}
        />
      </LayoutContainer>
    </BasePage>
  );
};

export default MySchedulePage;