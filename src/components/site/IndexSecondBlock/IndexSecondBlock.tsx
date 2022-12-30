import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import SecondBlockImage1 from '@static/img/second-block-1x-min.png';
import SecondBlockImage2 from '@static/img/second-block-2x-min.png';

import * as s from './IndexSecondBlock.sss';

type IndexSecondBlockProps = {
  className?: string
};

export const IndexSecondBlock: React.FC<IndexSecondBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.textGroup}>
          <div className={s.paragraph}>
            {t('site~Mary Ballet - найбільша студія балету для дорослих в Києві. \n' +
              'Ми створили балетну спільноту, де кожна дівчина може відчути себе балериною і стати частиною великої Ballet Family. Наші заняття проходять так само як у професійних артистів балету і адаптовані для початківців.')}
          </div>

          <div className={s.paragraph}>
            {t('site~Ти готова до la magie (фр. магії)?')}
          </div>

          <div className={s.paragraph}>
            {t('site~Ми на тебе чекаємо!')}
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