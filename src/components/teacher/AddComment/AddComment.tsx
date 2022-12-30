import * as React from 'react';
import * as classNames from 'classnames';
import { useState } from 'react';

import * as s from './AddComment.sss';

type AddCommentProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onSubmit'
  > & {
  onSubmit: (value: string) => void | Promise<void>;
};

export const AddComment: React.FC<AddCommentProps> = ({
  onSubmit,
  ...props
}) => {
  const [value, setValue] = useState('');

  return (
    <div className={classNames(s.root, props.className)}>
      <input
        placeholder="Добавить комментарий"
        {...props}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={s.input}
      />
      <button
        className={s.button}
        type="button"
        disabled={!value}
        onClick={
          () => {
            onSubmit(value);
            setValue('');
          }
        }
      >
        +
      </button>
    </div>
  );
};