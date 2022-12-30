import * as React from 'react';
import * as classNames from 'classnames';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useDesktopOrWider } from '@utils/mediaQuery';
import { ArticleCard } from '@components/news/ArticleCard';
import { newsPageCategory } from '@urls';

import * as s from './ArticlesCardGroup.sss';

type Article = {
  id: number
  slug: string
  title: string
  thumbnail: string
  createdAt: string
  theme?: 'primary' | 'compact' | 'wideImage'
};

type NewsArticle = {
  slug: string
  name: string
  lastArticles: Article[]
};

type ArticlesCardGroupProps = {
  className?: string
  news: NewsArticle[]
};

const articlesThemesGrid: Article['theme'][][] = [
  ['primary', 'primary', 'primary'],
  ['compact', 'wideImage', 'compact'],
  ['compact', 'compact', 'compact', 'compact'],
];

const getGroupLength = (
  groupNumber: number,
  lastArticles: Article[],
  isDesktop: boolean
): Article[] => {
  if (!isDesktop) {
    return lastArticles.slice(0, 1);
  }
  return lastArticles.slice(0, articlesThemesGrid[groupNumber % articlesThemesGrid.length].length);
};

const getArticleTheme = (
  groupNumber: number,
  groupLength: number,
  articleNumber: number,
  isDesktop: boolean
): Article['theme'] => {
  if (!isDesktop) {
    return 'primary';
  }
  const lineTheme = articlesThemesGrid[groupNumber % articlesThemesGrid.length];

  // If group length enough to fulfill themed line, apply theme from grid
  if (groupLength >= lineTheme.length) {
    return lineTheme[articleNumber] || 'primary';
  }

  // If not enough to fulfill line, return 'primary' as default theme
  return 'primary';
};

export const ArticlesCardGroup: React.FC<ArticlesCardGroupProps> = ({
  className,
  news
}) => {

  const isDesktopOrWider = useDesktopOrWider();
console.log('news', news);

  return (
  <div className={classNames(s.root, className)}>
    {news.map((group, index) => {
      const articles = getGroupLength(index, group.lastArticles, isDesktopOrWider);
      return (
      <div className={s.articleGroup} key={group.name}>
        <div className={s.titleAndButton}>
          <h2 className={s.title}>{group.name}</h2> 
          {isDesktopOrWider &&
            <Link to={generatePath(newsPageCategory, { categorySlug: group.slug })} className={s.button}>
              Смотреть все
            </Link>}
        </div>
        <div className={s.articles}>
          {articles.map((article, articleIndex) => {
            const theme = getArticleTheme(index, articles.length, articleIndex, isDesktopOrWider);
            return (
              <ArticleCard
                theme={theme}
                id={article.id}
                title={article.title}
                createdAt={article.createdAt}
                thumbnail={article.thumbnail}
                slug={article.slug}
                className={s.article}
                key={article.id}
                categorySlug={group.slug}
                orangeFilter={articleIndex % 2 !== 0}
              />
            );
          })}
        </div>
        {!isDesktopOrWider &&
          <Link to={generatePath(newsPageCategory, { categorySlug: group.slug })} className={s.button}>
            Показати більше
          </Link>}
      </div>
    ); })}
  </div>
  );
};
