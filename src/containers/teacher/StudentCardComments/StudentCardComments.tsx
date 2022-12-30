import * as React from 'react';
import update from 'immutability-helper';

import {
  StudentCardComments,
  StudentCardCommentsProps,
} from '@components/teacher/StudentCardComments';
import {
  useStudentCoachCommentQuery,
  StudentCoachCommentDocument,
  StudentCoachCommentQueryVariables,
  StudentCoachCommentQuery,
} from '@graphql';

type StudentCardCommentsContainerProps = {
  visitorId: number
  className?: string
};

export const StudentCardCommentsContainer:
  React.FC<StudentCardCommentsContainerProps> =
({
  visitorId,
  className,
}) => {
  const { data, loading, error } = useStudentCoachCommentQuery({
    variables: { id: visitorId },
  });

  const addCommentUpdate: StudentCardCommentsProps['addCommentUpdate'] = (
    cache,
    { data: mutationData }
  ) => {
    const cacheData = cache.readQuery<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>({
      query: StudentCoachCommentDocument,
      variables: { id: visitorId }
    });
    const updatedData = update(
      cacheData,
      {
        lessonVisitor: {
          user: {
            coachComments: {
              $push: [mutationData.addUserCoachComment.comment]
            }
          }
        }
      }
    );

    cache.writeQuery<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>({
      query: StudentCoachCommentDocument,
      variables: { id: visitorId },
      data: updatedData,
    });

  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    throw error;
  }

  const comments = data?.lessonVisitor.user.coachComments;
  if (comments) {
    return (
      <StudentCardComments
        className={className}
        comments={comments}
        visitorId={visitorId}
        addCommentUpdate={addCommentUpdate}
      />
    );
  }

  throw new Error('Empty render');
};