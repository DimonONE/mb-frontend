import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { JumbotronLayout } from '@components/site/JumbotronLayout'
import ArrowLeftIcon from '@svg/arrowLeftThin.svg';
import { useNewsPageQuery } from '@graphql';

import * as s from './NewsCategoriesHeader.sss';

type RouteParams = {
  categorySlug?: string
};


export const NewsCategoriesHeader = () => {
  const history = useHistory();
  const {t} = useTranslation();

  const { categorySlug } = useParams<RouteParams>();
  const { loading, data, error } = useNewsPageQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty error');
  }

  const news = data.newsCategories.edges
                .map(({ node }) => (node))
                .filter( n => n.slug === categorySlug );

                console.log('data', data);
                
  return (
    <JumbotronLayout
      title={t(`news~${ news[0].name }`)}
      description={t('news~Новини нашої студії, балетні історії та заходи')}
    > 
      <div className={s.backButton} onClick={() => history.goBack()}>
        <ArrowLeftIcon className={s.arrow} />
        <span>Назад</span>
      </div>
    </JumbotronLayout>
  )
}
