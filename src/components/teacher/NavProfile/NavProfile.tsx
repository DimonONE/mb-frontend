import * as React from 'react';
import * as classNames from 'classnames';

import MainMenuNotificationsButton from '@components/teacher/MainMenuNotificationsButton';

import * as s from './NavProfile.sss';

type NavProfileProps = {
  firstName: string
  avatarUrl: string
  className?: string
};

export const NavProfile: React.FC<NavProfileProps> = ({
  firstName,
  avatarUrl,
  className,
}) => (
  <div
    className={
      classNames(
        s.scheduleViewModePerson,
        className
      )
    }
  >
    <img src={avatarUrl} alt="Person"/>
    <div>Привет, <span>{firstName}</span></div>
    <MainMenuNotificationsButton
      isActive={true}
    />
  </div>
);

export default NavProfile;