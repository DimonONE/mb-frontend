import * as React from 'react';
import { useParams } from 'react-router-dom';

import { BasePage } from '@components/news/BasePage';
import { NewsCategoryPageContainer } from '@containers/news/NewsCategoryPageContainer';

import * as s from './NewsCategoryPage.sss';

type RouteParams = {
  categorySlug?: string
};

export const NewsCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<RouteParams>();

  if (!categorySlug) {
    throw new Error('Empty categorySlug');
  }

  return (
    <BasePage>
      <NewsCategoryPageContainer className={s.pageTitle} slug={categorySlug}/>
    </BasePage>
  );
};

export default NewsCategoryPage;