import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuLogoutButton.sss';

type MainMenuLogoutButtonProps = {
  onClick?: () => void
  className?: string
};

export const MainMenuLogoutButton: React.FC<MainMenuLogoutButtonProps> = ({
  className,
  onClick,
  children
}) => (
  <div
    className={
      classNames(
        s.mainMenuLogoutButton,
        className
      )
    }
  >
    {children}
  </div>
);

export default MainMenuLogoutButton;