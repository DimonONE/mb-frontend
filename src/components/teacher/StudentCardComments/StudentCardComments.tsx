import * as React from 'react';
import * as classNames from 'classnames';

import {
  StudentCardComment,
  StudentCardCommentProps,
} from '@components/teacher/StudentCardComment';
import {
  AddCommentOnStudentContainer,
  AddCommentOnStudentContainerProps,
} from '@containers/teacher/AddCommentOnStudent';

import * as s from './StudentCardComments.sss';

type Comment = StudentCardCommentProps & {
  id: number
};
export type StudentCardCommentsProps = {
  visitorId: number
  comments: Comment[]
  addCommentUpdate?: AddCommentOnStudentContainerProps['update']
  className?: string
};

export const StudentCardComments: React.FC<StudentCardCommentsProps> = ({
  visitorId,
  comments,
  addCommentUpdate,
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <div className={s.comments}>
      {
        comments.map(
          comment => (
            <StudentCardComment
              key={comment.id}
              {...comment}
              className={s.comment}
            />
          )
        )
      }
    </div>
    <AddCommentOnStudentContainer
      visitorId={visitorId}
      update={addCommentUpdate}
    />
  </div>
);