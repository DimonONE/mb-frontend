import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@components/ui/Card';
import { LayoutContainer } from '@components/student/LayoutContainer';

import * as s from './OnlineSecondBlock.sss';

const cardsData: (t: any) => { title: string, description: string }[] = t => [
  {
    title: t('site~Знайдемо час у твоєму графіку'),
    description: t('site~Приділити 1 годину на тренування тепер значно легше - не потрібно витрачати час на дорогу і залежати від обставин. Просто в декілька кліків записуєшся на урок і займаєшся не виходячи з дому!'),
  },
  {
    title: t('site~Підберемо навантаження під твій рівень'),
    description: t('site~В нашій студії онлайн формат розподіляється по рівням. Все створено для того, аби заняття були ефективними і цікавими. Тобі ніколи не стане нудно чи надто важко. З Mary Ballet завжди є куди зростати!'),
  },
  {
    title: t('site~Підтримка і спільнота'),
    description: t('site~Заняття проводить дипломований педагог з вищою педагогічною освітою, який стане не просто наставником, а другом. Обирай як тобі займатись: або в групі, колі однодумців, де ти можеш знайти чудову компанію; або індивідуально, де педагог приділить час тільки тобі.'),
  },
];

export const OnlineSecondBlock: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Чому формат онлайн з Mary Ballet?')}</div>
        <div className={s.description}>
          {t('site~Наша команда створила fantastique (фр. фантастичний) зручний варіант занять спеціально під твій ритм!')}
          <br/>
          {t('site~Ми доводимо, що тренуватись онлайн не просто зручно, а ще й дуже ефективно!')}
        </div>

        <div className={s.cards}>
          {
            cardsData(t).map(
              (card, i) => (
                <Card key={i} className={s.card}>
                  <div className={s.cardTitle}>{card.title}</div>
                  <div className={s.cardDescription}>{card.description}</div>
                </Card>
              )
            )
          }
        </div>
      </LayoutContainer>
    </div>
  );
};