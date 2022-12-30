import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { Card } from '@/components/ui/Card';
import MariaImage1x from '@static/img/about/maria-1x-min.png';
import MariaImage2x from '@static/img/about/maria-2x-min.png';

import * as s from './AboutCreatorFirst.sss';


type AboutCreatorFirstProps = {
  className?: string
};

export const AboutCreatorFirst: React.FC<AboutCreatorFirstProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>{t('site~Засновники Mary Ballet')}</div>
        <div className={s.subTitle}>{t('site~Salut-salut! Ми - Марія та Димитрій, засновники та керівники студії, працюємо у па-де-де* і обожнюємо свою справу від маківки до кінчиків стоп. Всю нашу любов і професійний досвід ми втілюємо в компанії Mary Ballet.')}</div>

        <div className={s.twoSide}>
          <Card className={s.card}>
            <div className={s.cardTitle}>Марія</div>

            Професійна артистка балету і дипломований педагог класичного танцю. Головний педагог студії Mary Ballet.
            <br/>
            <br/>
            Усе моє дитинство та юність я присвятила танцю. Після хореографічної школи та студії вступила за покликанням на факультет класичного танцю у НПУ ім. Драгоманова і у 2020 році стала магістром. Дипломну роботу я присвятила “Мотивації дорослих до занять балетом” і заснувала “Словник хореографічних термінів для аматорів”. Мене вабить бути новатором та провідником у цій сфері, адже у світі не існує необхідної літератури та методики для навчання балету дорослих.
          </Card>
          <div className={s.imageBlock}>
            <img
              className={s.image}
              srcSet={`${MariaImage1x} 1x, ${MariaImage2x} 2x`}
              src={MariaImage1x}
              alt="..."
            />
            <div className={s.note1}>На сцені з 5 років</div>
            <div className={s.note2}>
              Творимо історію разом з
              <br/>
              проектом Mary Ballet
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};