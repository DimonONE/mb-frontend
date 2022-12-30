import * as React from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as classNames from 'classnames';
import Dropzone from 'react-dropzone';
import dayjs from 'dayjs';
import { Field, useForm, useFormState } from 'react-final-form';

import { Modal, ModalProps } from '@components/student/Modal';
import { Button } from '@components/student/Button';
import { Select } from '@components/student/Select';
import UploadIcon from '@static/svg/upload.svg';

import * as s from './CreateFreezeModal.sss';

export type CreateFreezeModalProps = ModalProps & {
  lessonsCount: number
  lastLessonTime: dayjs.Dayjs
  movesCount: number
  freezeCount: number
  groupInfo: string
};

export type FormValues = {
  startDate: { id: dayjs.Dayjs, label: string }
  durationDays: { id: number, label: string }
  reference?: File | null
};

export const CreateFreezeModal: React.FC<CreateFreezeModalProps> = ({
  lessonsCount,
  lastLessonTime,
  movesCount,
  freezeCount,
  groupInfo,
  className,
  ...props
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitting } = useFormState();

  // Generate next 7 days starting from tomorrow
  const startDateOptions = useMemo(
    () => (
      Array(7).fill(null).map(
        (_, i) => {
          const time = dayjs().add(i + 1, 'day');
          return { id: time, label: time.format('DD.MM.YYYY') };
        }
      )
    ),
    []
  );
  return (
    <Modal
      className={classNames(s.root, className)}
      withClose={true}
      theme="orange"
      {...props}
    >
      <div className={s.title}>{t('student~Заморозить абонемент')}</div>
      <div className={s.subscriptionInfo}>
        <div>{t('student~Количество занятий')}: {lessonsCount}</div>
        <div>{t('student~Срок действия')}: до {lastLessonTime.format('D MMMM')}</div>
        <div>{t('student~Количество переносов')}: {movesCount}</div>
        <div>{t('student~Количество заморозок')}: {freezeCount}</div>
        <div>{t('student~Група')}: {groupInfo}</div>
      </div>

      <hr className={s.delimiter} />

      <div className={s.freezePeriodBlock}>
        На
        <div className={s.selectOuter}>
          <Field<FormValues['durationDays']>
            name="durationDays"
            render={
              ({ input }) => (
                <Select
                  theme="white"
                  placeholder={t('student~Количество дней')}
                  values={input.value ? [input.value] : []}
                  options={[
                    { id: 1, label: t('student~1 день') },
                    { id: 2, label: t('student~2 дня') },
                    { id: 3, label: t('student~3 дня') },
                    { id: 4, label: t('student~4 дня') },
                    { id: 5, label: t('student~5 дней') },
                    { id: 6, label: t('student~6 дней') },
                    { id: 7, label: t('student~7 дней') },
                  ]}
                  onChange={values => input.onChange(values[0])}
                />
              )
            }
          />
        </div>
      
        <div className={s.selectOuter}>
          <Field<FormValues['startDate']>
            name="startDate"
            render={
              ({ input }) => (
                <Select
                  theme="white"
                  placeholder={t('student~Выберите дату')}
                  values={input.value ? [input.value] : []}
                  options={startDateOptions}
                  onChange={values => input.onChange(values[0])}
                />
              )
            }
          />
        </div>
      </div>

      <div className={s.referenceHelpText}>
        {t(
          'student~Если вы хотите заморозить абонемент по состоянию здоровья, ' +
          'пожалуйста, прикрепите справку от доктора'
        )}
      </div>

      <Field<FormValues['reference']>
        name="reference"
        render={
          ({ input }) => (
            <Dropzone
              accept="image/*"
              maxFiles={1}
              multiple={false}
              // 5 Mb
              maxSize={5 * 1000000}
              onDrop={files => input.onChange(files[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <div className={s.dropzone} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className={s.dropzoneInner}>
                    <UploadIcon className={s.uploadIcon} />
                    {
                      input.value
                      ? input.value.name
                      : t('student~Прикрепите справку')
                    }
                  </div>
                </div>
              )}
            </Dropzone>
          )
        }
      />

      <Button
        theme="secondaryOrange"
        className={s.submitButton}
        disabled={submitting}
        onClick={form.submit}
      >
        {t('student~Заморозить')}
      </Button>
    </Modal>
  );
};