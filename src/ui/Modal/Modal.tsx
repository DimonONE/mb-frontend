import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as cx from 'classnames';

import Close from '@svg/close.svg';

import * as s from './Modal.sss';

export type ModalProps = ReactModal.Props & {
  withClose?: boolean
};

export const Modal: React.FC<ModalProps> = ({
  withClose = false,
  onRequestClose,
  className,
  overlayClassName,
  portalClassName,
  isOpen,
  children,
  ...props
}) => (
  <ReactModal
    className={cx(s.root, className)}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    closeTimeoutMS={300}
    overlayClassName={
      cx(
        s.overlay,
        overlayClassName
      )
    }
    portalClassName={
      cx(
        s.portal,
        { [s.hidden]: !isOpen },
        portalClassName
      )
    }
    {...props}
  >
    {
      withClose &&
        <div
          className={s.close}
          onClick={onRequestClose}
        >
          <Close className={s.closeIcon} />
        </div>
    }
    {children}
  </ReactModal>
);