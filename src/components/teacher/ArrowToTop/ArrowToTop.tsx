import * as React from 'react';
import * as classNames from 'classnames';

import SvgArrowToTop from './static/SvgArrowToTop.svg';

import * as s from './ArrowToTop.sss';

type ArrowToTopProps = {
  isVisible?: boolean
  onClick?: () => void
  className?: string
};

export const ArrowToTop: React.FC<ArrowToTopProps> = ({
   isVisible = true,
   className,
   onClick,
 }) => (
  <div
    className={
      classNames(
        s.arrowToTop,
        className,
        {[s.active]: isVisible}
      )
    }
    onClick={onClick}
  >
    <SvgArrowToTop />
  </div>
);

export default ArrowToTop;