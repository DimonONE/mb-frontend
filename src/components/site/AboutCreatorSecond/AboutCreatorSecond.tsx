import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { Card } from '@/components/ui/Card';
import DimaImage1x from '@static/img/about/dima-1x-min.jpg';

import * as s from './AboutCreatorSecond.sss';

type AboutCreatorSecondProps = {
  className?: string
};

export const AboutCreatorSecond: React.FC<AboutCreatorSecondProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.twoSide}>
          <Card className={s.card}>
            <div className={s.cardTitle}>Димитрій</div>

            Попри освіту у сфері IT, я все своє життя проводжу у русі - різні види спорту і активності завжди у моєму musthave листі. Вважаю, що в здоровому тілі, здоровий дух. Покинувши роботу в великій престижній компанії я повністю занурився у проект Mary Ballet, адже відчув великий потенціал ідеї і надихнувся відгуками наших учениць.
          </Card>
          <div className={s.imageBlock}>
            <img
              className={s.image}
              src={DimaImage1x}
              alt="..."
            />
            <div className={s.note1}>IT-спеціаліст, бізнес аналітик</div>
            <div className={s.note2}>
              Технічний директор студії
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};