import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@components/student/Select";
import { SelectCustomType } from "./ChooseWorkout";
import { placeOptions } from "@constants";
import s from './ChooseWorkout.sss'

export interface StepOneProps extends SelectCustomType {
  value: SelectOptonType
}

export type SelectOptonType = {
    id: number, 
    label: string
}

export const StepOne:React.FC<StepOneProps> = ({ value, handleChange, onStepIndex }) => {
  const { t } = useTranslation();

  const onSubmit = (values) => {
    handleChange(values[0], 'StepOne')
    onStepIndex(2)
  } 

  return (
    <div>
    <h4 className={s.subTitle}>{t('site~Вибери місце для занять')}</h4>
    <Select
        theme="primary"
        className={ s.dropDown }
        placeholder={t('student~Количество дней')}
        values={ [value] }
        options={placeOptions}
        onChange={values => onSubmit(values)}
    />
    </div>
  )
}