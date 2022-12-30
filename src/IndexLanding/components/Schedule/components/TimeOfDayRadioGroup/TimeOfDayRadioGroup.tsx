import * as React from 'react';
import * as classNames from 'classnames';

import { TimeOfDay } from '@constants';
import Day from '@svg/Day.svg';
import DayNight from '@svg/DayNight.svg';
import Night from '@svg/Night.svg';

import * as s from './TimeOfDayRadioGroup.sss';

type TimeOfDayRadioGroupProps = {
  value: TimeOfDay
  onChange: (arg: TimeOfDay) => void
  className?: string
};

const buttons = [
  { value: TimeOfDay.Morning, icon: Day },
  { value: TimeOfDay.AllDay, icon: DayNight },
  { value: TimeOfDay.Evening, icon: Night },
];
const timeOfDayVerbose = {
  [TimeOfDay.Morning]: 'Ранкові групи',
  [TimeOfDay.AllDay]: 'Всі групи',
  [TimeOfDay.Evening]: 'Вечірні групи',
};

export const TimeOfDayRadioGroup: React.FC<TimeOfDayRadioGroupProps> = ({
  value,
  onChange,
  className
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.buttons}>
      {
        buttons.map(
          button => (
            <div
              key={button.value}
              className={classNames(
                s.button,
                { [s.active]: button.value === value }
              )}
              onClick={() => onChange(button.value)}
            >
              <button.icon />
            </div>
          )
        )
      }
    </div>
    <div className={s.timeOfDayVerbose}>{timeOfDayVerbose[value]}</div>
  </div>
);