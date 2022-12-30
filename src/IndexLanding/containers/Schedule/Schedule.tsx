import * as React from 'react';
import { useState } from 'react';

import {
  Schedule,
  ScheduleProps,
} from '@IndexLanding/components/Schedule';
import {
  LessonType,
  SkillLevel,
  useScheduleQuery
} from '@graphql';
import { withApolloHooksProvider } from '@client';
import {
  TimeOfDay,
  TimeOfDayPredicates
} from '@constants';
import { useDesktopOrWider } from '@utils/mediaQuery';
import {
  LessonTypeOption,
  options as lessonTypeOptions
} from '@IndexLanding/components/LessonTypeSelect';

type ScheduleContainerProps = {
  onChooseTemplate?: ScheduleProps['onChooseTemplate']
  chosenTemplatesIds?: ScheduleProps['chosenTemplatesIds']
};

export const ScheduleContainerWithoutClient: React.FC<ScheduleContainerProps> = props => {
  const isDesktopOrWider = useDesktopOrWider();
  const date = new Date();
  const today = date.getDay();

  const { data, loading } =  useScheduleQuery();
  const [chosenLocation, setChosenLocation] = useState<ScheduleProps['chosenLocation'] | null>(null);
  const [chosenTimeOfDay, setChosenTimeOfDay] = useState<TimeOfDay>(TimeOfDay.AllDay);
  const [chosenDay, setChosenDay] = useState<number>(today === 0 ? 1 : today);
  const [chosenLevels, setChosenLevels] = useState<SkillLevel[]>([]);
  const [chosenType, setChosenType] = useState<LessonTypeOption>(lessonTypeOptions[0]);

  if (loading) {
    return <div>...</div>;
  }

  if (data?.lessonTemplates) {
    const locations = new Set(
      data.lessonTemplates.flatMap(
        template => template.hall.locations
      )
    );
    const lessonTemplates = data.lessonTemplates
      .filter(
        template => {
          // Location match
          if (
            chosenLocation &&
            chosenLocation.id !== null &&
            !template
            .hall
            .locations
            .find(location => location.id === chosenLocation.id)
          ) {
            return false;
          }

          // Day match
          if (template.weekday !== chosenDay && !isDesktopOrWider) {
            return false;
          }

          // Time match
          const hour = +template.time.split(':')[0];
          if (!TimeOfDayPredicates[chosenTimeOfDay](hour)) {
            return false;
          }

          // Desktop only filters
          if (isDesktopOrWider) {
            // Level match
            if (
              chosenLevels.length &&
              (
                chosenType.value === LessonType.Primary ||
                !chosenType.value
              ) &&
              (
                chosenLevels.indexOf(template.level) === -1 ||
                template.type !== LessonType.Primary
              )
            ) {
              return false;
            }

            // Lesson type match
            if (chosenType.value !== null && template.type !== chosenType.value) {
              return false;
            }
          }

          return true;
        }
      )
      .map(
        template => ({
          id: template.id,
          weekday: template.weekday,
          time: template.time.slice(0, 5),
          address: `${template.hall.street}, ${template.hall.number}`,
          level: template.level,
          type: template.type,
          locations: template.hall.locations,
        })
      )
      .sort(
        (a, b) => {

          const [aHour, aMinute] = a.time.split(':').map(Number);
          const [bHour, bMinute] = b.time.split(':').map(Number);

          if (aHour < bHour) {
            return -1;
          } else if (aHour === bHour) {
            if (aMinute < bMinute) {
              return -1;
            } else if (aMinute === bMinute) {
              return 0;
            }
          }

          return 1;
        });

    const locationsArr = Array.from(locations);
    locationsArr.sort(
      (a, b) => {
        if (a.priority < b.priority) {
          return 1;
        }
        if (a.priority > b.priority) {
          return -1;
        }
        return 0;
      }
    );
    return (
      <Schedule
        locations={locationsArr}
        chosenLocation={chosenLocation}
        onChooseLocation={setChosenLocation}
        chosenTimeOfDay={chosenTimeOfDay}
        onChooseTimeOfDay={setChosenTimeOfDay}
        chosenDay={chosenDay}
        onChooseDay={setChosenDay}
        chosenLevels={chosenLevels}
        onChooseLevels={setChosenLevels}
        chosenType={chosenType}
        onChooseType={setChosenType}
        lessonTemplates={lessonTemplates}
        {...props}
      />
    );
  }

  return null;
};

export const ScheduleContainer = withApolloHooksProvider(ScheduleContainerWithoutClient);