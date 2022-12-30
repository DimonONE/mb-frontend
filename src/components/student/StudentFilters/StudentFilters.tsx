import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import {
  Filter
} from '@components/student/Filter';
import {
  getTypeChoices,
  getTimeChoices,
  getLevelChoices
} from '@constants';

import * as s from './StudentFilters.sss';

type LocationType = {
  id: number
  name: string
};

type DayType = {
  value: number[]
  name: string
};

type FiltersProps = {
  className?: string
  lessonType: string | null
  locations: LocationType[]
  location: number | null
  lessonTime: string | null
  groups?: DayType[]
  group?: string
  skillLevel: string | null
  isIndividual?: boolean
};

export const StudentFilters: React.FC<FiltersProps> = ({
  className,
  lessonType,
  locations,
  location,
  lessonTime,
  groups,
  group,
  skillLevel,
  isIndividual
}) => {
  const { t } = useTranslation();

  const typeChoices = getTypeChoices();
  const timeChoices = getTimeChoices();
  const levelChoices = getLevelChoices();

  return (
    <LayoutContainer className={classNames(className, s.root)}>
      <div className={s.header}>
        {isIndividual ? t('student~Индивидуальное расписание') : t('student~Pасписание')}
      </div>
      <div className={s.filters}>
        <Filter
          options={locations}
          values={location ? [locations.find(o => o.id === location)] : null}
          queryName="locationId"
          placeholder={t('student~Метро')}
          className={classNames({ [s.filter]: !group})}
        />
        <Filter
          options={timeChoices}
          values={lessonTime ? [timeChoices.find(o => o.id === lessonTime)] : [timeChoices[1]]}
          queryName="time"
          placeholder={t('student~Время')}
          className={classNames({ [s.filter]: !group})}
        />
        {group ?
          <Filter
            options={groups}
            values={group ? [groups.find(o => o.value && o.value.toString() === group)] : null}
            queryName="days"
            placeholder={t('student~День')}
          />
          : null
        }
        <Filter
          options={levelChoices}
          values={skillLevel ? [levelChoices.find(o => o.id === skillLevel)] : [levelChoices[0]]}
          queryName="skillLevel"
          placeholder={t('student~Уровень')}
          className={classNames({ [s.filter]: !group})}
        />
        <Filter
          className={classNames({ [s.filter]: !group}, s.lessonTypeSelect)}
          options={typeChoices}
          values={lessonType ? [typeChoices.find(o => o.id === lessonType)] : [typeChoices[0]]}
          queryName="lessonType"
          placeholder={t('student~Направление')}
        />
      </div>
    </LayoutContainer>
  );
};
