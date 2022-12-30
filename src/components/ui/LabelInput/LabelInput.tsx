import * as React from 'react';
import * as classNames from 'classnames';

import { Input, InputProps } from '@components/ui/Input';

import * as s from './LabelInput.sss';

export type LabelInputProps = InputProps & {
  label?: string
  error?: string | string[]
};

export const LabelInput: React.FC<LabelInputProps> = ({
  label,
  error,
  className,
  ...inputProps
}) => (
  <label className={classNames(s.root, className)}>
    {label &&
      <div className={s.labelText}>{label}</div>
    }
    <Input {...inputProps} invalid={Array.isArray(error) ? !!error.length : !!error} />
    {
      error && (
        typeof error === 'string'
        ? <div className={s.error}>{error}</div>
        : error.map((singleError, i) => <div key={i} className={s.error}>{singleError}</div>)
      )
    }
  </label>
);