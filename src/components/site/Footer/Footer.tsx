import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from '@components/ui/Link';
import { LayoutContainer } from '@components/student/LayoutContainer';

import FacebookIcon1x from '@static/img/facebook-rounded-1x-min.png';
import FacebookIcon2x from '@static/img/facebook-rounded-2x-min.png';
import InstagramIcon1x from '@static/img/instagram-rounded-1x-min.png';
import InstagramIcon2x from '@static/img/instagram-rounded-2x-min.png';
import TikTokIcon1x from '@static/img/tiktok-rounded-1x-min.png';
import TikTokIcon2x from '@static/img/tiktok-rounded-2x-min.png';
import TelegramIcon1x from '@static/img/telegram-rounded-1x-min.png';
import TelegramIcon2x from '@static/img/telegram-rounded-2x-min.png';
import MBIcon from './static/mb-icon.png';

import * as s from './Footer.sss';

import {
  facebookLink,
  instagramLink,
  telegramLink,
  tiktokLink
} from '@constants';
import {
  siteAboutUs,
  siteBalletChoreography,
  siteBalletForAdults,
  siteBalletForBeginners,
  siteBalletGroups,
  siteBalletIndividual,
  siteBalletInStudio,
  sitePointe,
  sitePrivacyPolicy,
  siteStretching,
  siteStretchingForChildren
} from '@urls';

type FooterProps = {
  className?: string
};

export const Footer: React.FC<FooterProps> = ({
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.companyInfo}>
          <div className={s.iconAndName}>
            <img
              className={classNames(s.iconImage, 'lazyload')}
              data-src={MBIcon}
              alt="..."
            />
            Mary Ballet
          </div>

          <div className={s.description}>
            {t('site~Mary Ballet - найбільша студія балету для дорослих в Києві')}
          </div>

          <div className={s.socialIcons}>
            <Link href={instagramLink}>
              <img
                className="lazyload"
                data-srcset={`${InstagramIcon1x} 1x, ${InstagramIcon2x} 2x`}
                alt="intagram"
              />
            </Link>
            <Link href={telegramLink}>
              <img
                className="lazyload"
                data-srcset={`${TelegramIcon1x} 1x, ${TelegramIcon2x} 2x`}
                alt="telegram"
              />
            </Link>
            <Link href={facebookLink}>
              <img
                className="lazyload"
                data-srcset={`${FacebookIcon1x} 1x, ${FacebookIcon2x} 2x`}
                alt="facebook"
              />
            </Link>
            <Link href={tiktokLink}>
              <img
                className="lazyload"
                data-srcset={`${TikTokIcon1x} 1x, ${TikTokIcon2x} 2x`}
                alt="TikTok"
              />
            </Link>
          </div>

          <div className={s.copyright}>©2022 Mary Ballet</div>
        </div>

        <div className={s.topics}>
        {/*<div className={s.topicGroup}>*/}
          <div className={s.topic}>
            <div className={s.topicTitle}>{t('site~Про компанію')}</div>
            <Link to={siteAboutUs}
                  onClick={() => window.scrollTo(0, 0)}
                  className={s.topicLink} theme="clean">
              {t('site~Про нас')}
            </Link>
            <Link className={s.topicLink} theme="clean">{t('site~Місія')}</Link>
            <Link className={s.topicLink} theme="clean">{t('site~Засновники')}</Link>
            <Link className={s.topicLink} theme="clean">{t('site~Кар\'єра')}</Link>
          </div>
          <div className={s.topic}>
            <div className={s.topicTitle}>{t('site~Напрями')}</div>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletForAdults}
            >
              {t('site~Балет для дорослих')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletForBeginners}
            >
              {t('site~Балет для початківців')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletIndividual}
            >
              {t('site~Індивідуальні заняття балетом')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletGroups}
            >
              {t('site~Групові заняття балетом')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletChoreography}
            >
              {t('site~Класична хореографія')}
            </Link>
          </div>
        {/*</div>*/}

        {/*<div className={s.topicGroup}>*/}
          <div className={s.topic}>
            <div className={s.topicTitle}>{t('site~Світ Mary Ballet')}</div>
            <Link className={s.topicLink} theme="clean">{t('site~Новини')}</Link>
            <Link className={s.topicLink} theme="clean">{t('site~Майстер-класи')}</Link>
            <Link className={s.topicLink} theme="clean">{t('site~Заходи')}</Link>
            <Link className={s.topicLink} theme="clean">{t('site~Магазин')}</Link>
          </div>
          <div className={s.topic}>
            <div className={s.topicTitle}>{t('site~Допомога')}</div>
            {/*<Link className={s.topicLink} theme="clean">{t('site~Питання та відповіді')}</Link>*/}
            <Link
              className={s.topicLink}
              theme="clean"
              to={sitePrivacyPolicy}
            >
              {t('site~Політика конфіденційності')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteStretching}
            >
              {t('site~Стретчинг')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={sitePointe}
            >
              {t('site~Пуанти')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteStretchingForChildren}
            >
              {t('site~Стретчинг для дітей')}
            </Link>
            <Link
              className={s.topicLink}
              theme="clean"
              to={siteBalletInStudio}
            >
              {t('site~Заняття в студіях')}
            </Link>
          </div>
        {/*</div>*/}
        </div>
      </LayoutContainer>
    </div>
  );
};