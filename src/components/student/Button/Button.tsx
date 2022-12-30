import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Button.sss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?:
    'clean'
    | 'primaryOrange'
    | 'secondaryOrange'
    | 'ghostOrange'
    | 'primaryPurple'
    | 'secondaryPurple'
    | 'ghostPurple'
    | 'darkBlueOutline'
    | 'whiteOutline'
  size?: 'M' | 'L'
};

export const Button: React.FC<ButtonProps> = ({
  className,
  theme = 'primaryPurple',
  type = 'button',
  size = 'M',
  ...props
}) => (
  <button
    className={
      classNames(
        s.root,
        className,
        { [s.themed]: theme !== 'clean' },
        s[theme],
        s[`size${size}`],
      )
    }
    type={type}
    {...props}
  />
);
