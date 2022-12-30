import * as React from 'react';
import * as classNames from 'classnames';

import { LevelLabel } from '@IndexLanding/components/LevelLabel';
import {
  LocationLabel,
  LocationLabelProps
} from '@IndexLanding/components/LocationLabel';
import {
  LessonType,
  SkillLevel
} from '@graphql';

import * as s from './LessonTemplate.sss';

export type LessonTemplateProps = {
  time: string
  address: string
  level: SkillLevel | null
  type: LessonType
  locations: LocationLabelProps[]
  isChoosable?: boolean
  isChosen?: boolean
  onClick?: () => void
  className?: string
};

export const LessonTemplate: React.FC<LessonTemplateProps> = ({
  time,
  address,
  level,
  type,
  locations,
  onClick,
  isChoosable = false,
  isChosen = false,
  className
}) => (
  <div
    className={
      classNames(
        s.root,
        { [s.choosable]: isChoosable },
        { [s.chosen]: isChosen },
        className
      )
    }
    onClick={onClick}
  >
    <div className={s.timeLevelRow}>
      <div className={s.time}>{time}</div>
      {
        type === LessonType.Primary
          ? level && <LevelLabel level={level} />
          : <div className={s.type}>{type}</div>
      }
    </div>
    <div className={s.address}>{address}</div>
    <div className={s.locations}>
      {
        locations.map(
          location => (
            <LocationLabel
              key={location.name}
              className={s.location}
              color={location.color}
              name={location.name}
            />
          )
        )
      }
    </div>
  </div>
);