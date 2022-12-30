import * as React from 'react';
import * as classNames from 'classnames';

import { levelRepresentation } from '@constants';
import { SkillLevel } from '@graphql';

import * as s from './LevelLabel.sss';

type LevelLabelProps = {
  level: SkillLevel
  className?: string
};

const levelClass: { [level in SkillLevel]: string } = {
  [SkillLevel.Low]: s.low,
  [SkillLevel.Middle]: s.middle,
  [SkillLevel.High]: s.high,
};

export const LevelLabel: React.FC<LevelLabelProps> = ({
  level,
  className,
}) => (
  <div className={classNames(className, levelClass[level])}>
    {levelRepresentation[level]}
  </div>
);