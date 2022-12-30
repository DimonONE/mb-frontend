import * as React from 'react';
import * as classNames from 'classnames';
import { Trans, useTranslation } from 'react-i18next';

import { Link } from '@components/ui/Link';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { newsPage } from '@urls';
import BlogBlockImage1 from '@static/img/blog-block-1-min.png';
import BlogBlockImage2 from '@static/img/blog-block-2-min.png';
import BlogBlockImage3 from '@static/img/blog-block-3-min.png';
import BlogBlockImage4 from '@static/img/blog-block-4-min.png';
import BlogBlockImage5 from '@static/img/blog-block-5-min.png';
import BlogBlockImage6 from '@static/img/blog-block-6-min.png';
import BlogBlockImageMobile1x1 from '@static/img/blog-block-mobile-1-1x-min.png';
import BlogBlockImageMobile2x1 from '@static/img/blog-block-mobile-1-2x-min.png';
import BlogBlockImageMobile1x2 from '@static/img/blog-block-mobile-2-1x-min.png';
import BlogBlockImageMobile2x2 from '@static/img/blog-block-mobile-2-2x-min.png';
import BlogBlockImageMobile1x3 from '@static/img/blog-block-mobile-3-1x-min.png';
import BlogBlockImageMobile2x3 from '@static/img/blog-block-mobile-3-2x-min.png';
import BlogBlockImageMobile1x4 from '@static/img/blog-block-mobile-4-1x-min.png';
import BlogBlockImageMobile2x4 from '@static/img/blog-block-mobile-4-2x-min.png';
import BlogBlockImageMobile1x5 from '@static/img/blog-block-mobile-5-1x-min.png';
import BlogBlockImageMobile2x5 from '@static/img/blog-block-mobile-5-2x-min.png';
import BlogBlockImageMobile1x6 from '@static/img/blog-block-mobile-6-1x-min.png';
import BlogBlockImageMobile2x6 from '@static/img/blog-block-mobile-6-2x-min.png';

import * as s from './IndexBlogBlock.sss';

type IndexBlogBlockProps = {
  className?: string
};

const IMAGES = [
  {
    mobile: {
      x1: BlogBlockImageMobile1x1,
      x2: BlogBlockImageMobile2x1,
    },
    desktop: {
      x1: BlogBlockImage1,
      x2: BlogBlockImage1,
    },
  },
  {
    mobile: {
      x1: BlogBlockImageMobile1x2,
      x2: BlogBlockImageMobile2x2,
    },
    desktop: {
      x1: BlogBlockImage2,
      x2: BlogBlockImage2,
    },
  },
  {
    mobile: {
      x1: BlogBlockImageMobile1x3,
      x2: BlogBlockImageMobile2x3,
    },
    desktop: {
      x1: BlogBlockImage3,
      x2: BlogBlockImage3,
    },
  },
  {
    mobile: {
      x1: BlogBlockImageMobile1x4,
      x2: BlogBlockImageMobile2x4,
    },
    desktop: {
      x1: BlogBlockImage4,
      x2: BlogBlockImage4,
    },
  },
  {
    mobile: {
      x1: BlogBlockImageMobile1x5,
      x2: BlogBlockImageMobile2x5,
    },
    desktop: {
      x1: BlogBlockImage5,
      x2: BlogBlockImage5,
    },
  },
  {
    mobile: {
      x1: BlogBlockImageMobile1x6,
      x2: BlogBlockImageMobile2x6,
    },
    desktop: {
      x1: BlogBlockImage6,
      x2: BlogBlockImage6,
    },
  },
];

export const IndexBlogBlock: React.FC<IndexBlogBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>
          <Trans ns="student">
            {t('site~Поринь у світ балету і стань частиною')}
            {' '}
            <Link to={newsPage} className={s.link}>Mary Ballet Family</Link>
          </Trans>
        </div>

        <div className={s.images}>
          {
            IMAGES.map(
              (src, i) => (
                <picture className={s.picture}>
                  <source
                    media="(min-width: 1268px)"
                    data-srcset={`${src.desktop.x1} 1x, ${src.desktop.x2} 2x`}
                  />
                  <source
                    media="(max-width: 1268px)"
                    data-srcset={`${src.mobile.x1} 1x, ${src.mobile.x2} 2x`}
                  />
                  <img
                    className={classNames(s.image, 'lazyload', 'lazypreload')}
                    data-src={src.desktop.x1}
                    alt="..."
                  />
                </picture>
              )
            )
          }
        </div>
      </LayoutContainer>
    </div>
  );
};