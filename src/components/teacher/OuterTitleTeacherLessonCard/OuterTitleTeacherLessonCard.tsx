import * as React from 'react';

import {
  LessonDetailsCard,
  LessonDetailsCardProps,
} from '@components/teacher/LessonDetailsCard';

import * as s from './OuterTitleTeacherLessonCard.sss';

type OuterTitleTeacherLessonCardProps = LessonDetailsCardProps & {
  title: string
  className?: string
};

export const OuterTitleTeacherLessonCard: React.FC<OuterTitleTeacherLessonCardProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <div className={s.title}>{title}</div>
      <LessonDetailsCard {...props} />
    </div>
  );
};
