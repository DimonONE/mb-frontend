import * as React from 'react';
import * as classNames from 'classnames';

import { Checkbox } from '@IndexLanding/components/Checkbox';
import { LevelLabel } from '@IndexLanding/components/LevelLabel';
import { SkillLevel } from '@graphql';

import * as s from './LevelsFilter.sss';

type LevelsFilterProps = {
  value: ReadonlyArray<SkillLevel>
  onChange: (value: ReadonlyArray<SkillLevel>) => void
  className?: string
};

export const LevelsFilter: React.FC<LevelsFilterProps> = ({
  value,
  onChange,
  className,
}) => {

  const onCheckboxCheck = (level: SkillLevel) => {
    if (value.includes(level)) {
      onChange(value.filter(l => l !== level));
    } else {
      onChange([...value, level]);
    }
  };

  return (
    <div className={classNames(s.root, className)}>
      Рівні:
      <Checkbox
        className={s.levelCheckbox}
        checked={value.includes(SkillLevel.Low)}
        onCheck={() => onCheckboxCheck(SkillLevel.Low)}
      >
        <LevelLabel
          className={s.levelLabel}
          level={SkillLevel.Low}
        />
        {' '}
        level
      </Checkbox>
      <Checkbox
        className={s.levelCheckbox}
        checked={value.includes(SkillLevel.Middle)}
        onCheck={() => onCheckboxCheck(SkillLevel.Middle)}
      >
        <LevelLabel
          className={s.levelLabel}
          level={SkillLevel.Middle}
        />
        {' '}
        level
      </Checkbox>
      <Checkbox
        className={s.levelCheckbox}
        checked={value.includes(SkillLevel.High)}
        onCheck={() => onCheckboxCheck(SkillLevel.High)}
      >
        <LevelLabel
          className={s.levelLabel}
          level={SkillLevel.High}
        />
        {' '}
        level
      </Checkbox>
    </div>
  );
};