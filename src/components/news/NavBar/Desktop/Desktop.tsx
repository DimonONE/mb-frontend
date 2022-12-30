import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import { navigationTabs } from '@components/news/NavBar/constants';
import { TrialLessonModalContainer } from '@containers/site/TrialLessonModal';

import * as s from './Desktop.sss';

type DesktopProps = {
  className?: string
};

export const Desktop: React.FC<DesktopProps> = ({
  className
}) => {
  const [isTrialLessonModalOpen, setIsTrialLessonModalOpen] = useState(false);

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.menu}>
        <nav className={s.nav}>
          {navigationTabs.map(link => (
            <a
              className={s.listItem}
              href={link.path + link.hash}
              key={link.path + link.hash}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className={s.navButton}>
          <Link
            className={s.bottomLink}
            to="#"
            onClick={() => setIsTrialLessonModalOpen(true)}
          >
            Пробное занятие
          </Link>
        </div>
      </div>
      <TrialLessonModalContainer
        isOpen={isTrialLessonModalOpen}
        onRequestClose={() => setIsTrialLessonModalOpen(false)}
      />
    </div>
  );
};