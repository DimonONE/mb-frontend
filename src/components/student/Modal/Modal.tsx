import * as React from 'react';
import cx from 'classnames';
import ReactModal from 'react-modal';

import CloseIcon from '@static/svg/close.svg';
import HeartsIcon from '@static/svg/hearts.svg';

import s from './Modal.sss';

export type ModalProps = ReactModal.Props;

type StudentModalProps = ModalProps & {
  theme?: 'orange'
  withClose?: boolean
};

export const Modal: React.FC<StudentModalProps> = ({
  className,
  theme,
  withClose = false,
  overlayClassName,
  htmlOpenClassName,
  bodyOpenClassName,
  isOpen,
  onRequestClose,
  ...props
}) => (
  <ReactModal
    appElement={typeof window !== 'undefined' ? document.querySelector('#root') : undefined}
    className={{
      base: cx(s.root, s[theme], typeof className === 'object' ? className.base : className),
      afterOpen: cx(s.afterOpen, typeof className === 'object' ? className.afterOpen : undefined),
      beforeClose: cx(s.beforeClose, typeof className === 'object' ? className.beforeClose : undefined),
    }}
    overlayClassName={{
      base: cx(s.overlay, typeof overlayClassName === 'object' ? overlayClassName.base : className),
      afterOpen: cx(s.afterOpen, typeof overlayClassName === 'object' ? overlayClassName.afterOpen : undefined),
      beforeClose: cx(s.beforeClose, typeof overlayClassName === 'object' ? overlayClassName.beforeClose : undefined),
    }}
    htmlOpenClassName={cx(s.htmlOpen, htmlOpenClassName)}
    bodyOpenClassName={cx(s.bodyOpen, bodyOpenClassName)}
    closeTimeoutMS={300}
    isOpen={isOpen}
    {...props}
  >
    {theme === 'orange' &&
      <HeartsIcon
        className={s.heartsIconTop}
      />
    }
    {withClose &&
      <div className={s.close}>
        <CloseIcon
          className={s.closeIcon}
          onClick={onRequestClose}
        />
      </div>
    }
    {props.children}
    {theme === 'orange' &&
      <HeartsIcon
        className={s.heartsIconBottom}
      />
    }
  </ReactModal>
);