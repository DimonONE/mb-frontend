import * as React from 'react';
import * as classNames from 'classnames';

import ScheduleViewModeButton from '@components/teacher/ScheduleViewModeButton';
import GridContainer from '@components/teacher/GridContainer';
import { NavProfileContainer } from '@containers/teacher/NavProfile';
import {
  teacherDaysSchedule,
  teacherWeeksSchedule,
  teacherMonthsSchedule,
} from '@urls';

import * as s from './ScheduleViewModeBar.sss';

type ScheduleViewModeButtonProps = {
  className?: string
};

export const ScheduleViewModeBar: React.FC<ScheduleViewModeButtonProps> = ({
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <GridContainer>
      <div className={classNames(s.scheduleViewModeWrap)}>
        <div className={classNames(s.scheduleViewModeButtons)}>
          <ScheduleViewModeButton to={teacherDaysSchedule}>День</ScheduleViewModeButton>
          <ScheduleViewModeButton to={teacherWeeksSchedule}>Неделя</ScheduleViewModeButton>
          <ScheduleViewModeButton to={teacherMonthsSchedule}>Месяц</ScheduleViewModeButton>
        </div>
        <NavProfileContainer />
      </div>
    </GridContainer>
  </div>
);

export default ScheduleViewModeBar;
