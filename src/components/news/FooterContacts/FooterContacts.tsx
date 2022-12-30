import * as React from 'react';
import * as classNames from 'classnames';

import {
  phoneNumber,
  phoneNumberToCall,
  emailAddress,
} from '@constants';

import * as s from './FooterContacts.sss';

type FooterContactsProps = {
  className?: string
};

export const FooterContacts: React.FC<FooterContactsProps> = ({
  className
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.title}>Связаться с нами</div>
    <a
      className={s.phone}
      href={phoneNumberToCall}
    >
      {phoneNumber}
    </a>
    <div className={s.email}>{emailAddress}</div>
  </div>
);
