import * as React from 'react';
import * as classNames from 'classnames';

import BottomArrow from '@svg/BottomArrow.svg';

import * as s from './DayPicker.sss';

type DayPickerProps = {
  value: number
  onChange: (arg: number) => void
  className?: string
};

const days = [
  { value: 1, verbose: 'Пн' },
  { value: 2, verbose: 'Вт' },
  { value: 3, verbose: 'Ср' },
  { value: 4, verbose: 'Чт' },
  { value: 5, verbose: 'Пт' },
  { value: 6, verbose: 'Сб' },
];

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  onChange,
  className,
}) => {
  const today = new Date().getDay();
  return (
    <div className={classNames(s.root, className)}>
      {
        days.map(
          day => (
            <div
              key={day.value}
              className={classNames(
                s.day,
                { [s.activeDay]: value === day.value },
                { [s.today]: today === day.value }
              )}
              onClick={() => onChange(day.value)}
            >
              {day.verbose}
              {
                value === day.value &&
                <div className={s.bottomArrow}>
                  <BottomArrow />
                </div>
              }
            </div>
          )
        )
      }
    </div>
  );
};