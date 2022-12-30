import * as React from 'react';
import { useState } from 'react';
import * as classNames from 'classnames';
import { animated, useSpring } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import * as s from './ProgressSlider.sss';

type Block = {
  title: string
  description: string
};

type ProgressSliderProps = {
  blocks: Block[]
  swiperClassName?: string
  desktopActiveBlockClassName?: string
  className?: string
};

export const ProgressSlider: React.FC<ProgressSliderProps> = ({
  blocks,
  swiperClassName,
  desktopActiveBlockClassName,
  className,
}) => {
  const [swiper, setSwiper] = useState<SwiperType>(null);
  const [activeBlock, _setActiveBlock] = useState<number>(0);

  const setActiveBlock = async (value: number) => {
    _setActiveBlock(value);
    swiper.slideTo(value);
    await progress.start({ reset: true });
  };

  const { progress } = useSpring({
    from: { progress: 0 },
    progress: 100,
    config: { duration: 7000 },
    onRest: (_, controller) => {
      const getProgressSlider  = document.getElementById('progress-slider').getBoundingClientRect().top;
      const hasVisibility = getProgressSlider < 530 && getProgressSlider > -1950;

      // No controller if reset
      if (controller) {
        setActiveBlock(
          activeBlock < blocks.length - 1
            ? hasVisibility ? activeBlock + 1 : activeBlock
            : hasVisibility ? activeBlock : 0
        );
      }
    }
  });

  return (
    <div className={classNames(s.root, className)}>
      <div id="progress-slider"  className={s.hearts}>
        {
          blocks.map(
            (_, i) => (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setActiveBlock(i)}
              >
                {
                  i === activeBlock &&
                  <defs>
                    <linearGradient
                      id={`partialHeart${i}`}
                      gradientTransform="rotate(90)"
                    >
                      <stop
                        offset="0%"
                        stop-color="#fff"
                      />
                      <animated.stop
                        offset={progress.to(p => `${100 - p}%`)}
                        stop-color="#fff"
                      />
                      <animated.stop
                        offset={progress.to(p => `${100 - p}%`)}
                        stop-color="#7A4694"
                      />
                      <stop
                        offset="100%"
                        stop-color="#7A4694"
                      />
                    </linearGradient>
                  </defs>
                }
                <path
                  d="M1.29845 9.42386C0.492995 7.44779 -0.628895 5.08208 0.435462 2.99468C2.79431 -1.62542 7.48323 1.24127 10.1585 3.60698C9.89961 3.38433 16.6022 -3.54583 19.4213 2.41021C22.4705 8.89505 12.69 16.8272 8.25992 20C5.46958 17.1055 2.76554 13.1255 1.29845 9.42386Z"
                  fill={
                    i === activeBlock
                      ? `url(#partialHeart${i})`
                      : '#fff'
                  }
                />
              </svg>
            )
          )
        }
      </div>

      <div className={s.desktopBlocks}>
        {
          blocks.map(
            (block, i) => {
              return (
                <div
                  className={classNames(
                    s.desktopBlock,
                    { [s.active]: i === activeBlock },
                    { [desktopActiveBlockClassName]: i === activeBlock }
                  )}
                  onClick={() => setActiveBlock(i)}
                >
                  <div className={s.progressBar}>
                    {
                      i === activeBlock &&
                      <animated.div
                        className={s.progressLine}
                        style={{ bottom: progress.to(p => `${100 - p}%`) }}
                      />
                    }
                  </div>

                  <div className={classNames(s.title, { [s.active]: i === activeBlock })}>{block.title}</div>
                  <div
                    className={classNames(s.description, { [s.active]: i === activeBlock })}
                  >
                    {block.description}
                  </div>
                </div>
              );
            }
          )
        }
      </div>

      <Swiper
        className={classNames(s.mobileBlocks, swiperClassName)}
        onSwiper={setSwiper}
        onSlideChange={() => setActiveBlock(swiper.activeIndex)}
        slidesPerView="auto"
        centeredSlides={true}
      >
        {
          blocks.map(
            (block, i) => (
              <SwiperSlide key={i} className={s.mobileBlock}>
                <div className={s.title}>{block.title}</div>
                <div className={s.description}>
                  {block.description}
                </div>
              </SwiperSlide>
            )
          )
        }
      </Swiper>
    </div>
  );
};