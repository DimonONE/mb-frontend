import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as classNames from 'classnames';

import { getDirections } from '@components/site/OfflineDirections/constants';
import { Card } from '@components/ui/Card';
import OfflineDirectionsImageDesktop1x from '@static/img/offline-landing/offline-directions-1x-min.png';
import OfflineDirectionsImageDesktop2x from '@static/img/offline-landing/offline-directions-2x-min.png';

import * as s from './OfflineDirections.sss';
import { LayoutContainer } from '@components/student/LayoutContainer';

export const OfflineDirections: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Напрямки занять')}</div>
        <div className={s.subTitle}>{t('site~Mary Ballet за поступове, безпечне та комплексне навчання під керівництвом професійних дипломованих педагогів')}</div>

        <div className={s.blocks}>
          <div className={s.cards}>
            {
              getDirections(t).map(
                ({ title, description }) => (
                  <Card className={s.card}>
                    <div className={s.cardTitle}>{title}</div>
                    <div className={s.cardDescription}>{description}</div>
                  </Card>
                )
              )
            }
          </div>
          <div className={s.imageBlock}>
            <picture>
              <source
                data-srcset={`${OfflineDirectionsImageDesktop1x} 1x, ${OfflineDirectionsImageDesktop2x} 2x`}
                media="(min-width: 1268px)"
              />
              <img
                className={classNames(s.image, 'lazyload')}
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="..."
              />
            </picture>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};