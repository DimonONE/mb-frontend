import * as React from 'react';
import { useParams } from 'react-router-dom';
import * as classNames from 'classnames';

import { NewsArticlePageContainer } from '@containers/news/NewsArticlePageContainer';
import { NavBarContainer } from '@containers/student/NavBar';
import { Footer } from '@components/site/Footer';
import newsBG from '@static/img/news/news-background.jpg';


import * as s from './NewsPageArticle.sss';

type RouteParams = {
  articleId?: string
};

export const NewsPageArticle: React.FC = () => {
  const { articleId: articleIdString } = useParams<RouteParams>();

  if (!articleIdString || !+articleIdString) {
    throw new Error(`Empty or invalid articleId - ${articleIdString}`);
  }

  return (
  <div className={s.root}>
      <NavBarContainer
        position="fixed"
        theme='purple' 
      />
      <div className={classNames(s.imageContainer)}>
        <img src={newsBG} className={classNames(s.image, 'lazyload', 'lazypreload')} />
      </div>
      <NewsArticlePageContainer id={+articleIdString} />
      <Footer/>
  </div>
);
};
export default NewsPageArticle;