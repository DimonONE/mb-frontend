import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuNotificationsShowMoreButton.sss';

type MainMenuNotificationsShowMoreButtonProps = {
  onClick?: () => void
  className?: string
};

export const MainMenuNotificationsShowMoreButton: React.FC<MainMenuNotificationsShowMoreButtonProps> = ({
  className,
  onClick,
  children
}) => (
  <div
    className={
      classNames(
        s.mainMenuNotificationsShowMoreButton,
        className
      )
    }
  >
    {children}
  </div>
);

export default MainMenuNotificationsShowMoreButton;