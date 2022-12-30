import * as React from 'react';
import cx from 'classnames';
import {
  Link,
  LinkProps
} from 'react-router-dom';

import s from './Button.sss';

export type ButtonProps = (
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > |
  React.PropsWithChildren<LinkProps>
) & {
  theme?: keyof typeof themeClassName
  className?: string
};

const themeClassName = {
  'primary': s.primary,
  'primary-outline': s.primaryOutline,
  'outline': s.outline,

  // clean button don't have specific styles
  // and can be used to create unique button
  // that like wan't be reused
  'clean': undefined
};

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  className,
  ...props
}) => {
  const classNames = cx(
    s.root,
    className,
    themeClassName[theme],
  );

  if ('to' in props) {
    return (
      <Link {...props}>
        <a className={classNames}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      {...props}
    />
  );
};
