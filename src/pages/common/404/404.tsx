import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '@components/ui/Link';
import { Button } from '@components/student/Button';
import { NavBarContainer } from '@containers/student/NavBar';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { Footer } from '@components/site/Footer';

import * as s from './404.sss';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <div className={s.fullHeight}>
        <NavBarContainer
          position="static"
          theme="primary-transparent"
        />

        <LayoutContainer>
          <div className={s.code}>404</div>
          <div className={s.title}>{t('site~О нет!')}</div>
          <div className={s.subTitle}>{t('site~Страницы, которую вы ищите, не существует.')}</div>

            <Link to="/">
              <Button
                className={s.button}
                theme="primaryOrange"
                size="L"
              >
                {t('site~Вернуться на главную')}
              </Button>
            </Link>
        </LayoutContainer>
      </div>

      <Footer />
    </div>
  )
}