import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Card.sss';

type CardProps = {
  className?: string
};

export const Card: React.FC<CardProps> = ({
  className,
  children
}) => (
  <div className={classNames(s.root, className)}>
    {children}
  </div>
);