import * as React from 'react';
import { useTranslation } from 'react-i18next';

import LocationIcon from '@static/svg/location.svg';
import PhoneIcon from '@static/svg/phoneTop.svg';
import TimeIcon from '@static/svg/time.svg';
import { phoneNumber, phoneNumberToCall } from '@constants';

import * as s from './HallDetails.sss';

type Hall = {
  name: string
  city: string
  street: string
  number: string
  about?: string
  howToFind?: string
}

type HallDetailsProps = {
  hall: Hall
  className?: string
}

export const HallDetails: React.FC<HallDetailsProps> = ({
  hall,
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className={s.title}>{t('site~Студія')} {hall.name}</div>

      {hall.about &&
        <>
          <div className={s.subTitle}>{t('site~Про студію')}</div>
          <div className={s.contentBlock}>
            {hall.about}
          </div>
        </>
      }

      {hall.howToFind &&
        <>
          <div className={s.subTitle}>{t('site~Як дістатися')}</div>
          <div className={s.contentBlock}>
            {hall.howToFind}
          </div>
        </>
      }

      <div className={s.subTitle}>{t('site~Контакти')}</div>
      <div className={s.contacts}>
        <div className={s.infoCard}>
          <div className={s.infoCardIcon}>
            <LocationIcon className={s.icon} />
          </div>
          <div className={s.infoCardRightSide}>
            <div className={s.infoCardTitle}>{t('site~Адреса')}</div>
            <div className={s.infoCardValue}>{hall.street}, {hall.number}</div>
          </div>
        </div>

        <a href={phoneNumberToCall} className={s.infoCard}>
          <div className={s.infoCardIcon}>
            <PhoneIcon className={s.icon} />
          </div>
          <div className={s.infoCardRightSide}>
            <div className={s.infoCardTitle}>{t('site~Телефон')}</div>
            <div className={s.infoCardValue}>{phoneNumber}</div>
          </div>
        </a>

        <div className={s.infoCard}>
          <div className={s.infoCardIcon}>
            <TimeIcon className={s.icon} />
          </div>
          <div className={s.infoCardRightSide}>
            <div className={s.infoCardTitle}>{t('site~Час работи')}</div>
            <div className={s.infoCardValue}>{t('site~З 09:00 до 21:00')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}