import * as React from 'react';
import cx from 'classnames';

import { RadioInput } from '@components/student/RadioInput';

import s from './TextRadioGroup.sss';

type Option = {
  label: string
  /* tslint:disable:no-any */
  value: any
};

type TextRadioGroupProps = {
  name?: string
  value?: Option
  onChange: (value: Option) => void
  options: Option[]
  error?: string
  className?: string
  groupClassName?: string
};

export const TextRadioGroup: React.FC<TextRadioGroupProps> = ({
  name,
  value,
  onChange,
  options,
  error,
  className,
  groupClassName,
}) => (
  <div className={cx(s.root, className)}>
    <div className={groupClassName}>
      {
        options.map(
          option => (
            <div
              key={option.value}
              className={s.radioLabelGroup}
              onClick={() => onChange(option)}
            >
              <RadioInput
                name={name}
                checked={value?.value.toString() === option.value.toString()}
              />
              <div className={s.radioLabel}>{option.label}</div>
            </div>
          )
        )
      }
    </div>
    {
      error &&
        <div className={s.error}>{error}</div>
    }
  </div>
);