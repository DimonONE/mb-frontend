import {
  mainPage,
  mainAboutUsHash,
  mainScheduleHash,
  mainPricesHash,
  mainNewsHash,
  mainContactsHash,
  studentPageSettings,
  studentPageSubscription,
  studentPageSchedule,
  siteOfflineLanding,
  onlineLanding,
  siteSchedule,
  siteSubscriptionsOffline,
  newsPage,
  siteAboutUs,
  siteStudios,
} from '@urls';

import ProfileImage1x from '@static/img/profile-55px-1x-min.png';
import ProfileImage2x from '@static/img/profile-55px-2x-min.png';
import ScheduleImage1x from '@static/img/schedule-55px-1x-min.png';
import ScheduleImage2x from '@static/img/schedule-55px-2x-min.png';
import SubscriptionImage1x from '@static/img/subscription-55px-1x-min.png';
import SubscriptionImage2x from '@static/img/subscription-55px-2x-min.png';

export type NavLink = {
  title: string
  path: string
  iconImage?: {
    x1: string
    x2: string
  }
};

export type NavLinkWithChildren = {
  title: string
  subNav: NavLink[]
};

type NavLinks = (NavLink | NavLinkWithChildren)[];

export const getStudentsNavigation: (t: any) => NavLinks = t => [
  {
    title: t('Заняття в студіях'),
    path: siteOfflineLanding,
  },
  {
    title: t('Заняття онлайн'),
    path: onlineLanding,
  },
  {
    title: t('Локації'),
    path: siteStudios,
  },
  {
    title: t('Абонементи'),
    path: siteSubscriptionsOffline
  },
  {
    title: t('Розклад'),
    path: siteSchedule
  },
  {
    title: t('Блог'),
    path: newsPage
  },
  {
    title: t('Про нас'),
    path: siteAboutUs
  }
];

export const getPersonalCabinet = (t: any) => ({
  title: t('Особистий кабинет'),
  subNav: [
    {
      title: t('Мій розклад'),
      path: studentPageSchedule,
      iconImage: {
        x1: ScheduleImage1x,
        x2: ScheduleImage2x,
      }
    },
    {
      title: t('Мій абонемент'),
      path: studentPageSubscription,
      iconImage: {
        x1: SubscriptionImage1x,
        x2: SubscriptionImage2x,
      },
    },
    {
      title: t('Налаштування'),
      path: studentPageSettings,
      iconImage: {
        x1: ProfileImage1x,
        x2: ProfileImage2x
      }
    }
  ]
});

export const getNavForLoggedIn: (t: any) => NavLinks = t => [
  {
    title: t('Мій розклад'),
    path: studentPageSchedule
  },
  {
    title: t('Мій абонемент'),
    path: studentPageSubscription
  },
  {
    title: t('Налаштування'),
    path: studentPageSettings
  },
  {
    title: t('Підтримка'),
    path: `${mainPage}${mainContactsHash}`
  }
];