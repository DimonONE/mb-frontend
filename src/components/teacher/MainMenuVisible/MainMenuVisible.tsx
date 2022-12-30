import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuVisible.sss';

import GridContainer from '@components/teacher/GridContainer';
import MainMenuOpenButton from '@components/teacher/MainMenuOpenButton';
import MainMenuNotificationsButton from '@components/teacher/MainMenuNotificationsButton';

type MainMenuVisibleProps = {
  isUnreadNotification?: boolean
  className?: string
  onRequestToggleNavbar: () => void
  onRequestToggleNotifications: () => void
  isNavbarOpen: boolean
};

export const MainMenuVisible: React.FC<MainMenuVisibleProps> = ({
  isUnreadNotification = true,
  className,
  onRequestToggleNavbar,
  onRequestToggleNotifications,
  isNavbarOpen
 }) => (
   <div className={classNames(s.mainMenuVisible, className)}>
    <GridContainer>
      <div className={classNames(s.mainMenuVisibleInner)}>
        <MainMenuOpenButton
          isActive={isNavbarOpen}
          onClick={onRequestToggleNavbar}
        />
        <span>{ isNavbarOpen ? 'Меню' : 'Мое расписание' }</span>
        <MainMenuNotificationsButton
          isActive={true}
          onClick={onRequestToggleNotifications}
        />
      </div>
    </GridContainer>
   </div>
);

export default MainMenuVisible;
