import * as React from 'react';
import * as classNames from 'classnames';

import { ArticleCard } from '@components/news/ArticleCard';

import * as s from './ArticlesOfCategory.sss';

type Article = {
  id: number
  slug: string
  title: string
  thumbnail: string
  createdAt: string
};

type Category = {
  name: string
  description: string
  slug: string
  id: number
};

type ArticlesOfCategoryProps = {
  className?: string
  category: Category
  articles: Article[],
  onRequestLoadMore: () => void
  canLoadMore: boolean
};

export const ArticlesOfCategory: React.FC<ArticlesOfCategoryProps> = ({
  className,
  category,
  articles,
  onRequestLoadMore,
  canLoadMore
}) => {
  return (
    <div className={classNames(s.root, className)}>
      <div className={s.articleGroup}>
        <div className={s.articles}>
          {articles.map((article, index) => (
            <ArticleCard
              theme={'primary'}
              id={article.id}
              title={article.title}
              createdAt={article.createdAt}
              thumbnail={article.thumbnail}
              slug={article.slug}
              className={s.article}
              key={article.id}
              categorySlug={category.slug}
              orangeFilter={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      {
        canLoadMore && 
        <button onClick={onRequestLoadMore} className={s.showMoreButton}>
          Показати більше
        </button>
      }
    </div>
  );
};