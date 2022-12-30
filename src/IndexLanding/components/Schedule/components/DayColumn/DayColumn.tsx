import * as React from 'react';
import * as classNames from 'classnames';

import { weekdayVerbose } from '@constants';

import * as s from './DayColumn.sss';

type DayColumnProps = {
  weekday: number
  className?: string
};

export const DayColumn: React.FC<DayColumnProps> = ({
  weekday,
  className,
  children
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.head}>
      {weekdayVerbose[weekday]}
    </div>
    <div className={s.schedule}>
      {children}
    </div>
  </div>
);