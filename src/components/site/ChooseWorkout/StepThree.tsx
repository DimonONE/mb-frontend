import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as classNames from 'classnames';
import { getTimeOfDay } from "@constants";
import { SelectCustomType } from "./ChooseWorkout";
import s from './ChooseWorkout.sss'

interface StepThreeProps  extends SelectCustomType {
  value: string
}

export const StepThree:React.FC<StepThreeProps> = ({ value: activeTimeOfDay, handleChange, onStepIndex}) => {
  const { t } = useTranslation();
  const timeOfDay = getTimeOfDay()

  const handleClick = (time: typeof timeOfDay[number]['name']) => {
    handleChange(time, 'StepThree')
    onStepIndex(4)
  }

  return (
    <div>
      <h4 className={s.subTitle}>{t('site~Выбери удобное время занятий')}</h4>
      <div className={s.attributes}>
        {
          timeOfDay.map((time) => (
            <span 
              key={time.id}
              className={classNames(s.attribute,{[s.active]: activeTimeOfDay === time.name})} 
              onClick={() => handleClick(time.name)}>{time.name}</span>
          ))
        }
      </div>
    </div>
  )
}