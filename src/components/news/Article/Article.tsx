import * as React from 'react';
import * as classNames from 'classnames';

import dayjs from 'dayjs';
import FacebookIcon from '@svg/facebook.svg';
import InstagramIcon from '@svg/instagram.svg';
import {
  facebookLink,
  instagramLink
} from '@constants';

import * as s from './Article.sss';

type ArticleTag = {
  id: number
  slug: string
  name: string
};

type ArticleMeta = {
  description?: string
  title?: string
};

type Article = {
  id: number
  title: string
  image: string
  createdAt: string
  content: string
  author: string
  tags: ArticleTag[]
  slug: string
  meta: ArticleMeta
};

type ArticleProps = {
  className?: string
  article: Article,
  category: string
};

export const Article: React.FC<ArticleProps > = ({
  className,
  article,
  category
}) => {

  return (
  <div className={classNames(s.root, className)}>
    <div className={s.mainContent}>
      <div className={s.header}>
        <div className={s.category}>{category}</div>
        <div className={s.title}>{article.title}</div>
        <div className={s.description}>
          {article.meta.description}
        </div>
        <div className={s.data}>
          {`${dayjs(article.createdAt).format('DD MMMM YYYY')}`}
        </div>
      </div>
      <div className={s.description} dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
    <div className={s.nameAndShare}>
      <div className={s.name}>{article.author}</div>
      <div className={s.share}>
        Поделиться 
        <a
          className={s.socialLink}
          href={facebookLink}
          target="_blank"
        >
          <FacebookIcon className={s.socialIcon} />
        </a>
        <a
          className={s.socialLink}
          href={instagramLink}
          target="_blank"
        >
          <InstagramIcon className={s.socialIcon} />
        </a>
      </div>
    </div>
    <div className={s.tags}>
      {article.tags.map(tag => (
        <div key={tag.name} className={s.tag}>{tag.name}</div>
      ))}
    </div>
  </div>
  );
};