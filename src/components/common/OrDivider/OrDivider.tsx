import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './OrDivider.sss';

type OrDividerProps = {
  className?: string
};

export const OrDivider: React.FC<OrDividerProps> = ({
  className
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.line} />
    <div className={s.text}>или</div>
    <div className={s.line} />
  </div>
);

export default OrDivider;