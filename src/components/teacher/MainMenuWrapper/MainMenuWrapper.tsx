import * as React from 'react';
import * as classNames from 'classnames';

import MainMenuVisible from '@components/teacher/MainMenuVisible';
import MainMenuNavigationBar from '@components/teacher/MainMenuNavigationBar';
import MainMenuNotificationsBar from '@components/teacher/MainMenuNotificationsBar';
import Overlay from '@components/teacher/Overlay';

type MainMenuWrapperProps = {
  isActive?: boolean
  className?: string
};

import * as s from './MainMenuWrapper.sss';

export const MainMenuWrapper: React.FC<MainMenuWrapperProps> = ({
  className,
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);

  return (
  <div className={classNames(s.root, className)}>
    <MainMenuVisible
      isNavbarOpen={isNavbarOpen}
      onRequestToggleNavbar={() => {
        setIsNavbarOpen(!isNavbarOpen);
        if (isNotificationOpen) {
          setIsNotificationOpen(!isNotificationOpen);
        }
      }}
      onRequestToggleNotifications={() => {
        setIsNotificationOpen(!isNotificationOpen);
        if (isNavbarOpen) {
          setIsNavbarOpen(!isNavbarOpen);
        }
      }}
    />
    <MainMenuNavigationBar isActive={isNavbarOpen}/>
    <MainMenuNotificationsBar isActive={isNotificationOpen}/>
    <Overlay
      onClick={() => {
        if (isNavbarOpen) {
          setIsNavbarOpen(!isNavbarOpen);
        } else {
          setIsNotificationOpen(!isNotificationOpen);
        }
      }}
      zIndex={15}
      isVisible={isNavbarOpen || isNotificationOpen}
    />
  </div>
  );
};

export default MainMenuWrapper;
