import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Article } from '@components/news/Article';
import { SimilarArticles } from '@components/news/SimilarArticles';

import { useNewsArticlePageQuery } from '@graphql';

type NewsArticlePageContainerProps = {
  className?: string
  id: number
};

export const NewsArticlePageContainer: React.FC<NewsArticlePageContainerProps> = ({
  className,
  id,
}) => {

  const { loading, data, error } = useNewsArticlePageQuery({
    variables: { id }
  });

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const { article } = data;

  return (
    <div>
      <Helmet>
        <title>{article.meta.title}</title>
        <meta
          name="description"
          content={article.meta.description}
       />
      </Helmet>
      <Article article={article} category='Про балет' />
      {article.similarArticles.length ?
        <SimilarArticles similarArticles={article.similarArticles}/>
        : null
      }
    </div>
  );
};