import * as React from 'react';
import * as classNames from 'classnames';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as s from './TeachersSlider.sss';

export type TeacherInfo = {
  avatar: {
    x1: string
    x2: string
  }
  name: string
  position: string
  quote: string
};

type TeachersSliderProps = {
  teachersInfo: TeacherInfo[]
  className?: string
};

SwiperCore.use([Navigation]);

export const TeachersSlider: React.FC<TeachersSliderProps> = ({
  teachersInfo,
  className
}) => {

  return (
    <div className={classNames(s.root, className)}>
      <Swiper
        navigation={true}
        slidesPerView="auto"
        spaceBetween={15}
        centeredSlides={true}
        breakpoints={{
          1280: {
            centeredSlides: false,
            slidesPerView: 4
          }
        }}
      >
        {
          teachersInfo.map(
            ({ avatar, name, position, quote }, i) => (
              <SwiperSlide key={i} className={s.slide}>
                <img
                  className={classNames(s.avatar, 'lazyload')}
                  data-srcset={`${avatar.x1} 1x, ${avatar.x2} 2x`}
                />

                <div className={s.name}>{name}</div>
                <div className={s.position}>{position}</div>
                <div className={s.quote}>{quote}</div>
              </SwiperSlide>
            )
          )
        }
      </Swiper>
    </div>
  );
};