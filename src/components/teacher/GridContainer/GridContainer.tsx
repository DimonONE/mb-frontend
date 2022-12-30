import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './GridContainer.sss';

type GridContainerProps = {
  className?: string
};

export const GridContainer: React.FC<GridContainerProps> = ({
    className,
    children
  }) => (
  <div
    className={classNames(s.gridContainer, className)}
  >
    {children}
  </div>
);

export default GridContainer;
