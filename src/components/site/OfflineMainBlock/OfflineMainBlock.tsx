import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { trialLessonModalHash } from '@urls';
import { Link } from '@components/ui/Link';
import { Button } from '@components/student/Button';
import { NavBarContainer } from '@containers/student/NavBar';
import { LayoutContainer } from '@components/student/LayoutContainer';
import IndexMainImageMobile380 from '@static/img/offline-landing/main-block-380w-2x-min.jpg';
import IndexMainImageMobile420 from '@static/img/offline-landing/main-block-420w-2x-min.jpg';
import IndexMainImageDesktop1x from '@static/img/offline-landing/main-block-1x-min.jpg';
import IndexMainImageDesktop2x from '@static/img/offline-landing/main-block-2x-min.jpg';
// import Students from '@static/img/online-landing/students-min.png';

import * as s from './OfflineMainBlock.sss';

type OfflineMainBlockProps = {
  className?: string
};

export const OfflineMainBlock: React.FC<OfflineMainBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <NavBarContainer
        position="fixed"
        theme="bright"
      />

      <LayoutContainer className={s.layout}>
        <div className={s.desktopInlineGroup}>
          <div className={s.titleGroup}>
            <div className={s.title}>
              {t('site~Заняття в студіях Mary Ballet')}
            </div>
            <div className={s.subtitle}>{t('site~Пробне заняття всього 100 грн')}</div>

            <Link theme="clean" to={trialLessonModalHash}>
              <Button
                className={classNames(s.button, s.desktopOnly)}
                theme="primaryOrange"
                size="L"
              >
                {t('site~Спробувати')}
              </Button>
            </Link>
          </div>

          <div className={s.imageOuter}>
            <picture>
              <source
                data-srcset={`${IndexMainImageDesktop1x} 1x, ${IndexMainImageDesktop2x} 2x`}
                media="(min-width: 1268px)"
              />
              <source
                data-srcset={`${IndexMainImageMobile380} 760w, ${IndexMainImageMobile420} 840w, ${IndexMainImageDesktop2x} 1750w`}
                media="(max-width: 1268px)"
              />
              <img
                className={classNames(s.image, 'lazyload')}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIAw0DawMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAgBAQAAAADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmdUAAAAAAAAAAAAAAAAAJjlO+wADHOY36AAAAAAAAAAAAAA1tMeXHroAHDGa6b3QAAAAAAABRAAAAN3h0cOG/UADnxTffesQAAAAAAAAKgAAADHbhrpjyT16ADhnLt3ztgAAAAAAAAKgAAAGjUk4cvRsAPO59fVMdGAAAAAAAAAAAAAHRIJy3QBy4euO057kAAABEtAAAAAAAAG2LbJ5+4AebHq6VEuQAAAkLQAAAAAAABreZDzu4AcvP19VZTeAAAASNAAAAAAAAA1Jk8/poAOefRqSLkAAACKAAAAAAAAB14t4oABNoVkAAAAAAAAAAAAAdcLmAAF3mVkAAAAAAAAAAAAAHXNyyAAbubrkAAAAAAAAAAAAAWy7iJNMAC7k1riAAAAAAAAAAAAAvaiIU54A3YLeaAAAAAAAAAAAAC9NhBBWOYbpFUmZAAAAAAAAAAAAO9FiAJeWTesqFqSZgAAAAAAAAAAAa7wBAIzzOjM0pSsMAAAAAAAAAAAB12sBAIcl0xLaWlkxABS5AAAAAAAAAd6sCAEcW15zS1aViZAGxmAAAAAAAAAemCADNJzaOTVW1SzOABqmAAAAAAAAANd5cxRFObVxmyuTdGrS4vMANswAAAAABKlAA6dJcxRFXk1cS46Z5zpRdUvLeIAKgAAAAABkWgA73KCyJdXnnd5k6c8Teg1ovG3IAAAAAAABkWgBeyYuhGV1eU1cJtymemhdVXn3cgAAAAAAAEhoAHczi6VEVeTTK7xyk3srVHDW8AAAAAAAACS0AN9Ik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"
                alt="..."
              />
            </picture>
          </div>

          <Link theme="clean" to={trialLessonModalHash}>
            <Button
              className={classNames(s.button, s.mobileOnly)}
            >
              {t('site~Спробувати')}
            </Button>
          </Link>
        </div>

        <div className={s.firstTextBlock}>{t('site~Відкривай світ балету разом з нами!')}</div>
        <div className={s.secondTextBlock}>{t('site~Під наглядом професійного педагога в реальному часі')}</div>
        <div className={s.thirdTextBlock}>
          {/*<div className={s.statValue}>400+</div>*/}
          <div className={s.statName}>{t('site~Твій досвід, вік та вага не важливі')}</div>
          {/*<img*/}
          {/*  className={classNames(s.statImage, 'lazyload')}*/}
          {/*  data-src={Students}*/}
          {/*  width={180}*/}
          {/*  height={40}*/}
          {/*/>*/}
        </div>
      </LayoutContainer>
    </div>
  );
};
