import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Modal } from '@components/student/Modal';
import { TextRadioGroup } from '@components/student/TextRadioGroup';
import { Button } from '@components/student/Button';

import * as s from './CheckoutStartDateInput.sss';

type CheckoutStartDateInputProps = {
  availableDates: dayjs.Dayjs[]
  value: dayjs.Dayjs
  onChange: (value: dayjs.Dayjs) => void
};

export const CheckoutStartDateInput: React.FC<CheckoutStartDateInputProps> = ({
  availableDates,
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = availableDates.map(
    date => ({ label: date.format('DD MMMM YYYY'), value: date })
  );

  const [localValue, setLocalValue] = useState(
    () => options.find(option => option.value.isSame(value))
  );
  return (
    <div className={s.root}>
      <div className={s.startDateText}>
        {t(`student~Абонемент начнет действовать с ${value.format('DD MMMM YYYY')}.`)}
        {' '}
        {
          availableDates.length > 1 &&
            <button
              className={s.changeDateButton}
              onClick={() => setIsModalOpen(true)}
            >
              {t('student~Изменить')}
            </button>
        }
      </div>
      <Modal
        className={s.modal}
        isOpen={isModalOpen}
        theme="orange"
        withClose={true}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className={s.modalTitle}>{t('student~Начало действия абонемента')}</div>
        <div className={s.modalText}>
          {t(
            'student~Если вы хотите отложить начало действия абонемента, ' +
            'выберите подходящую дату из списка ниже'
          )}
        </div>
        <TextRadioGroup
          className={s.radioGroup}
          options={options}
          onChange={setLocalValue}
          value={localValue}
        />

        <Button
          className={s.saveChanges}
          onClick={
            () => {
              onChange(localValue.value);
              setIsModalOpen(false);
            }
          }
        >
          {t('student~Сохранить изменения')}
        </Button>
      </Modal>
    </div>
  );
};