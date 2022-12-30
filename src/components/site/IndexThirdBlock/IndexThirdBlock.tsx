import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';

import { LayoutContainer } from '@components/student/LayoutContainer';
import ThirdBlockFirstImage1 from '@static/img/third-block-first-slide-1x-min.png';
import ThirdBlockFirstImage2 from '@static/img/third-block-first-slide-2x-min.png';
import ThirdBlockSecondImage1 from '@static/img/third-block-second-slide-1x-min.png';
import ThirdBlockSecondImage2 from '@static/img/third-block-second-slide-2x-min.png';
import ThirdBlockThirdImage1 from '@static/img/third-block-third-slide-1x-min.png';
import ThirdBlockThirdImage2 from '@static/img/third-block-third-slide-2x-min.png';
import ThirdBlockFirstImageDesktop1 from '@static/img/third-block-first-screen-1x-min.png';
import ThirdBlockFirstImageDesktop2 from '@static/img/third-block-first-screen-2x-min.png';
import ThirdBlockSecondImageDesktop1 from '@static/img/third-block-second-screen-1x-min.png';
import ThirdBlockSecondImageDesktop2 from '@static/img/third-block-second-screen-2x-min.png';
import ThirdBlockThirdImageDesktop1 from '@static/img/third-block-third-screen-1x-min.png';
import ThirdBlockThirdImageDesktop2 from '@static/img/third-block-third-screen-2x-min.png';

// install Swiper modules
SwiperCore.use([Pagination]);

import * as s from './IndexThirdBlock.sss';

type IndexThirdBlockProps = {
  className?: string
};

type BlockProps = {
  benefit: string
  title: string
  image: {
    mobile: {
      x1: string
      x2: string
    }
    desktop: {
      x1: string
      x2: string
    }
  }
};

const Block: React.FC<BlockProps> = ({
  benefit,
  title,
  image,
  children,
}) => (
  <div className={s.block}>
    <div>
      <div className={s.benefit}>{benefit}</div>
      <div className={s.title}>{title}</div>
      <div className={s.blockContent}>
        {children}
      </div>
    </div>

    <picture>
      <source
        data-srcset={`${image.desktop.x1} 1x, ${image.desktop.x2} 2x`}
        media="(min-width: 1268px)"
      />

      <source
        data-srcset={`${image.mobile.x1} 1x, ${image.mobile.x2} 2x`}
        media="(max-width: 1268px)"
      />
      <img
        className={classNames(s.image, 'lazyload')}
        data-src={image.desktop.x1}
        alt="..."
      />
    </picture>
  </div>
);

export const IndexThirdBlock: React.FC<IndexThirdBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  const blocks = [
    <Block
      benefit={t('site~Всі рівні')}
      title={t('site~Від початківця до профі')}
      image={{
        mobile: {
          x1: ThirdBlockFirstImage1,
          x2: ThirdBlockFirstImage2,
        },
        desktop: {
          x1: ThirdBlockFirstImageDesktop1,
          x2: ThirdBlockFirstImageDesktop2,
        },
      }}
    >
      <div>
        {t('site~В нашій студії є 3 рівні складності')}
      </div>
      <div>
        <ul>
          <li>{t('site~START (якщо ти вперше знайомишся з балетом)')}</li>
          <li>{t('site~MIDDLE (ти вже добре знаєш базу і готова рухатись далі)')}</li>
          <li>{t('site~HIGH (хочеш удосконалювати техніку чи досягнути вершин балетної майстерності)')}</li>
        </ul>
      </div>
      <div>
        {t('site~Індивідуальний підхід дозволяє швидше йти до цілі, адже вся наша команда налаштована на твій результат!')}
      </div>
    </Block>,
    <Block
      benefit={t('site~Завжди цікаво')}
      title={t('site~Special івенти')}
      image={{
        mobile: {
          x1: ThirdBlockSecondImage1,
          x2: ThirdBlockSecondImage2,
        },
        desktop: {
          x1: ThirdBlockSecondImageDesktop1,
          x2: ThirdBlockSecondImageDesktop2,
        },
      }}
    >
      <div>
        {t('site~Ми регулярно проводимо тематичні майстер-класи від відомих балерин та артистів балету, організовуємо фотосесії, відвідуємо театр, влаштовуємо стретчинги на природі, лекції та кіновечори.')}
      </div>
      <div>
        {t('site~А ще ми разом їздимо в авторські тури: Mary Ballet Intensive Tour і Mary Ballet Weekend!')}
      </div>
    </Block>,
    <Block
      benefit={t('site~Балет з тобою')}
      title={t('site~Завжди поруч')}
      image={{
        mobile: {
          x1: ThirdBlockThirdImage1,
          x2: ThirdBlockThirdImage2,
        },
        desktop: {
          x1: ThirdBlockThirdImageDesktop1,
          x2: ThirdBlockThirdImageDesktop2,
        },
      }}
    >
      <div>
        {t('site~Обирай або поєднуй: заняття в балетній залі та онлайн для дому і мандрівок. У кожного формату є свої плюси. Офлайн заняття дають швидший результат і занурюють в атмосферу, а онлайн - це зручно і практично.')}
      </div>
    </Block>
  ];

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.desktop}>
        {blocks}
      </LayoutContainer>
      <Swiper
        className={s.mobile}
        pagination={{
          clickable: true
        }}
        slidesPerView={1}
      >
        {
          blocks.map(
            (block, i) => (
              <SwiperSlide key={i}>
                <LayoutContainer>
                  {block}
                </LayoutContainer>
              </SwiperSlide>
            )
          )
        }
      </Swiper>
    </div>
  );
};