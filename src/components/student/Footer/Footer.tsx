import * as React from 'react';
import * as classNames from 'classnames';

import { LayoutContainer } from '@components/student/LayoutContainer';
import {
  phoneNumber,
  phoneNumberToCall,
  emailAddress,
  facebookLink,
  instagramLink,
  telegramLink
} from '@constants';
import { safeFbq } from '@utils/analytics';

import * as s from './Footer.sss';

type FooterProps = {
  className?: string
};

export const Footer: React.FC<FooterProps> = ({
  className
}) => {
  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.content}>
        <div className={s.iconLinks}>
          <p>Социальные сети</p>
          <div className={s.socialLinks}>
            <a
              className={s.socialLink}
              href={instagramLink}
              target="_blank"
            >
              Instagram
            </a>
            <a
              className={s.socialLink}
              href={facebookLink}
              target="_blank"
            >
              Facebook
            </a>
            <a
              className={s.socialLink}
              href={telegramLink}
              target="_blank"
            >
              Telegram
            </a>
          </div>
        </div>
        <div className={s.contactsSection}>
          <p>Номер телефона</p>
          <a
            className={s.phone}
            href={phoneNumberToCall}
            onClick={() => safeFbq('track', 'Contacts')}
          >
            {phoneNumber}
          </a>
        </div>
        <div className={s.contactsSection}>
          <p>Почта</p>
          {emailAddress}
        </div>
      </LayoutContainer>
    </div>
  );
};