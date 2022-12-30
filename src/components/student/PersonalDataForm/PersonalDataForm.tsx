import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Field,
  useForm,
  useFormState,
} from 'react-final-form';

import { PhoneVerificationModal } from '@components/student/PhoneVerificationModal';
import { LabelInput } from '@components/ui/LabelInput';
import { AvatarInput } from '@components/student/AvatarInput';
import { Button } from '@components/student/Button';
import {
  composeValidators,
  phoneNumberValidator,
  required,
} from '@utils/validators';

import * as s from './PersonalDataForm.sss';

export type FormValues = {
  avatar: File | undefined
  firstName: string
  lastName: string
  instagram: string
  birthday: string
  phoneNumber: string
  verificationCode?: string
};

type PersonalDataFormProps = {
  avatarUrl: string
  requestPhoneVerification: boolean
};

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  avatarUrl,
  requestPhoneVerification
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitting, dirty } = useFormState();

  return (
    <div>
      <PhoneVerificationModal isOpen={requestPhoneVerification} />

      <Field<FormValues['avatar']>
        name="avatar"
        render={
          ({ input, meta }) => (
            <AvatarInput
              className={s.input}
              imageUrl={avatarUrl}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <div className={s.personalDataTitle}>{t('student~Персональные данные')}</div>
      <Field<FormValues['firstName']>
        name="firstName"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~Имя')}
              {...input}
              error={meta.error || meta.submitError}
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
              label={t('student~Фамилия')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['instagram']>
        name="instagram"
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label="Instagram"
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['birthday']>
        name="birthday"
        type="date"
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~День рождения')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Field<FormValues['phoneNumber']>
        name="phoneNumber"
        validate={composeValidators([required, phoneNumberValidator])}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~Номер телефона')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Button
        className={s.submitButton}
        onClick={form.submit}
        disabled={submitting || !dirty || requestPhoneVerification}
      >
        {t('student~Сохранить')}
      </Button>
    </div>
  );
};