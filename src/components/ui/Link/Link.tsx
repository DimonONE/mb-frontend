import * as React from 'react';
import * as classNames from 'classnames';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';

import * as s from './Link.sss';

type CommonProps = {
  theme?: keyof typeof themes
};
export type AnchorLinkProps = CommonProps & React.HTMLProps<HTMLAnchorElement>;
export type RouterLinkProps = CommonProps & ReactRouterLinkProps;

const themes = {
  violet: s.themeViolet,
  white: s.themeWhite,
  orange: s.themeOrange,
  helper: s.themeHelper,
  clean: ''
};

export function Link(props: AnchorLinkProps): React.ReactElement;
// tslint:disable-next-line:unified-signatures
export function Link(props: RouterLinkProps): React.ReactElement;
export function Link(props: AnchorLinkProps | RouterLinkProps): React.ReactElement {
  const { theme } = props;
  const className = classNames(
    s.root,
    themes[theme || 'violet'],
    props.className,
  );

  if ('href' in props) {
    return <a {...props} className={className} />;
  }

  return <ReactRouterLink {...(props as RouterLinkProps)} className={className} />;
}