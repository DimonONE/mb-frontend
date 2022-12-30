import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import SecondBlockImage1 from '@static/img/second-block-1x-min.png';
import SecondBlockImage2 from '@static/img/second-block-2x-min.png';

import * as s from './AboutSecondBlock.sss';

type AboutSecondBlockProps = {
  className?: string
};

export const AboutSecondBlock: React.FC<AboutSecondBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.textGroup}>
          <div className={s.paragraph}>
            {t('site~В 2018 році народилась студія Mary Ballet, яка є найбільшою студією балету для дорослих в Києві.')}
          </div>

          <div className={s.paragraph}>
            {t('site~Більше 5000 жінок завітали до нашої студії офлайн і більше 1000 приєднались до нашого онлайн формату. Наразі студія налічує 7 філіалів по Києву на правому та лівому березі.')}
          </div>

          <div className={s.paragraph}>
            {t('site~Вже 3 роки ми закохуємо людей в балет, створюємо велику спільноту балеринок та ламаємо стереотип, що класичний танець доступний лише обраним.')}
          </div>
        </div>

        <img
          className={s.image}
          srcSet={`${SecondBlockImage1} 1x, ${SecondBlockImage2} 2x`}
          src={SecondBlockImage1}
          alt="..."
        />
      </LayoutContainer>
    </div>
  );
};