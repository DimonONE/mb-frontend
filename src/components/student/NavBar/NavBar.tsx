import * as React from 'react';
import * as classNames from 'classnames';

import { Desktop } from '@components/student/NavBar/Desktop';
import { Mobile } from '@components/student/NavBar/Mobile';

import * as s from './NavBar.sss';

export type Theme =
  // White background, black font
  'primary'

  // Transparent background, black font
  | 'primary-transparent'

  // Transparent background, white font
  | 'bright-transparent'

  | 'bright'

  | 'purple';

export type NavBarProps = {
  theme?: Theme
  isLoggedIn: boolean
  position?: 'fixed' | 'static'
  className?: string
};

export const NavBar: React.FC<NavBarProps> = ({
  theme = 'primary',
  position = 'fixed',
  isLoggedIn,
  className
}) => {

  return (
    <>
      <Desktop
        className={classNames(s.desktop, className)}
        isLoggedIn={isLoggedIn}
        position={position}
        theme={theme}
      />
      <Mobile
        className={classNames(s.mobile, className)}
        isLoggedIn={isLoggedIn}
        position={position}
        theme={theme}
      />
    </>
  );
};