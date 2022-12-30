import * as React from 'react';
import {
  useEffect,
  useState,
} from 'react';

import {
  LessonTemplate,
  LessonTemplateProps,
} from '@IndexLanding/components/Schedule/components/LessonTemplate';
import { DayPicker } from '@IndexLanding/components/Schedule/components/DayPicker';
import {
  LocationOption,
  LocationSelect,
} from '@IndexLanding/components/LocationSelect';
import { Button } from '@IndexLanding/components/Button';
import { TimeOfDayRadioGroup } from '@IndexLanding/components/Schedule/components/TimeOfDayRadioGroup';
import { TimeOfDay } from '@constants';
import { LevelsInfo } from '@IndexLanding/components/Schedule/components/LevelsInfo';
import { LevelsFilter } from '@IndexLanding/components/Schedule/components/LevelsFilter';
import { useDesktopOrWider } from '@utils/mediaQuery';
import { SkillLevel } from '@graphql';
import {
  LessonTypeOption,
  LessonTypeSelect,
} from '@IndexLanding/components/LessonTypeSelect';
import { DayColumn } from './components/DayColumn';

import * as s from './Schedule.sss';

type LessonTemplateType = {
  id: number
  weekday: number
} & LessonTemplateProps;

export type ScheduleProps = {
  locations: LocationOption[]
  chosenLocation: LocationOption | null
  onChooseLocation: (arg: LocationOption) => void
  chosenTimeOfDay: TimeOfDay
  onChooseTimeOfDay: (arg: TimeOfDay) => void
  chosenDay: number
  onChooseDay: (arg: number) => void
  chosenLevels: SkillLevel[]
  onChooseLevels: (arg: SkillLevel[]) => void
  chosenType: LessonTypeOption
  onChooseType: (arg: LessonTypeOption) => void
  lessonTemplates: LessonTemplateType[]
  chosenTemplatesIds?: number[]
  onChooseTemplate?: (templateId: number) => void
};

const defaultLessonsCount = 8;

const getNoItemText = (timeOfDay: TimeOfDay) => {
  if (timeOfDay === TimeOfDay.AllDay) {
    return (
      'У вказаний день тижня на цій локації нема занять, ' +
      'спробуйте вибрати інший день тижня або локацію'
    );
  }
  if (timeOfDay === TimeOfDay.Morning) {
    return (
      'У вказаний день тижня і націй локації нема ранковий занять, ' +
      'спробуйте вибрати вечірній час, інший день тижня або іншу локацію'
    );
  }
  if (timeOfDay === TimeOfDay.Evening) {
    return (
      'У вказаний день тижня на цій локації нема вечірніх занять, ' +
      'спробуйте вибрати ранковий час, інший день тижня або іншу локацію'
    );
  }
};

export const Schedule: React.FC<ScheduleProps> = ({
  locations,
  chosenLocation,
  onChooseLocation,
  chosenTimeOfDay,
  onChooseTimeOfDay,
  chosenDay,
  onChooseDay,
  chosenLevels,
  onChooseLevels,
  chosenType,
  onChooseType,
  lessonTemplates,
  chosenTemplatesIds,
  onChooseTemplate
}) => {
  const isDesktopOrWider = useDesktopOrWider();
  const [showMore, setShowMore] = useState(false);

  useEffect(
    () => setShowMore(false),
    [chosenLocation?.id, chosenTimeOfDay, chosenDay]
  );

  const showLessonsCount =
    showMore
      ? lessonTemplates.length
      : lessonTemplates.length < defaultLessonsCount
        ? lessonTemplates.length
        : defaultLessonsCount;

  const templateComponents: React.ReactNode[] = [];
  if (isDesktopOrWider) {
    const weekdayLessonsMapping = {};
    for (let weekday = 0; weekday < 7; weekday++) {
      weekdayLessonsMapping[weekday] = [];
    }
    for (const template of lessonTemplates) {
      weekdayLessonsMapping[template.weekday].push(
        <LessonTemplate
          key={template.id}
          className={s.lessonTemplate}
          time={template.time}
          address={template.address}
          level={template.level}
          type={template.type}
          locations={template.locations}
          onClick={() => onChooseTemplate(template.id)}
          isChosen={
            !!chosenTemplatesIds &&
            chosenTemplatesIds.includes(template.id)
          }
          isChoosable={!!chosenTemplatesIds}
        />
      );
    }
    for (let weekday = 1; weekday < 7; weekday++) {
      templateComponents.push(
        <DayColumn
          key={weekday}
          className={s.dayColumn}
          weekday={weekday}
        >
          {weekdayLessonsMapping[weekday]}
        </DayColumn>
      );
    }
  } else {
    for (let i = 0; i < showLessonsCount; i++) {
      const template = lessonTemplates[i];
      templateComponents.push(
        <LessonTemplate
          key={template.id}
          className={s.lessonTemplate}
          time={template.time}
          address={template.address}
          level={template.level}
          type={template.type}
          locations={template.locations}
        />
      );
    }
  }

  return (
    <div className={s.root}>
      <div className={s.head}>
        <div className={s.leftGroup}>
          <LocationSelect
            className={s.locationSelect}
            values={chosenLocation ? [chosenLocation] : []}
            options={locations}
            onChange={selectedLocations => onChooseLocation(selectedLocations[0])}
          />
          <TimeOfDayRadioGroup
            className={s.timeOfDay}
            value={chosenTimeOfDay}
            onChange={onChooseTimeOfDay}
          />
          <LevelsFilter
            className={s.levelsFilter}
            value={chosenLevels}
            onChange={onChooseLevels}
          />
        </div>
        <LessonTypeSelect
          className={s.lessonTypeSelect}
          values={[chosenType]}
          onChange={selectedTypes => onChooseType(selectedTypes[0])}
        />
      </div>
      {
        isDesktopOrWider
        ? (
          <div className={s.lessonTemplates}>
            {templateComponents}
          </div>
        )
        : (
          <>
            <DayPicker
              value={chosenDay}
              onChange={onChooseDay}
            />
            <div className={s.lessonTemplates}>
              {
                lessonTemplates.length
                  ? templateComponents
                  : <div className={s.noItems}>{getNoItemText(chosenTimeOfDay)}</div>
              }
            </div>
            {
              !showMore &&
              showLessonsCount < lessonTemplates.length &&
              <Button
                className={s.showMore}
                onClick={() => setShowMore(true)}
              >
                И еще {lessonTemplates.length - showLessonsCount}
              </Button>
            }
          </>
        )
      }
      <LevelsInfo className={s.levelsInfo} />
    </div>
  );
};