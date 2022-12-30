import * as React from 'react';
import * as cx from 'classnames';

import { Modal, ModalProps } from '@ui/Modal';
import { Button } from '@ui/Button';
import CoffeeTime from '@svg/coffeeTime.svg';

import * as s from './CloseLessonModal.sss';

export type CloseLessonModalProps = ModalProps & {
  onConfirm: () => Promise<void> | void
};

export const CloseLessonModal: React.FC<CloseLessonModalProps> = ({
  onConfirm,
  className,
  ...props
}) => (
  <Modal
    className={
      cx(
        s.root,
        className
      )
    }
    withClose={true}
    {...props}
  >
    <CoffeeTime className={s.image} />

    <div className={s.title}>Закрыть класс?</div>

    <div className={s.buttons}>
      <Button
        className={s.button}
        theme="primary-outline"
        onClick={onConfirm}
      >
        Да
      </Button>
      <Button
        className={s.button}
        theme="outline"
        onClick={props.onRequestClose}
      >
        Нет
      </Button>
    </div>
  </Modal>
);