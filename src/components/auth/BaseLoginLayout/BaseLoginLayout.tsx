import * as React from 'react';
import * as classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {
  animated,
  useTransition,
  config,
} from 'react-spring';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { NavBarContainer } from '@containers/student/NavBar';

import * as s from './BaseLoginLayout.sss';

type BaseLoginLayoutProps = {
  className?: string
  contentClassName?: string
};

export const BaseLoginLayout: React.FC<BaseLoginLayoutProps> = ({
  className,
  contentClassName,
  children,
}) => {
  const transition = useTransition(
    true,
    {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      config: config.slow
    }
  );

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#EFA088" />
      </Helmet>
      {
        transition(style => (
          <animated.div
            className={classNames(s.root, className)}
            style={style}
          >
            <NavBarContainer
              className={s.navbar}
              theme="bright-transparent"
            />
            <LayoutContainer>
              <div className={classNames(s.content, contentClassName)}>
                {children}
              </div>
            </LayoutContainer>
          </animated.div>
        ))
      }
    </>
  );
};