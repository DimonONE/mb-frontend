import Female from './static/female.png';
import Instagram from './static/instagram.png';
import Planet from './static/planet.png';
import Pointes from './static/pointes.png';
import Student from './static/student.png';
import Trophy from './static/trophy.png';

import Ticket1x from '@static/img/illustrations-120/ticket-1x-min.jpg';
import Ticket2x from '@static/img/illustrations-120/ticket-2x-min.jpg';
import Ballet1x from '@static/img/illustrations-120/ballet-1x-min.jpg';
import Ballet2x from '@static/img/illustrations-120/ballet-2x-min.jpg';
import Theater1x from '@static/img/illustrations-120/theater-masks-1x-min.jpg';
import Theater2x from '@static/img/illustrations-120/theater-masks-2x-min.jpg';
import Spotlights1x from '@static/img/illustrations-120/spotlights-1x-min.jpg';
import Spotlights2x from '@static/img/illustrations-120/spotlights-2x-min.jpg';
import EyeMask1x from '@static/img/illustrations-120/eye-mask-1x-min.jpg';
import EyeMask2x from '@static/img/illustrations-120/eye-mask-2x-min.jpg';
import Queen1x from '@static/img/illustrations-120/queen-1x-min.jpg';
import Queen2x from '@static/img/illustrations-120/queen-2x-min.jpg';
import MusicNotes1x from '@static/img/illustrations-120/music-notes-1x-min.jpg';
import MusicNotes2x from '@static/img/illustrations-120/music-notes-2x-min.jpg';

import DirectorChair1x from '@static/img/illustrations-120/director-chair-1x-min.jpg';
import DirectorChair2x from '@static/img/illustrations-120/director-chair-2x-min.jpg';
import Stage1x from '@static/img/illustrations-120/stage-1x-min.jpg';
import Stage2x from '@static/img/illustrations-120/stage-2x-min.jpg';

const baseSubscriptionPoints = [
  {
    image: Planet,
    text: 'Доступ к live занятиям'
  },
  {
    image: Pointes,
    text: 'Доступ к мастер-классам от известных Артистов Балета'
  },
  {
    image: Student,
    text: 'Доступ к лекциям от спец. экспертов: искусствоведов, диетологов, психологов'
  },
  {
    image: Instagram,
    text: 'Доступ ко всем материалам предыдущего месяца'
  },
];
const advancedSubscriptionPoints = [
  ...baseSubscriptionPoints,
  {
    image: Female,
    text: 'Обратная связь от педагогов студии'
  },
  {
    image: Trophy,
    text: 'Специальные задания для достижения результата'
  },
];

export const subscriptions = [
  // {
  //   id: 1,
  //   image: {
  //     x1: Ticket1x,
  //     x2: Ticket2x
  //   },
  //   title: 'Подписка «Кордебалет»',
  //   description: 'Для тех, кто хочет попробовать.',
  //   subscription: baseSubscriptionPoints,
  //   price: '400 грн/мес',
  //   priceNumber: 400,
  // },
  // {
  //   id: 2,
  //   image: {
  //     x1: DirectorChair1x,
  //     x2: DirectorChair2x,
  //   },
  //   title: 'Подписка «Солистка»',
  //   description: 'Для тех, кто хочет результат.',
  //   subscription: advancedSubscriptionPoints,
  //   price: '550 грн/мес',
  //   priceNumber: 550,
  // },
  // {
  //   id: 3,
  //   image: {
  //     x1: Stage1x,
  //     x2: Stage2x,
  //   },
  //   title: 'Балетный сезон',
  //   description: 'От малого к великому.',
  //   subscription: advancedSubscriptionPoints,
  //   price: '1400 грн / <span>3 мес</span>',
  //   isActive: true,
  //   priceNumber: 1400,
  //   monthsCount: 3,
  // },
  {
    id: 4,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Заняття в групі онлайн',
    description: 'Маленькі групи до 7 людей',
    subscription: [
      {
        text: 'Заняття адаптується під учениць',
      },
      {
        text: 'Розподіл за рівнями',
      },
      {
        text: 'Можливість обрати балет, стретчинг або тренаж',
      },
      {
        text: 'Спільний чат підтримки і новин',
      },
    ],
    price: '150 грн/урок',
    priceNumber: 150,
  },
];

export const individualSubscriptions = [
  {
    id: 5,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Індивідуальне заняття онлайн',
    description: '',
    subscription: [],
    price: '400 грн/урок',
    priceNumber: 400,
  },
  {
    id: 6,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Парне індивідуальне заняття онлайн',
    description: '',
    subscription: [],
    price: '450 грн/урок',
    priceNumber: 450,
  },
  {
    id: 7,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Індивідуальне заняття на пуантах',
    description: '',
    subscription: [],
    price: '450 грн/урок',
    priceNumber: 450,
  },
  {
    id: 8,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Парне індивідуальне заняття на пуантах',
    description: '',
    subscription: [],
    price: '500 грн/урок',
    priceNumber: 500,
  },
  {
    id: 9,
    image: {
      x1: Ticket1x,
      x2: Ticket2x
    },
    title: 'Індивідуальне заняття з дитиною до 12 років',
    description: '',
    subscription: [],
    price: '450 грн/урок',
    priceNumber: 450,
  },
];

export const balletSubscriptionsImages = [
  {
    id: 8,
    image: {
      x1: Ballet1x,
      x2: Ballet2x
    },
  },
  {
    id: 9,
    image: {
      x1: MusicNotes1x,
      x2: MusicNotes2x
    },
  },
  {
    id: 10,
    image: {
      x1: Theater1x,
      x2: Theater2x
    },
  },
  {
    id: 11,
    image: {
      x1: Spotlights1x,
      x2: Spotlights2x
    },
  },
  {
    id: 12,
    image: {
      x1: EyeMask1x,
      x2: EyeMask2x
    },
  },
  {
    id: 13,
    image: {
      x1: Queen1x,
      x2: Queen2x
    },
  },
]

export const pointeSubscriptionsImages = [
  {
    id: 14,
    image: {
      x1: Ballet1x,
      x2: Ballet2x
    },
  },
  {
    id: 15,
    image: {
      x1: MusicNotes1x,
      x2: MusicNotes2x
    },
  },
  {
    id: 16,
    image: {
      x1: Theater1x,
      x2: Theater2x
    },
  },
  {
    id: 17,
    image: {
      x1: Spotlights1x,
      x2: Spotlights2x
    },
  },
]