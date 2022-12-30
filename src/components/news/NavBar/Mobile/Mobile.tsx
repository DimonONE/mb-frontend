import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import UserCabinetIcon from '@svg/userCabinet.svg';
import MaryBalletTopIcon from '@svg/maryBalletTop.svg';
import { TrialLessonModalContainer } from '@containers/site/TrialLessonModal';
import { navigationTabs } from '@components/news/NavBar/constants';
import { mainPage } from '@urls';

import * as s from './Mobile.sss';

type MobileProps = {
  className?: string
};

export const Mobile: React.FC<MobileProps> = ({
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrialLessonModalOpen, setIsTrialLessonModalOpen] = useState(false);

  return (
    <div className={
      classNames(
        s.root,
        { [s.active]: isOpen },
        className
      )
    }>
      <div className={s.topLine}>
        <button
          className={classNames(
            s.open,
            {[s.active]: isOpen}
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={s.lines} />
        </button>
        <a href={mainPage} className={s.logo}>
          <MaryBalletTopIcon />
        </a>
        <a
          className={s.userCabinet}
          href="#"
          onClick={() => setIsTrialLessonModalOpen(true)}
        >
          <UserCabinetIcon />
        </a>
      </div>
      <div className={s.menu}>
        <nav className={s.nav}>
          {navigationTabs.map(link => (
            <Link
              className={s.listItem}
              to={link.path}
              key={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <Link
          className={s.bottomLink}
          to="#"
          onClick={() => setIsTrialLessonModalOpen(true)}
        >
          Пробное занятие
        </Link>
      </div>
      <TrialLessonModalContainer
        isOpen={isTrialLessonModalOpen}
        onRequestClose={() => setIsTrialLessonModalOpen(false)}
      />
    </div>
  );
};