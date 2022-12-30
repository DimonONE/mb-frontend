import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/student/Button';
import { Card } from '@components/ui/Card';
import { LayoutContainer } from '@components/student/LayoutContainer';
import {
  onlineLanding,
  siteOfflineLanding,
} from '@urls';
import { Link } from '@components/ui/Link';

import * as s from './IndexDirectionBlock.sss';

type IndexDirectionBlockProps = {
  className?: string
};

export const IndexDirectionBlock: React.FC<IndexDirectionBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer>
        <div className={s.title}>
          {t('site~Обери свій формат')}
        </div>

        <div className={s.cards}>
          <Card className={s.card}>
            <div className={s.cardTitle}>{t('site~Заняття балетом в студії')}</div>
            <div>
              {t('site~Відчуй атмосферу витонченого класичного танцю на одній з наших локацій. В Mary Ballet існує 4 напрями: балет, стретчинг, пуанти та партерний тренаж. Заняття проводять дипломовані педагоги з вищою освітою. Вони допоможуть тобі дійти до поставлених цілей, розкрити можливості свого тіла і отримувати задоволення від занять.')}
            </div>

            <Link theme="clean" to={siteOfflineLanding}>
              <Button
                className={s.cardButton}
                theme="primaryOrange"
              >
                {t('site~Дізнатися більше')}
              </Button>
            </Link>
          </Card>

          <Card className={s.card}>
            <div>
              <div className={s.cardTitle}>{t('site~Заняття балетом онлайн')}</div>
              <div>
                {t('site~Mary Ballet довів, що онлайн формат - це зручно і ефективно. Ти можеш займатися через екран смартфона чи комп’ютера у будь-який час, обираючи комфортний графік та навантаження. Обирай заняття в групі до 7 учениць або займайся індивідуально, де педагог приділить всю увагу тобі.')}
              </div>
            </div>

            <Link theme="clean" to={onlineLanding}>
              <Button
                className={s.cardButton}
                theme="primaryOrange"
              >
                {t('site~Дізнатися більше')}
              </Button>
            </Link>
          </Card>
        </div>
      </LayoutContainer>
    </div>
  );
};
