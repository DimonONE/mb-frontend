import * as React from 'react';
import ReactDOM from 'react-dom';

import * as classNames from 'classnames';

import * as s from './Overlay.sss';

type OverlayProps = {
  isVisible: boolean
  zIndex?: number
  onClick: () => void
  className?: string
};

export const Overlay: React.FC<OverlayProps> = ({
  isVisible,
  className,
  zIndex = 1,
  onClick,
}) => {
  const component = (
    <div className={
        classNames(
          s.overlay,
          {[s.active]: isVisible},
          className
        )
      }
      style={{ zIndex }}
      onClick={ onClick }
    />
  );

  return ReactDOM.createPortal(
    component,
    document.body
  );
};

export default Overlay;
