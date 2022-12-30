import * as React from 'react';
import * as classNames from 'classnames';
import {
  NavLink,
  NavLinkProps
} from 'react-router-dom';

import * as s from './ScheduleViewModeButton.sss';

type ScheduleViewModeButtonProps = NavLinkProps;

export const ScheduleViewModeButton: React.FC<ScheduleViewModeButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <NavLink
    {...props}
    className={classNames(s.root, className)}
    activeClassName={s.active}
  >
    {children}
  </NavLink>
);

export default ScheduleViewModeButton;