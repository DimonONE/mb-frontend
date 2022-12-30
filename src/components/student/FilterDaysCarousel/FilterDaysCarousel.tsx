import React from 'react';
import * as classNames from 'classnames';
import * as dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { LayoutContainer } from '@components/student/LayoutContainer';
import ArrowLeftIcon from '@svg/arrowLeft.svg';
import ArrowRightIcon from '@svg/arrowRight.svg';

import * as s from './FilterDaysCarousel.sss';

type FilterDaysCarouselProps = {
  className?: string
  startDate: dayjs.Dayjs
  endDate: dayjs.Dayjs
  setPreviousWeek: () => void
  setNextWeek: () => void
  isLastWeekAvailable: boolean
  isNextWeekAvailable: boolean
};

export const FilterDaysCarousel: React.FC<FilterDaysCarouselProps> = ({
  className,
  startDate,
  endDate,
  setPreviousWeek,
  setNextWeek,
  isLastWeekAvailable,
  isNextWeekAvailable
}) => {
  const { t } = useTranslation();

  return (
    <LayoutContainer className={classNames(className, s.root)}>
      <button
        className={classNames(s.arrowBlock, {[s.disabled]: !isLastWeekAvailable})}
        disabled={!isLastWeekAvailable}
        onClick={() => setPreviousWeek()}
      >
        <ArrowLeftIcon className={s.arrow} />
        <span className={s.arrowText}>{t('student~Предыдущая неделя')}</span>
      </button>
      <span className={s.title}>
        {startDate.format('DD MMMM YYYY')} - {endDate.format('DD MMMM YYYY')}
      </span>
      <button
        className={classNames(s.arrowBlock, {[s.disabled]: !isNextWeekAvailable})}
        disabled={!isNextWeekAvailable}
        onClick={() => setNextWeek()}
      >
        <span className={s.arrowText}>{t('student~Cледующая неделя')}</span>
        <ArrowRightIcon className={s.arrow} />
      </button>
    </LayoutContainer>
  );
};