import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Input.sss';

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  invalid?: boolean
};

export const Input: React.FC<InputProps> = ({
  invalid,
  value,
  className,
  ...props
}) => (
  <input
    className={
      classNames(
        s.root,
        { [s.invalid]: invalid },
        { [s.filled]: !!value },
        className,
      )
    }
    value={value}
    {...props}
  />
);