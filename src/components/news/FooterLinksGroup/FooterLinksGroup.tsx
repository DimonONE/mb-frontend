import * as React from 'react';
import * as classNames from 'classnames';

import {
  mainPage,
  mainAboutUsHash,
  mainScheduleHash,
  mainPricesHash,
  mainGalleryHash,
  mainReviewsHash,
  mainNewsHash,
  mainQAHash,
  mainPromotionsHash
} from '@urls';

import * as s from './FooterLinksGroup.sss';

type FooterLinksGroupProps = {
  className?: string
};

export const FooterLinksGroup: React.FC<FooterLinksGroupProps> = ({
  className
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.group}>
      <a
        className={s.link}
        href={mainPage + mainAboutUsHash}
      >
        О нас
      </a>
      <a
        className={s.link}
        href={mainPage + mainScheduleHash}
      >
        Расписание
      </a>
      <a
        className={s.link}
        href={mainPage + mainPricesHash}
      >
        Ценовая политика
      </a>
    </div>
    <div className={s.group}>
      <a
        className={s.link}
        href={mainPage + mainGalleryHash}
      >
        Галерея
      </a>
      <a
        className={s.link}
        href={mainPage + mainReviewsHash}
      >
        Отзывы
      </a>
      <a
        className={s.link}
        href={mainPage + mainNewsHash}
      >
        Новости
      </a>
    </div>
    <div className={s.group}>
      <a
        className={s.link}
        href={mainPage + mainQAHash}
      >
        Вопросы
      </a>
      <a
        className={s.link}
        href="#"
      >
        Личный кабинет
      </a>
      <a
        className={s.link}
        href={mainPage + mainPromotionsHash}
      >
        Условия акций
      </a>
    </div>
  </div>
);
