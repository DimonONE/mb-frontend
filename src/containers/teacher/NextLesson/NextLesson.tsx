import * as React from 'react';
import * as dayjs from 'dayjs';
import {
  generatePath,
  Link,
} from 'react-router-dom';

import { OuterTitleTeacherLessonCard } from '@components/teacher/OuterTitleTeacherLessonCard';
import { useTeacherNextLessonQuery } from '@graphql';
import { teacherLessonDetail } from '@urls';

type NextLessonContainerProps = {
  className?: string
};

export const NextLessonContainer: React.FC<NextLessonContainerProps> = ({
  className
}) => {
  const { data, loading } = useTeacherNextLessonQuery();

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  const nextLesson = data.viewer.nearestLesson;
  if (nextLesson) {
    const time = dayjs(nextLesson.time);
    const { hall } = nextLesson;
    return (
      <Link
        to={
          generatePath(
            teacherLessonDetail,
            { id: nextLesson.id }
          )
        }
      >
        <OuterTitleTeacherLessonCard
          className={className}
          title="Следующее занятие"
          date={time.format('dddd DD MMMM')}
          time={time.format('HH:mm')}
          location={`ул.${hall.street}, ${hall.number}`}
          duration={nextLesson.duration}
          level={nextLesson.skillLevel}
          isClosed={false}
        />
      </Link>
    );
  }

  return null;
};