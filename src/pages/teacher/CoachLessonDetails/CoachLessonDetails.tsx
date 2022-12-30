import * as React from 'react';
import { useParams } from 'react-router-dom';

import BaseCoachCabinet from '@pages/teacher/BaseCoachCabinet';
import ScheduleViewModeBar from '@components/teacher/ScheduleViewModeBar';
import MainMenuWrapper from '@components/teacher/MainMenuWrapper';
import { NextLessonContainer } from '@containers/teacher/NextLesson';
import { LessonDetailCardContainer } from '@containers/teacher/LessonDetailCard';
import { LessonDetailStudentsListContainer } from '@containers/teacher/LessonDetailStudentsList';
import { CurrentLessonRedirect } from '@containers/teacher/CurrentLessonRedirect';
import { CloseLessonButtonContainer } from '@containers/teacher/CloseLessonButton';

import * as s from './CoachLessonDetails.sss';

type RouteParams = {
  id?: string
};

export const CoachLessonDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();

  if (!id) {
    return <CurrentLessonRedirect />;
  }

  const lessonId = +id;
  return (
    <BaseCoachCabinet className={s.root}>
      <MainMenuWrapper/>

      <div className={s.lessonInfo}>
        <LessonDetailCardContainer
          className={s.lesson}
          visitAnalyticsClassName={s.visitAnalytics}
          lessonId={lessonId}
        />
        <LessonDetailStudentsListContainer
          className={s.studentsList}
          lessonId={lessonId}
        />

        <CloseLessonButtonContainer
          className={s.closeLessonButton}
          lessonId={lessonId}
        />
      </div>

      <NextLessonContainer className={s.nextLesson} />
      <ScheduleViewModeBar/>
    </BaseCoachCabinet>
  );
};

export default CoachLessonDetails;