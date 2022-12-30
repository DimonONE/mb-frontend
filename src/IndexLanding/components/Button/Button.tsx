import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Button.sss';

const themesClasses = {
  'primary-outline': s.primaryOutline
};

type ButtonProps = {
  id?: string
  type?: 'button' | 'submit' | 'reset'
  theme?: keyof typeof themesClasses
  onClick?: () => void
  disabled?: boolean
  className?: string
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  theme = 'primary-outline',
  onClick,
  disabled,
  className,
  children
}) => (
  <button
    type={type}
    disabled={disabled}
    className={
      classNames(
        s.root,
        themesClasses['primary-outline'],
        className
      )
    }
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;