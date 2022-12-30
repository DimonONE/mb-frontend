import * as React from 'react';
import * as classNames from 'classnames';

import { Link } from '@components/ui/Link';
import ArrowToBottomIcon from '@svg/arrowToBottom.svg';
import type { NavLink, NavLinkWithChildren } from '@components/student/NavBar/constants';
import type { Theme } from '../NavBar';

import * as s from './NavItem.sss';

type NavItemProps = {
  className?: string,
  navItem: NavLink | NavLinkWithChildren,
  isActive?: boolean,
  onClick?: (e: string) => void
  theme: Theme
};

const themeClassName: { [K in Theme]: string } = {
  'primary': s.themePrimary,
  'primary-transparent': s.themePrimaryTransparent,
  'bright-transparent': s.themeBrightTransparent,
  'bright': s.themeBrightTransparent,
  'purple': s.themePurple,
};

export const NavItem: React.FC<NavItemProps> = ({
  className,
  navItem,
  isActive,
  theme,
  onClick,
}) => (
  <div
    className={
      classNames(
        s.root,
        themeClassName[theme],
        className
      )
    }
  >
    {'subNav' in navItem
      ? (
        <div onClick={e => onClick(navItem.title)}>
          {navItem.title}
          <ArrowToBottomIcon className={
            classNames(
              s.arrow,
              { [s.expanded]: isActive }
            )}
          />

            <div className={classNames(s.subNav, { [s.visibleSubNav]: isActive })}>
              {navItem.subNav.map(link => (
                <Link
                  className={s.subItem}
                  to={link.path}
                  key={link.path}
                >
                  {
                    link.iconImage
                    ? <img
                        className={classNames(s.iconImage, 'lazyload', 'lazypreload')}
                        data-srcset={`${link.iconImage.x1} 1x, ${link.iconImage.x2} 2x`}
                        alt="..."
                      />
                    : null
                  }
                  {link.title}
                </Link>
              ))}
            </div>
        </div>
      )
      : (
        <Link
          className={s.listLink}
          to={navItem.path}
          key={navItem.path}
        >
          {navItem.title}
        </Link>
      )
    }
  </div>
);