import * as React from 'react';

import TeacherLessonFullStudentAnalytics from '@components/teacher/TeacherLessonFullStudentAnalytics';
import LessonDetailStudentsList from '@components/teacher/LessonDetailStudentsList';
import { LessonDetailStudentCard } from '@components/teacher/LessonDetailStudentCard';
import { PaymentSource } from '@constants';
import { useLessonDetailStudentsListQuery } from '@graphql';

type LessonDetailStudentsListContainerProps = {
  lessonId: number
  className?: string
};

export const LessonDetailStudentsListContainer:
  React.FC<LessonDetailStudentsListContainerProps> =
({
  lessonId,
  className,
}) => {
  const { loading, data, error } = useLessonDetailStudentsListQuery({
    variables: { lessonId }
  });

  if (error) {
    throw error;
  }

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (data?.lessonDetail) {
    const { lessonDetail } = data;
    const analytics = data.lessonDetail.visitAnalytics;
    // TODO: add new messages flag
    const cards = data.lessonDetail.visitors.map(
      visitor => (
        <LessonDetailStudentCard
          key={visitor.id}
          visitorId={visitor.id}
          isVisited={visitor.visited}
          avatarUrl={visitor.user.avatarUrl}
          firstName={visitor.user.firstName}
          lastName={visitor.user.lastName}
          paymentInfo={{
            paid: visitor.paidOnLesson || visitor.paidOnline,
            source: (
              visitor.paidOnline ? PaymentSource.Online :
                visitor.paidOnLesson ? PaymentSource.OnLesson :
                  null
            ),
            amount: visitor.payAmount
          }}
          isFirstVisit={visitor.isFirstVisit}
          newMessages={true}
          isLessonClosed={lessonDetail.isClosed}
        />
      )
    );

    return (
      <LessonDetailStudentsList
        className={className}
        cards={cards}
        analytics={
          <TeacherLessonFullStudentAnalytics
            inAll={analytics.inAll}
            shouldPresent={analytics.shouldPresent}
            notPaid={analytics.notPaid}
            trialLesson={analytics.trialLesson}
            willAbsent={analytics.willAbsent}
            isClosed={lessonDetail.isClosed}
          />
        }
      />
    );
  }

  throw new Error('Empty render');
};