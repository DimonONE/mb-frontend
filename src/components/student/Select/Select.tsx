import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import {
  default as ReactSelect,
  SelectProps as ReactSelectProps,
} from 'react-dropdown-select';

import * as s from './Select.sss';

const themeClassName = {
  primary: s.primary,
  white: s.white,
};

type SelectProps<T> = React.PropsWithRef<ReactSelectProps<T>> & {
  theme?: keyof typeof themeClassName
};

export function Select<T extends object | string = {}>({
  className,
  theme = 'primary',
  ...props
}: React.PropsWithRef<SelectProps<T>>) {
  const { t } = useTranslation();

  const combinedClassName = classNames(
    s.root,
    themeClassName[theme],
    className
  );

  return (
    <ReactSelect
      placeholder={t('Выбрать')}
      searchable={false}
      className={combinedClassName}
      {...props}
    />
  );
}