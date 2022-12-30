import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Spinner.sss';

type SpinnerProps = {
  className?: string
};

export const Spinner: React.FC<SpinnerProps> = ({
  className
}) => (
  <div className={classNames(s.root, className)} />
);

export default Spinner;