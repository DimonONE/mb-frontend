import * as React from 'react';
import * as classNames from 'classnames';
import { Helmet } from 'react-helmet';

import * as s from './MainPageTitle.sss';

type MainPageTitleProps = {
  className?: string,
  pageTitle: string,
  subTitle: string
};

export const MainPageTitle: React.FC<MainPageTitleProps> = ({
  className,
  pageTitle,
  subTitle
}) => (
  <div className={classNames(s.root, className)}>
    <h1 className={s.title}>{pageTitle}</h1>
    <h3 className={s.subTitle}>{subTitle}</h3>
  </div>
);