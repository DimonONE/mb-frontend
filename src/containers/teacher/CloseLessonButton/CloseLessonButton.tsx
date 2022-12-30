import * as React from 'react';

import { CloseLessonButton } from '@components/teacher/CloseLessonButton';
import {
  useCloseLessonButtonQuery,
  useCloseLessonMutation
} from '@graphql';

type CloseLessonModalContainerProps = {
  lessonId: number
  className?: string
};

export const CloseLessonButtonContainer: React.FC<CloseLessonModalContainerProps> = ({
  lessonId,
  ...props
}) => {
  const [mutate] = useCloseLessonMutation({
    variables: { lessonId }
  });
  const { loading, data, error } = useCloseLessonButtonQuery({
    variables: { lessonId }
  });

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('Empty data');
  }

  const handleCloseLesson = async () => {
    await mutate();
    return true;
  };

  return (
    <CloseLessonButton
      disabled={data.lessonDetail.isClosed}
      onCloseLesson={handleCloseLesson}
      {...props}
    />
  );
};