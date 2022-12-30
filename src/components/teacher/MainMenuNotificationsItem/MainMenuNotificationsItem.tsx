import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './MainMenuNotificationsItem.sss';

type MainMenuNotificationsItemProps = {
  onClick?: () => void
  className?: string
  body: string
  date: string
  time: string
};

export const MainMenuNotificationsItem: React.FC<MainMenuNotificationsItemProps> = ({
  className,
  onClick,
  body,
  date,
  time
}) => (
  <div
    className={
      classNames(
        s.mainMenuNotificationsItem,
        className
      )
    }
  >
    <div className={s.mainMenuNotificationsItemBody}>{body}</div>
    <div className={s.mainMenuNotificationsItemDateTime}>
      <div className={s.mainMenuNotificationsItemDate}>{date}</div>
      <div className={s.mainMenuNotificationsItemTime}>{time}</div>
    </div>
  </div>
);

export default MainMenuNotificationsItem;