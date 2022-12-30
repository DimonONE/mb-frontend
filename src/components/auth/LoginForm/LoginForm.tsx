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
import { authRegister, authResetPassword } from '@urls';

import * as s from './LoginForm.sss';

export type FormValues = {
  login: string
  password: string
};

type LoginFormProps = {
  className?: string
};

export const LoginForm: React.FC<LoginFormProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitError, submitting } = useFormState();

  return (
    <form
      className={classNames(s.root, className)}
      onSubmit={e => {
        e.preventDefault();
        form.submit();
      }}
    >
      <div className={s.title}>{t('login~Войти')}</div>

      <div className={s.newbieNotify}>
        <div>{t('login~Впервые в Mary Ballet?')}</div>
        <Link
          theme="orange"
          to={authRegister}
        >
          {t('login~Создайте аккаунт')}
        </Link>
      </div>

      <Field<FormValues['login']>
        name="login"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите номер телефона')}
              type="tel"
              id="login"
              autoComplete="tel"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['password']>
        name="password"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              placeholder={t('login~Введите пароль')}
              id="current-password"
              autoComplete="current-password"
              type="password"
              {...input}
              error={meta.touched && meta.error || meta.submitError}
            />
          )
        }
      />

      <div className={s.resetPasswordLinkOuter}>
        <Link theme="orange" to={authResetPassword}>
          {t('login~Восстановить пароль')}
        </Link>
      </div>

      <Button
        className={s.loginButton}
        theme="primaryOrange"
        type="submit"
        disabled={submitting}
      >
        {t('login~Войти')}
        {submitting && '...'}
      </Button>

      {
        submitError &&
          <div className={s.error}>{submitError}</div>
      }

      <OrDivider className={s.divider}/>

      <SocialAuthButtonGroup />
    </form>
  );
};