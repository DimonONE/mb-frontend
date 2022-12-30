import * as React from 'react';
import * as classNames from 'classnames';

import { NavBarContainer } from '@containers/student/NavBar';
import { LayoutContainer } from '@components/student/LayoutContainer';

import * as s from './JumbotronLayout.sss';

type JumbotronLayoutProps = {
  title?: React.ReactNode,
  description?: React.ReactNode,
  theme?: keyof typeof themeClassName
  className?: string
};

const themeClassName = {
  orange: s.themeOrange,
  purple: s.themePurple,
};

export const JumbotronLayout: React.FC<JumbotronLayoutProps> = ({
  title,
  description,
  theme = 'purple',
  children,
  className,
}) => (
  <div className={classNames(s.root, themeClassName[theme], className)}>
    <NavBarContainer
      position="fixed"
      theme={theme === 'orange' ? 'bright' : 'purple'}
    />
    <LayoutContainer className={s.content}>
      {
        title &&
        <div className={s.title}>{title}</div>
      }
      {
        description &&
        <div className={s.description}>{description}</div>
      }
      {children}
    </LayoutContainer>

  </div>
);