import * as React from 'react';
import * as classNames from 'classnames';
import {
  NavLink,
  NavLinkProps
} from 'react-router-dom';

import * as s from './MainMenuNavigationButton.sss';

type MainMenuNavigationButtonProps = NavLinkProps;

export const MainMenuNavigationButton: React.FC<MainMenuNavigationButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <NavLink
    className={classNames(s.root, className)}
    activeClassName={s.active}
    {...props}
  >
    {children}
  </NavLink>
);

export default MainMenuNavigationButton;