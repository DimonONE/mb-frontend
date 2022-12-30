import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './LayoutContainer.sss';

type LayoutContainerProps = {
  className?: string,
};

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  className,
  children
}) => (
  <div className={classNames(s.root, className)}>
    {children}
  </div>
);