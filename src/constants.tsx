import { SkillLevel, LessonType, LessonTime } from '@graphql';
import { strict as assert } from 'assert';
import { isPhoneNumberValid } from '@utils/common';
import i18next from 'i18next';

function prettifyPhoneNumber(phoneOriginal: string) {
  const numberWithSpaces = [
    phoneOriginal.slice(0, 2),
    phoneOriginal.slice(2, 5),
    phoneOriginal.slice(5, 8),
    phoneOriginal.slice(8, 10),
    phoneOriginal.slice(10)
  ].join(' ');
  return `+${numberWithSpaces}`;
}

export const phoneMask = '+380 99 999 9999';
export const phoneMaskChar = ' ';

// Should also be changed on backend
export const smsPasswordMask = '999 999 999';
export const smsPasswordMaskChar = ' ';

export const phoneNumberOriginal = '380633762917';
export const phoneNumber = prettifyPhoneNumber(phoneNumberOriginal);
export const phoneNumberToCall = `tel:+${phoneNumberOriginal}`;
export const emailAddress = 'maryballetkyiv@gmail.com';

assert(isPhoneNumberValid(phoneNumberOriginal));

export const facebookLink = 'https://www.facebook.com/maryballetkyiv/';
export const tiktokLink = 'https://www.tiktok.com/@maryballetkyiv';
export const instagramLink = 'https://www.instagram.com/mary.ballet.kyiv/';
export const telegramLink = 'https://t.me/MaryBallet';
export const youtubeLink = 'https://www.youtube.com/channel/UCccsY3sV_x81fzXSTDlGW4w';

export enum PaymentSource {
  Online,
  OnLesson,
}

export enum TimeOfDay {
  Morning,
  AllDay,
  Evening,
}

// Predicates allow check whether time is included in particular
// `TimeOfDay` enum value
export const TimeOfDayPredicates = {
  [TimeOfDay.Morning]: (hour: number) => hour >= 0 && hour < 14,
  [TimeOfDay.AllDay]: () => true,
  [TimeOfDay.Evening]: (hour: number) => hour >= 14 && hour < 24,
};

export const weekdayVerbose = {
  0: 'Неділя',
  1: 'Понеділок',
  2: 'Вівторок',
  3: 'Середа',
  4: 'Четвер',
  5: 'П\'ятница',
  6: 'Субота',
};

export const monthAsDatePartVerbose = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря',
};

export const levelRepresentation = {
  [SkillLevel.Low]: 'START',
  [SkillLevel.Middle]: 'MIDDLE',
  [SkillLevel.High]: 'HIGH',
};

export enum ViewerType {
  Coach,
  Student,
}

// Local storage keys
// For online purchases analytics
export const dataOrderKey = 'dataOrder';

export const typeRepresentation = {
  PRIMARY: 'Балет',
  STRETCHING: 'Стретчинг',
  POINTE: 'Пуанти',
  PARTER: 'Партер'
};

export  const placeOptions = [
  { id: 1, label: i18next.t('student~Станция метро') },
]

export const getTypeChoices = () => ([
  { id: null, name: i18next.t('Выбрать') },
  { id: LessonType.Primary, name: i18next.t('Балет') },
  { id: LessonType.Stretching, name: i18next.t('Стретчинг') },
  { id: LessonType.Pointe, name: i18next.t('Пуанти') },
  { id: LessonType.Parter, name: i18next.t('Партер') },
]);

export const getTimeChoices = () => ([
  { id: null, name: i18next.t('Выбрать') },
  { id: LessonTime.AllDay, name: i18next.t('Весь день') },
  { id: LessonTime.Morning, name: i18next.t('Ранок') },
  { id: LessonTime.Evening, name: i18next.t('Вечір') },
]);

export const getTimeOfDay = () => ([
  { id: LessonTime.AllDay, name: i18next.t('День') },
  { id: LessonTime.Morning, name: i18next.t('Утро') },
  { id: LessonTime.Evening, name: i18next.t('Вечір') },
]);

export const getLevelChoices = () => ([
  { id: null, name: i18next.t('Вибрати') },
  { id: SkillLevel.Low, name: i18next.t('Старт') },
  { id: SkillLevel.Middle, name: i18next.t('Середній') },
  { id: SkillLevel.High, name: i18next.t('Високий') },
]);

export enum ScheduleType {
  Trial = 'trial',
  Group = 'group',
  Individual = 'individual',
}
export enum TimeOfDay {
  Trial = 'Утро',
  Group = 'День',
  Individual = 'Вечер',
}