import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Field,
  useForm,
  useFormState,
} from 'react-final-form';

import { Button } from '@components/student/Button';
import { LabelInput } from '@components/ui/LabelInput';

import * as s from './ChangePasswordForm.sss';

export type ChangePasswordFormProps = {
  className?: string
};

export type FormValues = {
  newPassword: string
  newPasswordRepeat: string
};

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const {
    submitting,
    dirty,
    submitError
  } = useFormState();

  return (
    <div className={className}>
      <div className={s.title}>{t('student~Изменить пароль')}</div>

      <Field<FormValues['newPassword']>
        name="newPassword"
        type="password"
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~Новый пароль')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['newPasswordRepeat']>
        name="newPasswordRepeat"
        type="password"
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~Новый пароль еще раз')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Button
        className={s.submitButton}
        theme="ghostPurple"
        disabled={submitting || !dirty}
        onClick={form.submit}
      >
        {t('student~Сбросить пароль')}
      </Button>

      {
        submitError &&
          <div className={s.error}>{submitError}</div>
      }
    </div>
  );
};