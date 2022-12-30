import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactModal from 'react-modal';

import * as s from './Modal.sss';

export const Modal: React.FC<ReactModal.Props> = props => (
  <ReactModal
    closeTimeoutMS={400}
    {...props}
    className={classNames(s.root, props.className)}
    overlayClassName={
      classNames(
        s.overlay,
        props.overlayClassName,
      )
    }
    portalClassName={
      classNames(
        s.portal,
        { [s.hidden]: !props.isOpen },
        props.portalClassName,
      )
    }
  />
);

export default Modal;