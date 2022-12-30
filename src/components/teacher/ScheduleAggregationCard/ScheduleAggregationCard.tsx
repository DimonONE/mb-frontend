import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './ScheduleAggregationCard.sss';

type ScheduleAggregationCardProps = {
  className?: string
  isActive?: boolean
  time: string
  groupLessons: number
  personalLessons: number
};

export const ScheduleAggregationCard: React.FC<ScheduleAggregationCardProps> = ({
  className,
  time,
  isActive = false,
  groupLessons,
  personalLessons,
}) => {

  return (
    <div
      className={
        classNames(
          s.scheduleDay,
          className
        )
      }
    >
      <div
        className={
          classNames(
            s.scheduleDayTime,
            {[s.active]: isActive}
          )
        }
      >
        {time}
      </div>
      {groupLessons !== 0 &&
        <div
          className={
            s.scheduleDayInfoGroup
          }
        >
          групповые: {groupLessons}
        </div>
      }
      {personalLessons !== 0 &&
        <div
            className={
              classNames(
                s.scheduleDayInfoPersonal,
                {[s.scheduleDayInfoPersonalSwap]: groupLessons === 0}
              )
            }
        >
            индивидуальные: {personalLessons}
        </div>
      }
      <div
        className={
          s.scheduleDayInfo
        }
      >
        { groupLessons !== 0 && <div>{groupLessons} групп</div>}
        { (groupLessons !== 0 && personalLessons !== 0) && <span>/</span> }
        { personalLessons !== 0 && <div>{personalLessons} инд</div> }
      </div>
      <div
        className={
          s.scheduleDaySumUp
        }
      >
        {groupLessons + personalLessons} занятий
      </div>
    </div>
  );
};