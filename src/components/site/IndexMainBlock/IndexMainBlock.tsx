import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import IndexMainImageMobile380 from '@static/img/index-block-main-mobile-380w-2x-min.jpg';
import IndexMainImageMobile420 from '@static/img/index-block-main-mobile-420w-2x-min.jpg';
import IndexMainImageMobile945 from '@static/img/index-block-main-mobile-945w-2x-min.jpg';
import IndexMainImageDesktop from '@static/img/index-block-main-desktop-min.jpg';
import { Button } from '@components/student/Button';
import { NavBarContainer } from '@containers/student/NavBar';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { Link } from '@components/ui/Link';
import { trialLessonModalHash } from '@urls';

import * as s from './IndexMainBlock.sss';

type IndexMainBlockProps = {
  className?: string
};

export const IndexMainBlock: React.FC<IndexMainBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <NavBarContainer
        position="fixed"
        theme="primary"
      />

      <LayoutContainer className={s.layout}>
        <div className={s.desktopInlineGroup}>
          <div className={s.titleGroup}>
            <div className={s.title}>
              {t('site~Балет для дорослих')}
            </div>
            <div className={s.subtitle}>{t('site~Закохайся в балет разом з нами!')}</div>
            <Link theme="clean" to={trialLessonModalHash}>
              <Button
                className={classNames(s.button, s.desktopOnly)}
                size="L"
              >
                {t('site~Записатися')}
              </Button>
            </Link>
          </div>

          <div className={s.imageOuter}>
            <picture>
              <source
                data-srcset={IndexMainImageDesktop}
                media="(min-width: 1268px)"
              />
              <source
                data-srcset={`${IndexMainImageMobile380} 760w, ${IndexMainImageMobile420} 840w, ${IndexMainImageMobile945} 1890w`}
                media="(max-width: 1268px)"
              />
              <img
                className={classNames(s.image, 'lazyload')}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIAs8C+AMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/2gAIAQEAAAAA7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASaAAAAAAAAAAAAAAAnlxjp6tgAAAAAAAAAFBAAAHIxzenYAAAAAAAABQCc+TvoAARWM8evYAAAAAAAACgCebrrnx9OwACW557476gAAAAAAAAUAcdasxx9YgAOO5npjegAAAAAAABQAI5dZOHqQABGNUoAAAAAAAFAAFkzy3y9QgADF1KAAAAAAABQAA1mYcunUIADMupQAAAAAAAoAAGpyJ1AgAIUAAAAAAAAUABbOcboEACWKAAAAAAACgAA1HGdLQEAGNpFoAAAAAAKAAA1qZxM26UEDJQylrQAAAAACgAAtqyYjWplQQkKIhVUAAAAAKAADaKTJqzMogCBAVQAAAAAFAANamdCSaQyohKJACqAAAAABQAB0TOlklZLlUGbREVC3NoAAAAAKAAa3MzQiEy1mg57TcQItznWgAAAAAoAA3ZmapEROe6DOOmc9ogJdcLrVAAAAAKAALtMZ61CJJhsHG75dNkBLvnz1dgAAAAFAAGt5mHUhEyznVVONO0AJq5znWwAAAACgADdmcOtSEZkk1a5Z06M3SCNyObegAAAAKAAHRnGXWpCMoai8N9C557oS6kZ576AAAAAKAAOsxM530SCZNJleF6ydZjG9EXWSc99IAAAAKAAC9JzMzeiQJIm3nzve5MzW0KGG9QAAAAKAAGtzmMtgsxJJrYM4uXSoUYmtgAAAAUAANbnMM6uY1Zyy1eHo0GIxrQNGF2AAAABQAAXbmEbEmC8+E6+gZgJIb1hrQAAAACgAAbYBm7Zkms+fmu++zAIhN3OtAAAAAFAAA2xKGLqJjjiGt67sBBEXdoAAAAAoAAF3jGg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"
                alt="..."
              />
            </picture>
          </div>
        </div>

        <Link theme="clean" to={trialLessonModalHash}>
          <Button
            className={classNames(s.button, s.mobileOnly)}
          >
            {t('site~Записатися')}
          </Button>
        </Link>

        <div className={s.stats}>
          <div className={s.stat}>
            <div className={s.statValue}>5000+</div>
            <div className={s.statName}>{t('site~учениць в студії')}</div>
          </div>

          <div className={s.stat}>
            <div className={s.statValue}>1000+</div>
            <div className={s.statName}>{t('site~учениць онлайн')}</div>
          </div>

          <div className={s.stat}>
            <div className={s.statValue}>7</div>
            <div className={s.statName}>{t('site~локацій в Києві')}</div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};