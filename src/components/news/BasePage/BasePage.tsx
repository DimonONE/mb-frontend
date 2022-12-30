import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import { JumbotronLayout } from '@components/site/JumbotronLayout';
import { NewsCategoriesHeader } from '../NewsCategoriesHeader';
import { Footer } from '@components/site/Footer';
import { newsPage } from '@urls';
import * as s from './BasePage.sss';


type BasePageProps = {
  layoutClassName?: string
  className?: string
};

export const BasePage: React.FC<BasePageProps> = ({
  layoutClassName,
  className,
  children
}) => {
  const history = useHistory();
  const {t} = useTranslation();

  const isNewsPage = history.location.pathname === newsPage 

  return (
    <div className={classNames(s.root, layoutClassName)}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={classNames(s.content, className)}>
        
          {
            isNewsPage
            ? <JumbotronLayout
                title={t(`news~Блог`)}
                description={t('news~Новини нашої студії, балетні історії та заходи')}
              />
            : <NewsCategoriesHeader />
          }
        {children}
      </div>
      <Footer/>
    </div>
  );
}