import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as classNames from 'classnames';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { ProgressSlider } from '@components/site/ProgressSlider';
import TrainingProcessMobile1x from '@static/img/online-landing/training-process-1x-min.jpg';
import TrainingProcessMobile2x from '@static/img/online-landing/training-process-2x-min.jpg';
import TrainingProcessDesktop1x from '@static/img/online-landing/training-process-desktop-1x.jpg';
// TODO: added 2x
import TrainingProcessDesktop2x from '@static/img/online-landing/training-process-desktop-1x.jpg';

import * as s from './OfflineAdventages.sss';

const BLOCKS = [
  {
    title: 'Атмосфера',
    description: 'Просторні балетні зали та класична музика - це magnifique (фр. чудова) можливість поринути у світ танцю. На заняттях ти проживаєш справжній шлях балерини під наглядом професіонального педагога, тож уроки передають справжній дух класичного мистецтва.',
  },
  {
    title: 'Професійність',
    description: 'Педагоги Mary Ballet проходять 5-ти етапний відбір у команду, мають вищу педагогічну освіту і досвід роботи на великій сцені. Вони готові ділитися з тобою секретами майстерності і зроблять усе можливе, аби ти досянула поставлених цілей!',
  },
  {
    title: 'Гарантія',
    description: 'Вже за місяць регулярних занять ти побачиш перші результати. Відвідуй уроки систематично і фіксуй свій прогрес. З нами ти отримаєш різницю до/після, а ще мотивацію і підтримку на шляху.',
  },
  {
    title: 'Закохуємо в балет!',
    description: 'Ми об’єднуємо людей у велику Ballet Family і популяризуємо мистецтво класичного танцю в Україні. Запрошуємо на майстер-класи відомих артистів і влаштовуємо fantastique (фр. фантастичний) івенти для нашої спільноти!',
  },
  // {
  //   title: 'Ми всі разом',
  //   description: 'З будь-якої точки планети можна долучитись до занять. Головне - бажання! Заняття завжди піднімають настрій і самопочуття, це fantastique!',
  // }
];

export const OfflineAdventages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>{t('site~Наші Переваги')}</div>
        {/*<div className={s.subTitle}>{t('site~Для занять онлайн тобі необхідно 2х2 м2, килимок, зручна форма і пристрій. Про все інше Mary Ballet попіклується!')}</div>*/}

        <picture>
          <source
            data-srcset={`${TrainingProcessDesktop1x} 1x, ${TrainingProcessDesktop2x} 2x`}
            media="(min-width: 1268px)"
          />

          <source
            data-srcset={`${TrainingProcessMobile1x} 1x, ${TrainingProcessMobile2x} 2x`}
            media="(max-width: 1268px)"
          />
          <img
            className={classNames(s.image, 'lazyload')}
            data-src={TrainingProcessDesktop1x}
            alt="..."
          />
        </picture>

        <ProgressSlider
          className={s.progressSlider}
          swiperClassName={s.swiper}
          blocks={BLOCKS}
        />
      </LayoutContainer>
    </div>
  );
};