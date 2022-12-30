import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NewsPageArticle } from '@pages/news/NewsPageArticle';
import { NewsCategoryPage } from '@pages/news/NewsCategoryPage';
import { NewsPage } from '@pages/news/NewsPage';
import {
  newsPage,
  newsPageArticle,
  newsPageCategory
} from '@urls';

export const NewsRoutes: React.FC = () => {

  return (
    <Switch>
      <Route
        path={newsPageArticle}
        component={NewsPageArticle}
      />
      <Route
        path={newsPageCategory}
        component={NewsCategoryPage}
      />
      <Route
        path={newsPage}
        component={NewsPage}
      />
    </Switch>
  );
};

export default NewsRoutes;