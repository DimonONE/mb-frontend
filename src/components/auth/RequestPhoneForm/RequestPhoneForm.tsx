import * as React from 'react';
import * as classNames from 'classnames';
import { Field, useForm, useFormState } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { required } from '@utils/validators';
import { LabelInput } from '@components/ui/LabelInput';
import { Button } from '@components/student/Button';

import * as s from './RequestPhoneForm.sss';

export type FormValues = {
  phoneNumber: string
};

export const RequestPhoneForm: React.FC = () => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitting } = useFormState();

  return (
    <form
      className={classNames(s.root)}
      onSubmit={e => {
        e.preventDefault();
        form.submit();
      }}
    >
      <div className={s.title}>{t('login~Подтвердите номер телефона')}</div>

      <Field<FormValues['phoneNumber']>
        name="phoneNumber"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите номер телефона')}
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Button
        className={s.button}
        theme="primaryOrange"
        type="submit"
        disabled={submitting}
      >
        {t('login~Подтвердить')}
        {submitting && '...'}
      </Button>
    </form>
  );
};