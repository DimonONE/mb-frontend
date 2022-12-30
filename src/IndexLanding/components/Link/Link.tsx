import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './Link.sss';

type LinkProps = {
  href: string
  onClick?: (event: React.MouseEvent) => void
  className?: string
};

export const Link: React.FC<LinkProps> = ({
  href,
  onClick,
  className,
  children
}) => (
  <a
    href={href}
    onClick={onClick}
    className={classNames(s.root, className)}
  >
    {children}
  </a>
);

export default Link;