import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { Card } from '@components/ui/Card';

import * as s from './AboutMissionValues.sss';

type AboutMissionValuesProps = {
  className?: string
};

export const AboutMissionValues: React.FC<AboutMissionValuesProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer>
        <div className={s.title}>
          {t('site~Наша місія та цінності')}
        </div>
        <div className={s.subTitle}>
          Створити круті та комфортні умови для талановитих педагогів, створити ринок балету для дорослих в Україні та впровадити нові стандарти навчання та обслуговування для цієї сфери
        </div>

        <div className={s.cards}>
          <Card className={s.card}>
            <div className={s.cardTitle}>{t('site~Профессіоналізм')}</div>
            <div>
              5-ти етапний відбір педагогів, якість медіа та користь текстового контенту, підхід до навчання і побудови проекту в оффлайн та онлайн. Відображення справжнього мистецтва
            </div>
          </Card>

          <Card className={s.card}>
            <div className={s.cardTitle}>{t('site~Натхнення')}</div>
            <div>
              Мотивуємо наших учениць через цікаві заняття, контент у соц. мережах та залучаємо
              на авторські івенти. Даємо
              їм можливість спробувати
              та закохатись у балет на все життя!
            </div>
          </Card>

          <Card className={s.card}>
            <div>
              <div className={s.cardTitle}>{t('site~Результат')}</div>
              <div>
                Групи балету розділені на 3 рівні підготовки з додатковими напрямками: балетний стретчинг, пуанти, партерний тренаж. Індивідуальний підбір локації, рівня групи та педагога згідно вашим цілям
              </div>
            </div>
          </Card>
        </div>
      </LayoutContainer>
    </div>
  );
};
