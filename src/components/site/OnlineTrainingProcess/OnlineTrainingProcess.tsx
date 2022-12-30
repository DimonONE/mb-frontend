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

import * as s from './OnlineTrainingProcess.sss';

const BLOCKS = [
  {
    title: 'Від простого до складного',
    description: 'З твоїм прогресом навантаження буде зростати, що дозволить логічно і поетапно вивчати матеріал та відкривати нові можливості свого тіла.',
  },
  {
    title: 'Індивідуальний підхід',
    description: 'Ми не про загальні групові заняття, а про результат кожної. Педагог приділяє увагу, контролює техніку і допомагає досягнути поставлених цілей.',
  },
  {
    title: 'Все зручно і просто',
    description: 'Заняття проходять через Google Meet. В призначений час ти переходиш за посиланням і s’il vous plait (фр.будь ласка), вмикаєш камеру і займаєшся в задоволення!',
  },
  {
    title: 'Обери напрям',
    description: 'Окрім балету ти можеш обрати стретчинг, партерний тренаж і пуанти. Останній ми проводимо в індивідуальному форматі. Тренуйся і вдосконалюйся разом з Mary Ballet!',
  },
  {
    title: 'Ми всі разом',
    description: 'З будь-якої точки планети можна долучитись до занять. Головне - бажання! Заняття завжди піднімають настрій і самопочуття, це fantastique!',
  }
];

export const OnlineTrainingProcess: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>{t('site~Як проходять тренування')}</div>
        <div className={s.subTitle}>{t('site~Для занять онлайн тобі необхідно 2х2 м2, килимок, зручна форма і пристрій. Про все інше Mary Ballet попіклується!')}</div>

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