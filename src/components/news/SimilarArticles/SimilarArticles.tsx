import * as React from 'react';
import * as classNames from 'classnames';

import { useDesktopOrWider } from '@utils/mediaQuery';
import { ArticleCard } from '@components/news/ArticleCard';

import * as s from './SimilarArticles.sss';

type SimilarArticle = {
  id: number
  title: string
  thumbnail: string
  createdAt: string
  slug: string
  category: {slug: string}
};

type SimilarArticlesProps = {
  className?: string
  similarArticles: SimilarArticle[]
};

export const SimilarArticles: React.FC<SimilarArticlesProps > = ({
  className,
  similarArticles
}) => {
  const isDesktopOrWider = useDesktopOrWider();

  return (
    <div className={classNames(s.root, className)}>
    <div className={s.title}><span>Вам также можеть быть интересно:</span></div>
    <div className={s.articles}>
      {similarArticles.map((article, index) => (
        <div className={s.article} key={article.id}>
          <ArticleCard 
            theme={isDesktopOrWider ? 'compact' : 'primary'} 
            id={article.id} 
            title={article.title} 
            createdAt={article.createdAt} 
            thumbnail={article.thumbnail} 
            slug={article.slug} 
            className={s.article}
            categorySlug={article.category.slug}
            orangeFilter={index % 2 !== 0}
          />
        </div>
      ))}
    </div>
  </div>
  );
};