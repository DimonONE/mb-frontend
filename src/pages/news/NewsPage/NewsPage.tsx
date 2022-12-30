import * as React from 'react';

import { BasePage } from '@components/news/BasePage';
import { NewsPageContainer } from '@containers/news/NewsPageContainer';

import * as s from './NewsPage.sss';

type NewsPageProps = {
  className?: string
};

export const NewsPage: React.FC<NewsPageProps> = ({
  className
}) => (
  <div className={s.root}>
    <BasePage>
      <NewsPageContainer className={s.title} />
    </BasePage>
  </div>
);

export default NewsPage;