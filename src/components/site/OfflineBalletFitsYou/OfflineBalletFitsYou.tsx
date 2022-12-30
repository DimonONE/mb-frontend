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

import * as s from './OfflineBalletFitsYou.sss';

const BLOCKS = [
  {
    title: 'Mary Ballet Intensive Tour & Weekend',
    description: 'Разом з учнями ми відправляємось на 3-4 дні у подорож містами України! На тебе чекають incroyable (фр. неймовірні) пригоди у чудовій компанії, інтенсивні та різноманітні заняття, сумісний похід у місцевий театр, екскурсії містом, навчальні лекції, спільні сніданки та вечері. А в кінці дня ми влаштовуємо затишний кіновечір в піжамах, обмінюючись думками. Приєднуйся у найближчій подорожі!',
  },
  {
    title: 'Майстер-класи',
    description: 'Ще одна родзинка - тематичні майстер-класи. Вони допомагають краще пізнати своє тіло і цікаво провести час. Цінність таких івентів в тому, що вони присвячуються конкретній темі: секрет ідеального піруету,  безпечні і високі стрибки, балетні руки, модерн, вивчення варіацій з балетів, характерний танець і багато іншого!',
  },
  {
    title: 'Фотосесії',
    description: '99% фото контенту у соціальних мережах студії - результат наших фотопроектів. Ми вкладаємо душу у створення світлин, які стануть чудовим подарунком, пам’яттю на все життя і прикладом для натхнення. Фотограф спеціалізується на зйомці балерин. Також на знімальному майданчику присутній педагог, для допомоги у підборі поз.',
  },
  {
    title: 'Походи у театр',
    description: 'Відвідай закулісся Національної Опери України разом з Mary Ballet! Декорації відомих опер та балетів, гримерні артистів і репетиційні зали - все це чекає на екскурсії. Також виглянеш на глядацьку залу скрізь куліси сцени,познайомишся з реквізитом і костюмами,побачиш налаштування світла і підготовку артистів до спектаклю. Справжня magie (фр. магія)!',
  },
];

export const OfflineBalletFitsYou: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>{t('site~Балет тобі личить!')}</div>
        <div className={s.subTitle}>
          {t('site~Ми організовуємо авторські івенти, які запам’ятовуються на все життя!')}
          <br/>
          {t('site~Ставай частиною нашої Mary Ballet Family і ти здивуєшся, скільки можливостей та вражень відкриє перед тобою мистецтво класичного танцю.')}
        </div>

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
          desktopActiveBlockClassName={s.desktopActiveBlockClassName}
          blocks={BLOCKS}
        />
      </LayoutContainer>
    </div>
  );
};