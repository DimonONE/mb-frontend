import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuOpenButton.sss';

type MainMenuOpenButtonProps = {
  onClick: () => void
  isActive: boolean
  className?: string
};

export const MainMenuOpenButton: React.FC<MainMenuOpenButtonProps> = ({
   className,
   isActive = true,
   onClick,
 }) => (
  <div
    className={
      classNames(
        s.mainMenuOpenButton,
        {[s.active]: isActive}
      )
    }
    onClick={onClick}
  >
    <span></span>
  </div>
);

export default MainMenuOpenButton;
