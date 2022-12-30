import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuNotificationsButton.sss';

import SvgMainMenuNotificationsButton from './static/SvgMainMenuNotificationsButton.svg';

type MainMenuNotificationsButtonProps = {
  onClick?: () => void
  isActive: boolean
  className?: string
};

export const MainMenuNotificationsButton: React.FC<MainMenuNotificationsButtonProps> = ({
  className,
  isActive = true,
  onClick,
}) => (
  <div
    className={
      classNames(
        s.mainMenuNotificationsButton,
        {[s.active]: isActive},
        className
      )
    }
    onClick={onClick}
  >
    <SvgMainMenuNotificationsButton />
  </div>
);

export default MainMenuNotificationsButton;
