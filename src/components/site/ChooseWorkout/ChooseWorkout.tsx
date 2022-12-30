import React, { useState } from 'react'
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next'
import { LayoutContainer } from '@components/student/LayoutContainer'
import { placeOptions } from '@constants';
import { SelectOptonType, StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import s from './ChooseWorkout.sss'

type ChooseWorkoutProps = {}

type SelectValue = {
  StepOne: SelectOptonType
  StepTwo: string
  StepThree: string
}

export type SelectCustomType = {
  onStepIndex: ( select: number ) => void
  handleChange: ( value: string | SelectOptonType, key: keyof SelectValue ) => void
};

export const ChooseWorkout: React.FC<ChooseWorkoutProps> = () => {
  const { t } = useTranslation();
  const [visibleStepInex, setVisibleStepInex] = useState<number>(1)
  const [selectValue, setSelectValue] = useState<SelectValue>({
    'StepOne': placeOptions[0],
    'StepTwo': null,
    'StepThree': null
  })

  const handleStepIndex = (select: number) => {
    setVisibleStepInex(prev => prev > select ? prev : select)
  }

  const handleChange = (value: string | SelectOptonType, key: keyof SelectValue) => {
    setSelectValue(prev => ({...prev, [key]: value}) )
  }
  
  return (
    <div className={s.root}>
      <LayoutContainer>
        <div className={s.title}>{t('site~Підбери собі тренування')}</div>
        <div className={s.blocks}>
          {
            [StepOne, StepTwo, StepThree].map((Step, index) =>     
              <div key={index} className={classNames(s.block, visibleStepInex < ++index && s.disabled)}>
                <h3 className={s.step}>{t(`site~Крок ${++index}`)}</h3>
                <div className={s.content}>
                  {<Step value={selectValue[Step.name]} onStepIndex={handleStepIndex} handleChange={handleChange} />}
                </div>
              </div> )
          }
        </div>
      </LayoutContainer>
    </div>
  )
}

