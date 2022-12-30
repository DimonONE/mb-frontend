import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as classNames from 'classnames';
import { levelRepresentation } from "@constants";
import { SelectCustomType } from "./ChooseWorkout";
import s from './ChooseWorkout.sss'

interface StepTwoProps extends SelectCustomType {
  value: string
}

export const StepTwo:React.FC<StepTwoProps> = ({ value: activeLevel, handleChange, onStepIndex}) => {
  const { t } = useTranslation();
  const levels = Object.values(levelRepresentation)

  const handleClick = (level: string) => {
    handleChange(level, 'StepTwo')
    onStepIndex(3)
  }

  return (
    <div>
      <h4 className={s.subTitle}>{t('site~Выбери свой уровень подготовки')}</h4>
      <div className={s.attributes}>
        {
          levels.map((level, index) => (
            <span 
              key={index}
              className={classNames(s.attribute, activeLevel === level && s.active)} 
              onClick={() => handleClick(level)}>{level}</span>
          ))
        }
      </div>
    </div>
  )
}