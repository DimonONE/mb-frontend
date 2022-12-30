import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import { TeachersSlider } from '@components/site/TeachersSlider';

import { offlineTeachersInfo, onlineTeachersInfo } from './constants';

import * as s from './TeachersBlock.sss';


type TeachesBlockProps = {
  type?: 'online' | 'offline' | 'all-teachers'
}

export const TeachersBlock: React.FC<TeachesBlockProps> = ({
  type = 'online'
}) => {
  const { t } = useTranslation();

  let teachersInfo;
  if (type === 'online') {
    teachersInfo = onlineTeachersInfo;
  } else if (type === 'offline') {
    teachersInfo = offlineTeachersInfo;
  } else if (type === 'all-teachers') {
    teachersInfo = [...onlineTeachersInfo, ...offlineTeachersInfo];
  } else {
    throw new Error(`Unknown type - ${type}`);
  }

  return (
    <div className={s.root}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Педагоги студії')}</div>
        <div className={s.subTitle}>
          {t('site~Ми з командою Mary Ballet точно знаємо, що педагог в балеті - це більше, ніж наставник. Це друг, який обов’язково допоможе здійснити твою мрію.')}
        </div>
        <div className={s.sliderOuter}>
          <TeachersSlider
            className={s.slider}
            teachersInfo={teachersInfo}
          />
        </div>
      </LayoutContainer>
    </div>
  );
};