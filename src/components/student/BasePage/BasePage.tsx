import * as React from 'react';
import * as classNames from 'classnames';
import { Helmet } from 'react-helmet';

import { NavBarContainer } from '@containers/student/NavBar';
import { Footer } from '@components/student/Footer';
import { useDesktopOrWider } from '@utils/mediaQuery';

import * as s from './BasePage.sss';

type BasePageProps = {
  theme?: 'primary' | 'grey'
  className?: string
};

export const BasePage: React.FC<BasePageProps> = ({
  theme = 'primary',
  className,
  children
}) => {
  const isDesktopOrWider = useDesktopOrWider();

  return (
    <div className={classNames(s.root, className)}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={s.content}>
        <NavBarContainer theme={theme === 'primary' ? 'primary-transparent' : 'primary'} />
        {children}
      </div>
      {isDesktopOrWider && <Footer />}
    </div>
  );
};