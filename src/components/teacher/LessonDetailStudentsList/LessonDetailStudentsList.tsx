import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './LessonDetailStudentsList.sss';

type LessonDetailStudentsListProps = {
  cards: React.ReactNodeArray
  analytics: React.ReactNode
  className?: string
};

export const LessonDetailStudentsList: React.FC<LessonDetailStudentsListProps> = ({
  cards,
  analytics,
  className,
}) => {
  return (
    <div className={classNames(s.root, className)}>
      <div className={s.header}>
        <div className={s.title}>Ученики</div>
        <div>{analytics}</div>
      </div>
      <div className={s.cards}>
        {cards}
      </div>
    </div>
  );
};

export default LessonDetailStudentsList;