import * as React from 'react';
import * as classNames from 'classnames';

import ArrowToBottomIcon from '@svg/arrowToBottom.svg';

import * as s from './NewsPageFilter.sss';

type NewsPageFilterProps = {
  className?: string,
};

export const NewsPageFilter: React.FC<NewsPageFilterProps> = ({
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.title}>Фильтр новостей / категорий</div>
    <ArrowToBottomIcon />
  </div>
);