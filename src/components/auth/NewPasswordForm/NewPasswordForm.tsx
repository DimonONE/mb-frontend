import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Field, useForm, useFormState } from 'react-final-form';

import { required } from '@utils/validators';
import { LabelInput } from '@components/ui/LabelInput';
import { Button } from '@components/student/Button';

import * as s from './NewPasswordForm.sss';

export type FormValues = {
  password1: string
  password2: string
};

type NewPasswordFormProps = {
  className?: string
};

export const NewPasswordForm: React.FC<NewPasswordFormProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitting } = useFormState();

  return (
    <form
      className={classNames(s.root, className)}
      onSubmit={e => {
        e.preventDefault();
        form.submit();
      }}
    >
      <div className={s.title}>{t('login~Введите новый пароль')}</div>

      <Field<FormValues['password1']>
        name="password1"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите пароль')}
              type="password"
              autoComplete="new-password"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['password2']>
        name="password2"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите пароль еще раз')}
              type="password"
              autoComplete="new-password"
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
        {t('login~Изменить пароль')}
        {submitting && '...'}
      </Button>
    </form>
  );
};