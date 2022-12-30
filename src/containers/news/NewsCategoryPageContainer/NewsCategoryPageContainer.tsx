import * as React from 'react';
import { Helmet } from 'react-helmet';

import { MainPageTitle } from '@components/news/MainPageTitle';
import { ArticlesOfCategory } from '@components/news/ArticlesOfCategory';

import { useNewsCategoryPageQuery, useNewsCategoryPageArticlesQuery } from '@graphql';

type NewsCategoryPageContainerProps = {
  slug: string
  className?: string
  after?: string
};

const first = 30;

export const NewsCategoryPageContainer: React.FC<NewsCategoryPageContainerProps> = ({
  className,
  slug,
  after
}) => {
  const { loading, data, error } = useNewsCategoryPageQuery({
    variables: { slug }
  });

  const {
    loading: articlesLoading,
    data: articlesData,
    error: articlesError,
    fetchMore
  } = useNewsCategoryPageArticlesQuery({
    variables: { slug, first, after }
  });

  if (loading || articlesLoading) {
    return <div className={className}>Loading...</div>;
  }

  if (error || articlesError) {
    throw error;
  }

  if (!articlesData || !articlesData) {
    throw new Error('Empty error');
  }

  const { newsCategory } = data;
  const articles = articlesData.articles.edges.map(
    ({ node }) => (node)
  );

  const onRequestLoadMore = async () => {
    await fetchMore({
      variables: {
        first,
        after: articlesData.articles.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const moreArticles = fetchMoreResult.articles;
        return {
          articles: {
            edges: [
              ...previousResult.articles.edges,
              ...moreArticles.edges
            ],
            pageInfo: moreArticles.pageInfo,
            __typename: moreArticles.__typename,
          }
        };
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>{newsCategory.meta.title}</title>
        <meta
          name="description"
          content={newsCategory.meta.description}
       />
      </Helmet>
      <ArticlesOfCategory 
        category={newsCategory} 
        articles={articles} 
        onRequestLoadMore={onRequestLoadMore} 
        canLoadMore={articlesData.articles.pageInfo.hasNextPage}
      />
    </div>
  );
};