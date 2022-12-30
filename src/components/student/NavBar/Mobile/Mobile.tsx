import * as React from 'react';
import { useState } from 'react';
import * as classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Link } from '@components/ui/Link';
import MaryBalletTopIcon from '@svg/maryBalletRedesign.svg';
import { Button } from '@components/student/Button';
import { NavItem } from '@components/student/NavBar/NavItem';
import {
  getNavForLoggedIn,
  getStudentsNavigation
} from '@components/student/NavBar/constants';
import {
  authLogin,
  onlinePrivacyPolicy,
  siteIndex,
  sitePrivacyPolicy,
  trialLessonModalHash,
} from '@urls';
import LockIcon from '@svg/lock.svg';
import type { Theme } from '../NavBar';

import * as s from './Mobile.sss';

type MobileProps = {
  theme: Theme
  isLoggedIn: boolean
  position: keyof typeof positionClassName
  className?: string
};

const themeClassName: { [K in Theme]: string } = {
  'primary': s.themePrimary,
  'primary-transparent': s.themePrimaryTransparent,
  'bright-transparent': s.themeBrightTransparent,
  'bright': s.themeBright,
  'purple': s.themePurple,
};

const positionClassName = {
  fixed: s.positionFixed,
  static: s.positionStatic,
};

export const Mobile: React.FC<MobileProps> = ({
  theme,
  isLoggedIn,
  position,
  className
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({});

  const navForLoggedIn = getNavForLoggedIn(t);
  const studentsNavigation = getStudentsNavigation(t);

  return (
    <div className={
      classNames(
        s.root,
        themeClassName[theme],
        positionClassName[position],
        { [s.active]: isOpen },
        className
      )
    }>
      {
        isOpen &&
          <Helmet>
            <meta name="theme-color" content="#E46039" />
          </Helmet>
      }
      <div className={s.topLine}>
        <Link
          className={s.mbIconLink}
          to={siteIndex}
        >
          <MaryBalletTopIcon className={s.maryBalletIcon} />
        </Link>
        <button
          className={classNames(
            s.open,
            {[s.active]: isOpen}
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={s.lines} />
        </button>
      </div>
      <div className={s.menu}>
        <nav className={s.nav}>
          <div className={s.topNav}>
            {studentsNavigation.map((navItem, i) => (
              <NavItem
                key={i}
                theme={theme}
                navItem={navItem}
                isActive={'subNav' in navItem && activeItem[navItem.title]}
                onClick={'subNav' in navItem
                  ? (
                    e => {
                      activeItem[e]
                        ? setActiveItem({...activeItem, [e]: false})
                        : setActiveItem({...activeItem, [e]: true});
                    }
                  )
                  : undefined
                }
              />
            ))
            }
          </div>
          <div className={s.bottomNav}>
            {!isLoggedIn
              ? (
                <Link
                  className={s.listItem}
                  theme="white"
                  to={authLogin}
                >
                  <LockIcon className={s.lockIcon} />
                  {t('student~Увійти')}
                </Link>
              )
              : (
                navForLoggedIn.map((navItem, i) => (
                  <div key={i} className={s.listItem}>
                    <NavItem
                      theme={theme}
                      navItem={navItem}
                    />
                  </div>
                ))
              )
            }
          </div>
        </nav>
        <Link
          theme="clean"
          to={trialLessonModalHash}
        >
          <Button
            theme="ghostPurple"
            className={s.button}
          >
            {t('student~Записатись на заняття')}
          </Button>
        </Link>
        <div className={s.foot}>
          <Link
            className={s.policy}
            to={onlinePrivacyPolicy}
          >
            {t('student~Користувальницька угода')}
          </Link>
          <Link
            className={s.policy}
            to={sitePrivacyPolicy}
          >
            {t('student~Політика конфіденційності')}
          </Link>
        </div>
      </div>
    </div>
  );
};