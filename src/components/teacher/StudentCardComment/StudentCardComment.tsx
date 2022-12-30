import * as React from 'react';

import * as s from './StudentCardComment.sss';

type Commentator = {
  firstName: string
  lastName: string
};
export type StudentCardCommentProps = {
  text: string
  commentator: Commentator
  className?: string
};

export const StudentCardComment: React.FC<StudentCardCommentProps> = ({
  text,
  commentator,
  className,
}) => (
  <div className={className}>
    {text}
    <div className={s.commentator}>
      {commentator.firstName} {commentator.lastName}
    </div>
  </div>
);