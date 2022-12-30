import * as React from 'react';
import * as classNames from 'classnames';

import GridContainer from '@components/teacher/GridContainer';
import MainMenuNavigationButton from '@components/teacher/MainMenuNavigationButton';
import MainMenuLogoutButton from '@components/teacher/MainMenuLogoutButton';
import {
  teacherCabinetSchedule,
  teacherCurrentLesson,
  teacherSupport
} from '@urls';

import SvgLogo from './static/SvgLogo.svg';

import * as s from './MainMenuNavigationBar.sss';

type MainMenuNavigationBarProps = {
  isActive?: boolean
  className?: string
};

export const MainMenuNavigationBar: React.FC<MainMenuNavigationBarProps> = ({
   isActive = true,
   className,
 }) => (
  <div
    className={
      classNames(
        s.mainMenuNavigationBar,
        {[s.active]: isActive},
        className
      )
    }
  >
    <GridContainer className={s.maxHeight}>
      <div className={s.mainMenuNavigationWrap}>
        <div className={s.mainMenuNavigationButtonWrap}>
          <div className={s.logo}>
            <SvgLogo />
          </div>
          <MainMenuNavigationButton to={teacherCabinetSchedule}>Мое расписание</MainMenuNavigationButton>
          <MainMenuNavigationButton to={teacherCurrentLesson}>Текущее занятие</MainMenuNavigationButton>
          <MainMenuNavigationButton
            to={'#'}
            style={{ color: '#ccc' }}
          >
            Уведомления
          </MainMenuNavigationButton>
          <MainMenuNavigationButton to={teacherSupport}>Поддержка</MainMenuNavigationButton>
        </div>
        <MainMenuLogoutButton>Выход из аккаунта</MainMenuLogoutButton>
      </div>
    </GridContainer>
  </div>
);

export default MainMenuNavigationBar;
