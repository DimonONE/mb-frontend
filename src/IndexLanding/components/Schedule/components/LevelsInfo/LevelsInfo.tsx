import * as React from 'react';
import * as classNames from 'classnames';

import { LevelLabel } from '@IndexLanding/components/LevelLabel';
import { SkillLevel } from '@graphql';

import * as s from './LevelsInfo.sss';

type LevelsInfoProps = {
  className?: string
};

export const LevelsInfo: React.FC<LevelsInfoProps> = ({
  className,
}) => (
  <div className={classNames(s.root, className)}>
    <div>
      <LevelLabel
        className={s.label}
        level={SkillLevel.Low}
      />
      {' '}
      level - для почтківців, хто ніколи не займався балетом.
    </div>
    <div>
      <LevelLabel
        className={s.label}
        level={SkillLevel.Middle}
      />
      {' '}
      level - для досвідчених, хто знає базу і займався балетом раніше.
    </div>
    <div>
      <LevelLabel
        className={s.label}
        level={SkillLevel.High}
      />
      {' '}
      level - для просунутих, хто добре володіє технікою, обертаннями та стрибками.
    </div>
  </div>
);