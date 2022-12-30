import { TFunction } from 'i18next';

export const getLessonDeclension = (t: TFunction, n: number) => {
  const lastDigit = n % 10;

  switch (lastDigit) {
    case 1:
      return t('занятие');
    case 2:
      return t('занятия');
    case 3:
      return t('занятия');
    case 4:
      return t('занятия');
    default:
      return t('занятий');
  }
};