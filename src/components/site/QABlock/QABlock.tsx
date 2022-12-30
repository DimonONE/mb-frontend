import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Card } from '@components/ui/Card';
import { Link } from '@components/ui/Link';
import { LayoutContainer } from '@components/student/LayoutContainer';
import QABackMobile1x from '@static/img/online-landing/qa-back-mobile-1x-min.png';
import QABackMobile2x from '@static/img/online-landing/qa-back-mobile-2x-min.png';
import QABackDesktop1x from '@static/img/online-landing/qa-back-desktop-1x-min.png';
import QABackDesktop2x from '@static/img/online-landing/qa-back-desktop-2x-min.png';

import * as s from './QABlock.sss';
import { answersToQuestions } from '@/urls';

type QABlockProps = {
  className?: string
  hiddenLink?: Boolean
};

const questions = [
  {
    title: 'Що потрібно взяти на перше заняття?',
    answer: (
      'Для пробного уроку підійде обтягуючий спортивний одяг та шкарпетки. ' +
      'Волосся слід зібрати у гульку, косу або хвіст. Не забудь про пляшечку води і гарний настрій!'
    ),
  },
  {
    title: 'Як діє абонемент?',
    answer: (
      'Абонемент не прив’язаний до календарного місяця. З покупкою абонементу ти закріплюєшся за зручним графіком.'
    ),
  },
  {
    title: 'Якщо у мене не стабільний графік на роботі?',
    answer: (
      'В такому випадку пропонуємо обирати разові заняття. ' +
      'Ти можеш записатися навіть за годину до заняття і відвідувати уроки у зручний для тебе час та локацію.'
    ),
  },
  {
    title: 'Чи потрібні пуанти на заняття?',
    answer: (
      'Якщо ти новачок, то для занять класичним танцем тобі необхідні балетки. В майбутньому, коли ти будеш готова відвідувати заняття пуант - ми допоможемо підібрати “пальці” (пуанти).'
    ),
  },
  {
    title: 'Как оплатить абонемент?',
    answer: (
      <>
        В Mary Ballet досвід, вік та вага значення не мають - наша місія, аби кожна дівчина відчула себе балериною.
        <br/>
        Обмеженням можуть стати індивідуальні травми і хвороби. В такому випадку, перед відвідуванням занять проконсультуйся з лікарем.
      </>
    ),
  }
];

type QuestionCardProps = {
  title: string
  answer: string | React.ReactNode
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  answer
}) => (
  <Card className={s.card}>
    <div className={s.questionTitle}>{title}</div>
    <div className={s.questionAnswer}>{answer}</div>
  </Card>
);

export const QABlock: React.FC<QABlockProps> = ({
  className,
  hiddenLink
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <picture>
        <source
          data-srcset={`${QABackDesktop1x} 1x, ${QABackDesktop2x} 2x`}
          media="(min-width: 1268px)"
        />

        <source
          data-srcset={`${QABackMobile1x} 1x, ${QABackMobile2x} 2x`}
          media="(max-width: 1268px)"
        />
        <img
          className={classNames(s.image, 'lazyload')}
          data-src={QABackMobile2x}
          alt="..."
        />
      </picture>
      <LayoutContainer className={s.layout}>
        <div className={s.title}>{t('site~Питання і відповіді')}</div>
        <div className={s.subTitle}>
          {t('site~Ми зібрали найпоширеніші питання і відповіді, які можуть у тебе виникнути. Якщо ти не знайшла відповіді тут - напиши нам, наші чарівниці-адміністратори з радістю тобі допоможуть!')}
        </div>

        <div className={s.questions}>
          {
            questions.length >= 2 &&
            <div className={s.questionsGroup}>
              {
                questions.slice(0, 2).map(
                  (q, i) => <QuestionCard key={i} title={q.title} answer={q.answer} />
                )
              }
            </div>
          }

          {
            questions.length >= 3 &&
            <div className={s.questionsGroup}>
              {
                questions.slice(2, 4).map(
                  (q, i) => <QuestionCard key={i} title={q.title} answer={q.answer} />
                )
              }
            </div>
          }

          {
            questions.length >= 5 &&
            <div className={s.questionsGroup}>
              <QuestionCard title={questions[4].title} answer={questions[4].answer} />
            </div>
          }
        </div>
        {
          !hiddenLink &&  
          <Link
            theme="white"
            className={s.otherAnswersLink}
            to={answersToQuestions}
          >
            {t('site~Дізнайся відповіді на інші питання')}
          </Link>
        }
       
      </LayoutContainer>
    </div>
  );
};