import * as React from 'react';
import * as classNames from 'classnames';

import { Mobile } from '@components/news/NavBar/Mobile';
import { Desktop } from '@components/news/NavBar/Desktop';

import * as s from './NavBar.sss';

type NavBarProps = {
  className?: string
};

export const NavBar: React.FC<NavBarProps> = ({
  className
}) => (
  <div className={classNames(s.root, className)}>
    <Desktop className={s.desktop} />
    <Mobile className={s.mobile} />
  </div>
);