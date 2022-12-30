import * as React from 'react';
import * as classNames from 'classnames';

// import ArrowToTop from '@components/teacher/ArrowToTop';

import * as s from './BaseCoachCabinet.sss';

type BaseCoachCabinetProps = {
  outerClassName?: string
  className?: string
};

export const BaseCoachCabinet: React.FC<BaseCoachCabinetProps> = ({
  outerClassName,
  className,
  children,
}) => (
  <div className={classNames(s.root, outerClassName)}>
    <div className={classNames(s.content, className)}>
      {children}
    </div>
    {/*<ArrowToTop/>*/}
  </div>
);

export default BaseCoachCabinet;