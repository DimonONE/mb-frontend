import * as React from 'react';
import {
  forwardRef,
  LegacyRef,
} from 'react';
import * as classNames from 'classnames';
import ReactInputMask from 'react-input-mask';
import { Props as ReactInputMaskProps } from 'react-input-mask';

import * as s from './Input.sss';

type InputRef = HTMLInputElement;
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Omit<ReactInputMaskProps, 'mask'> & {
  mask?: ReactInputMaskProps['mask']
};

export const Input = forwardRef<InputRef, InputProps>(
  (
    props,
    ref
  ) => {
    const {
      type = 'text',
      name,
      value,
      onChange,
      placeholder,
      onKeyPress,
      mask,
      className,
    } = props;

    if (mask) {
      return (
        <ReactInputMask
          ref={ref as unknown as LegacyRef<ReactInputMask>}
          {...props}
          className={classNames(s.root, props.className)}
          mask={mask}
        />
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        className={classNames(s.root, className)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />
    );
  }
);

export default Input;
