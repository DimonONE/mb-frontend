import * as React from 'react';
import dayjs from 'dayjs';

import { useTeacherLessonDetailCardByIdQuery } from '@graphql';
import { LessonDetailsCard } from '@components/teacher/LessonDetailsCard';
import LessonVisitAnalytics from '@components/teacher/LessonVisitAnalytics';

type LessonDetailCardContainerProps = {
  lessonId: number
  className?: string
  visitAnalyticsClassName?: string
};

export const LessonDetailCardContainer: React.FC<LessonDetailCardContainerProps> = ({
  lessonId,
  className,
  visitAnalyticsClassName,
}) => {
  const { loading, data } = useTeacherLessonDetailCardByIdQuery({
    variables: { id: lessonId },
  });

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  const lesson = data.lessonDetail;
  const date = dayjs(lesson.time);
  const {
    hall,
    visitAnalytics
  } = lesson;
  return (
    <LessonDetailsCard
      className={className}
      date={date.format('dddd DD MMMM')}
      time={date.format('HH:mm')}
      location={`ул.${hall.street}, ${hall.number}`}
      duration={lesson.duration}
      level={lesson.skillLevel}
      isClosed={lesson.isClosed}
    >
      <LessonVisitAnalytics
        className={visitAnalyticsClassName}
        notPaid={visitAnalytics.notPaid}
        trialLesson={visitAnalytics.trialLesson}
        willAbsent={visitAnalytics.willAbsent}
        isClosed={lesson.isClosed}
      />
    </LessonDetailsCard>
  );
};