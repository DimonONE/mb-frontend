import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './LocationLabel.sss';

export type LocationLabelProps = {
  color: string
  name: string
  className?: string
};

export const LocationLabel: React.FC<LocationLabelProps> = ({
  color,
  name,
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <div
      className={s.circle}
      style={{ backgroundColor: color }}
    >
      M
    </div>
    <div className={s.name}>{name}</div>
  </div>
);
