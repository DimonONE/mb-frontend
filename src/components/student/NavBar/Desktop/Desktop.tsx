import * as React from 'react';
import * as classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/student/Button';
import { NavItem } from '@components/student/NavBar/NavItem';
import { Link } from '@components/ui/Link';
import { LayoutContainer } from '@components/student/LayoutContainer';
import MaryBalletTopIcon from '@svg/maryBalletRedesign.svg';
import LockIcon from '@svg/lock.svg';
import {
  getStudentsNavigation,
  getPersonalCabinet
} from '@components/student/NavBar/constants';
import {
  authLogin,
  siteIndex,
  trialLessonModalHash,
} from '@urls';
import FacebookIcon from '@svg/facebookFilled.svg';
import InstagramIcon from '@svg/instagram.svg';
import YoutubeIcon from '@svg/youtube.svg';
import TelegramIcon from '@svg/telegramFilled.svg';
import {
  phoneNumber,
  phoneNumberToCall,
  facebookLink,
  instagramLink,
  telegramLink,
  youtubeLink,
} from '@constants';
import { safeFbq } from '@utils/analytics';
import type { Theme } from '../NavBar';

import * as s from './Desktop.sss';

type DesktopProps = {
  isLoggedIn: boolean
  theme: Theme
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

export const Desktop: React.FC<DesktopProps> = ({
  className,
  theme,
  position,
  isLoggedIn
}) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState('');

  const studentsNavigation = getStudentsNavigation(t);
  const personalCabinet = getPersonalCabinet(t);
  
  return (
  <>
    <div style={{ height: '120px' }} />
    <div className={
      classNames(
        s.root,
        positionClassName[position],
        themeClassName[theme],
        className
      )}
      >
      <LayoutContainer>
        <div className={s.topMenu}>
          <div>
            <div className={s.socials}>
              <a
                target="_blank"
                href={instagramLink}
                className={s.social}
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                href={facebookLink}
                className={s.social}
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href={youtubeLink}
                className={s.social}
              >
                <YoutubeIcon />
              </a>
              <a
                target="_blank"
                href={telegramLink}
                className={s.social}
              >
                <TelegramIcon />
              </a>
            </div>
            
          </div>
          <Link to={siteIndex} className={s.logo}>
            <MaryBalletTopIcon />
          </Link>
          <div className={s.contactUs}>
            <a
              className={s.phone}
              href={phoneNumberToCall}
              onClick={() => safeFbq('track', 'Contacts')}
            >
              {phoneNumber}
            </a>
            <Link
              theme="clean"
              to={trialLessonModalHash}
            >
              <Button
                className={s.bottomLink}
                theme="darkBlueOutline"
              >
                {t('student~Записатися')}
              </Button>
            </Link>
          </div>
        </div>
        <nav className={s.nav}>
          {studentsNavigation.map(navItem => (
            <NavItem
              key={navItem.title}
              navItem={navItem}
              theme={theme}
              isActive={'subNav' in navItem && navItem.title === activeItem}
              onClick={'subNav' in navItem
                ? (
                  e => {
                    activeItem !== e
                      ? setActiveItem(e)
                      : setActiveItem('');
                  }
                )
                : undefined
              }
            />
          ))}
          {/* TODO(a.kravchuk): temporarily hidden */}
          {
            false && (
              !isLoggedIn
              ? (
                <Link
                  theme="clean"
                  className={s.listItem}
                  to={authLogin}
                >
                  <LockIcon className={s.lockIcon} />
                  {t('student~Увійти')}
                </Link>
              )
              : (
                <NavItem
                  key={personalCabinet.title}
                  theme={theme}
                  navItem={personalCabinet}
                  isActive={personalCabinet.title === activeItem}
                  onClick={
                    e => {
                      activeItem !== e
                        ? setActiveItem(e)
                        : setActiveItem('');
                    }
                  }
                />
              )
            )
          }
        </nav>
      </LayoutContainer>
    </div>
  </>
  );
};