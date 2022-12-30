import * as React from 'react';
import * as classNames from 'classnames';

// styles
import * as s from './Checkbox.sss';

type CheckboxProps = {
  className?: string,
  checked: boolean;
  onCheck?: () => void
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onCheck,
  children,
  className,
  ...props
}) => (
  <label className={classNames(s.root, className)}>
    <div className={classNames(s.checkboxOuter, { [s.checked]: checked })}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={checked}
        onChange={onCheck}
        {...props}
      />
    </div>
    {children}
  </label>
);
