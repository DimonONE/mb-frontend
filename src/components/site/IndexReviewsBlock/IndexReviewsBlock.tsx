import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { Card } from '@components/ui/Card';
import { Link } from '@components/ui/Link';
import InstagramIcon from '@static/svg/instagramTop.svg';
import StarIcon from '@static/svg/star.svg';
import { instagramLink } from '@constants';

import { useTranslatedReviews } from './constants';
import * as s from './IndexReviewsBlock.sss';

type IndexReviewsBlockProps = {
  className?: string
};

export const IndexReviewsBlock: React.FC<IndexReviewsBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const reviews = useTranslatedReviews(t);

  const cards = reviews.map(
    ({ name, instagram, image, text }, i) => (
      <SwiperSlide key={i} className={s.slide}>
        <Card className={s.card}>
          <div className={s.cardHead}>
            <div className={s.avatarOuter}>
              <img
                className={s.avatar}
                src={image}
                alt="..."
              />
            </div>
            <div className={s.userInfo}>
              <div className={s.name}>{name}</div>
              <Link className={s.instagram} href={instagram}>
                <InstagramIcon className={s.instagramIcon}/>
                {instagram.slice(instagram.lastIndexOf('/') + 1)}
              </Link>
              <div className={s.stars}>
                {
                  Array.from(
                    { length: 5 },
                    (_, i) => <StarIcon key={i} className={s.starIcon} />
                  )
                }
              </div>
            </div>
          </div>
          <div>{text}</div>
        </Card>
      </SwiperSlide>
    ),
  );

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.title}>{t('site~Нам довіряють свої мрії')}</div>

      <LayoutContainer className={s.desktopCards}>
        {cards}
      </LayoutContainer>

      <Swiper
        className={s.swiper}
        slidesPerView="auto"
        spaceBetween={10}
        centeredSlides={true}
      >
        {cards}
      </Swiper>

      <div className={s.learnMore}>
        {t('site~Дізнайся більше про нас в Instagram')}
        {' '}
        <Link target="_blank" href={instagramLink}>mary.ballet.kyiv</Link>
      </div>
    </div>
  );
};