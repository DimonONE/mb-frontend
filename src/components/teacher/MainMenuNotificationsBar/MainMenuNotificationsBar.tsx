import * as React from 'react';
import * as classNames from 'classnames';

import GridContainer from '@components/teacher/GridContainer';
import MainMenuNotificationsItem from '@components/teacher/MainMenuNotificationsItem';
import MainMenuNotificationsShowMoreButton from '@components/teacher/MainMenuNotificationsShowMoreButton';

import * as s from './MainMenuNotificationsBar.sss';

type MainMenuNotificationsBarProps = {
  isActive?: boolean
  className?: string
};

export const MainMenuNotificationsBar: React.FC<MainMenuNotificationsBarProps> = ({
  isActive = true,
  className,
}) => (
  <div
    className={
      classNames(
        s.root,
        {[s.active]: isActive},
        className
      )
    }
  >
    <GridContainer>
      <div className={classNames(s.rootWrap)}>
        <h3>Новые</h3>
        <MainMenuNotificationsItem
          body="Ученик Дмитрий Шевцов сменил номер телефона, имя и фамилию"
          date="14.06"
          time="12:30"
        />
        <MainMenuNotificationsItem
          body="Ученик Дмитрий Шевцов сменил номер телефона, имя и фамилию"
          date="14.06"
          time="12:30"
        />
        <MainMenuNotificationsItem
          body="Ученик Дмитрий Шевцов сменил номер телефона, имя и фамилию"
          date="14.06"
          time="12:30"
        />
        <MainMenuNotificationsShowMoreButton>Смотреть все</MainMenuNotificationsShowMoreButton>
      </div>
    </GridContainer>
  </div>
);

export default MainMenuNotificationsBar;
