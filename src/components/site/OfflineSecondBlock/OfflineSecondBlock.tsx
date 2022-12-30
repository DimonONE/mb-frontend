import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { trialLessonModalHash } from '@urls';
import { Link } from '@components/ui/Link';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { Card } from '@components/ui/Card';
import { Button } from '@components/student/Button';

import * as s from './OfflineSecondBlock.sss';


type OfflineSecondBlockProps = {
  className?: string
};

export const OfflineSecondBlock: React.FC<OfflineSecondBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer>
        <div className={s.title}>
          {t('site~Займайся у своєму темпі!')}
        </div>

        <div className={s.sliderOuter}>
          <Swiper
            className={s.cards}
            slidesPerView="auto"
            spaceBetween={10}
            centeredSlides={true}
            breakpoints={{
              1280: {
                centeredSlides: false,
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide className={s.slide}>
              <Card className={s.card}>
                <div className={s.cardTitle}>{t('site~Початковий рівень')}</div>
                <div>
                  {t('site~Тут ти познайомишся з балетом та вивчиш базу від А до Я.')}
                  <br/>
                  <br/>
                  {t('site~Урок може складатись з розігріву, екзерсису (вправи) біля станка, екзерсису на середині зали, танцювальних рухів, вправ на розтяжку та гімнастики. Також на тебе чекає вивчення обертів і стрибків у класичному танці.')}
                </div>

                <Link theme="clean" to={trialLessonModalHash}>
                  <Button
                    className={s.cardButton}
                    theme="primaryPurple"
                  >
                    {t('site~Записатися')}
                  </Button>
                </Link>
              </Card>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Card className={s.card}>
                <div>
                  <div className={s.cardTitle}>{t('site~Середній рівень')}</div>
                  <div>
                    {t('site~Ускладненні та довші комбінації, вправи на пів пальцях, пришвидшення темпу та зміна музикального розміру.')}
                    <br/>
                    <br/>
                    {t('site~Щоб відвідувати цей рівень тобі необхідно володіти базою та французькою термінологією. Урок може складатись з розігріву, екзерсису біля станка, екзерсису на середині зали, вправ на розтяжку, гімнастики, обертів, маленьких, середніх та великих стрибків. Також на заняттях вивчають варіації і танцювальні зв\'язки.')}
                  </div>
                </div>

                <Link theme="clean" to={trialLessonModalHash}>
                  <Button
                    className={s.cardButton}
                    theme="primaryPurple"
                  >
                    {t('site~Записатися')}
                  </Button>
                </Link>
              </Card>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Card className={s.card}>
                <div>
                  <div className={s.cardTitle}>{t('site~Високий рівень')}</div>
                  <div>
                    {t('site~Покращення та відточування техніки, опрацювання складних елементів, ускладненні комбінації у швидкому темпі, насичені вправами на пів пальцях, обертами та стрибками.')}
                    <br/>
                    <br/>
                    {t('site~Відчуєш навантаження професійних артистів балету.')}
                    <br/>
                    <br/>
                    {t('site~Урок може складатись з розігріву, екзерсису біля станка та на середині зали, вправ на розтяжку, гімнастики, обертів, маленьких, середніх та великих стрибків. Також розучуються варіації і танцювальні зв\'язки.')}
                  </div>
                </div>

                <Link theme="clean" to={trialLessonModalHash}>
                  <Button
                    className={s.cardButton}
                    theme="primaryPurple"
                  >
                    {t('site~Записатися')}
                  </Button>
                </Link>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </LayoutContainer>
    </div>
  );
};
