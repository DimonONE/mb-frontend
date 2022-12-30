import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Field, useForm, useFormState } from 'react-final-form';

import { Link } from '@components/ui/Link';
import { Button } from '@components/student/Button';
import { OrDivider } from '@components/common/OrDivider';
import { required } from '@utils/validators';
import { LabelInput } from '@components/ui/LabelInput';
import { SocialAuthButtonGroup } from '@components/auth/SocialAuthButtonGroup';
import { authLogin } from '@urls';

import * as s from './RegisterForm.sss';

export type FormValues = {
  firstName: string
  lastName: string
  phoneNumber: string
};

type RegisterFormProps = {
  className?: string
};

export const RegisterForm: React.FC<RegisterFormProps> = ({
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
      <div className={s.title}>{t('login~Создайте аккаунт')}</div>

      <div className={s.newbieNotify}>
        <div>{t('login~Уже есть аккаунт?')}</div>
        <Link
          theme="orange"
          to={authLogin}
        >
          {t('login~Войти')}
        </Link>
      </div>

      <Field<FormValues['firstName']>
        name="firstName"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите имя')}
              autoComplete="given-name"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['lastName']>
        name="lastName"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите фамилию')}
              autoComplete="family-name"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['phoneNumber']>
        name="phoneNumber"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите номер телефона')}
              type="tel"
              autoComplete="tel"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Button
        className={s.loginButton}
        theme="primaryOrange"
        type="submit"
        disabled={submitting}
      >
        {t('login~Зарегистрироваться')}
        {submitting && '...'}
      </Button>

      <OrDivider className={s.divider}/>

      <SocialAuthButtonGroup />
    </form>
  );
};