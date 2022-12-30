import * as React from 'react';

import { AddComment } from '@components/teacher/AddComment';
import {
  useAddCommentOnStudentMutation,
  AddCommentOnStudentMutationOptions,
} from '@graphql';

export type AddCommentOnStudentContainerProps = {
  visitorId: number
  update?: AddCommentOnStudentMutationOptions['update']
  className?: string
};

export const AddCommentOnStudentContainer: React.FC<AddCommentOnStudentContainerProps> = ({
  visitorId,
  update,
  className,
}) => {
  const [addComment] = useAddCommentOnStudentMutation({
    update
  });

  const handleSubmit = async (text: string) => {
    await addComment({
      variables: {
        visitorId,
        text
      }
    });
  };

  return (
    <AddComment
      className={className}
      onSubmit={handleSubmit}
    />
  );
};