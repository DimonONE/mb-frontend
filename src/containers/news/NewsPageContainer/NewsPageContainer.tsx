import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ArticlesCardGroup } from '@components/news/ArticlesCardGroup';
import { NewsPageFilter } from '@components/news/NewsPageFilter';
import { useNewsPageQuery } from '@graphql';

import * as s from './NewsPageContainer.sss';

type NewsPageContainerProps = {
  className?: string
};

const pageTitle = 'Блог';
const subTitle = 'Новини нашої студії, балетні історії та заходи';

export const NewsPageContainer: React.FC<NewsPageContainerProps> = ({
  className,
}) => {
  const { loading, data, error } = useNewsPageQuery();

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const news = data.newsCategories.edges.map(
    ({ node }) => (node)
  );
  
  return (
    <div className={s.root}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={subTitle}
       />
      </Helmet>
      <NewsPageFilter />
      <ArticlesCardGroup news={news} />
    </div>
  );
};