import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';

import FacebookIcon from '@svg/facebook.svg';
import InstagramIcon from '@svg/instagram.svg';
import TelegramIcon from '@svg/telegram.svg';
import MaryBalletIcon from '@svg/maryBallet.svg';
import {
  sitePrivacyPolicy,
} from '@urls';
import {
  facebookLink,
  instagramLink,
  telegramLink
} from '@constants';
import { FooterContacts } from '@components/news/FooterContacts';
import { FooterLinksGroup } from '@components/news/FooterLinksGroup';

import * as s from './Footer.sss';

type FooterProps = {
  className?: string
};

export const Footer: React.FC<FooterProps> = ({
  className
}) => {
  return (
    <div className={classNames(s.root, className)}>
      <div className={s.head}>
        <div className={s.iconLinks}>
          <MaryBalletIcon className={s.maryBalletIcon} />
          <div className={s.socialLinks}>
            <a
              className={s.socialLink}
              href={facebookLink}
              target="_blank"
              >
              <FacebookIcon className={s.socialIcon} />
            </a>
            <a
              className={s.socialLink}
              href={instagramLink}
              target="_blank"
              >
              <InstagramIcon className={s.socialIcon} />
            </a>
            <a
              className={s.socialLink}
              href={telegramLink}
              target="_blank"
              >
              <TelegramIcon className={s.socialIcon} />
            </a>
          </div>
        </div>
        <div className={s.contactsLinkGroup}>
          <FooterContacts className={s.contacts} />
          <FooterLinksGroup className={s.linksGroup} />
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.allRightReserved}>Все права защищены</div>
        <div className={s.legalLinks}>
          <Link
            className={s.privacyPolicy}
            to={sitePrivacyPolicy}
          >
            Політика конфіденційності
          </Link>
        </div>
      </div>
    </div>
  );
};