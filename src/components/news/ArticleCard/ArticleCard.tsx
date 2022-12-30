import * as React from 'react';
import * as classNames from 'classnames';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import { newsPageArticle } from '@urls';

import * as s from './ArticleCard.sss';

type ArticleCardProps = {
  className?: string
  theme: 'primary' | 'compact' | 'wideImage'
  id: number
  title: string
  createdAt: string
  thumbnail: string
  slug: string
  categorySlug: string
  orangeFilter: boolean
};

export const ArticleCard: React.FC<ArticleCardProps > = ({
  className,
  theme,
  title,
  createdAt,
  thumbnail,
  slug,
  categorySlug,
  id,
  orangeFilter,
}) => {
  
 return(
  <Link
    className={classNames(s.root, className, s[theme])}
    to={
      generatePath(
        newsPageArticle,
        {
          categorySlug,
          articleSlug: slug,
          articleId: id
        }
      )
    }
  >
    <div className={s.imageContainer}>
      <img
        className={classNames(s.image, 'lazyload', 'lazypreload')}
        data-src={thumbnail}
        alt={title}
      />
      <div className={classNames(s.imageFiltes, {[s.orange]: orangeFilter})} />
    </div>
    <div className={s.description}>
      <span className={s.title}>
        {title}
      </span>
      <div className={s.data}>{dayjs(createdAt).format('DD MMMM YYYY')}</div>
    </div>
  </Link>
)};