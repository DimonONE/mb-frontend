import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './VisitorToggleActionButton.sss';

type VisitorToggleActionButtonProps = {
  onClick: () => void
  active: boolean
  disabled?: boolean
  className?: string
};

export const VisitorToggleActionButton: React.FC<VisitorToggleActionButtonProps> = ({
  active,
  onClick,
  disabled,
  className,
  children,
}) => (
  <button
    className={
      classNames(
        s.root,
        { [s.active]: active },
        { [s.disabled]: disabled },
        className
      )
    }
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);