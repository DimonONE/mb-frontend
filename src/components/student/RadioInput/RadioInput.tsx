import * as React from 'react';
import cx from 'classnames';

import s from './RadioInput.sss';

type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const RadioInput: React.FC<RadioInputProps> = ({
  className,
  ...props
}) => (
  <label className={cx(s.root, className)}>
    <input
      className={s.input}
      type="radio"
      {...props}
    />
    <div className={s.checkMark} />
  </label>
);