import * as React from 'react';
import {
  Field,
  useForm,
  useFormState
} from 'react-final-form';
import { useTranslation } from 'react-i18next';

import {
  Modal,
  ModalProps,
} from '@components/student/Modal';
import { LabelInput } from '@components/ui/LabelInput';
import type { FormValues } from '@components/student/PersonalDataForm';
import { Button } from '@components/student/Button';
import { required } from '@utils/validators';

import * as s from './PhoneVerificationModal.sss';

export const PhoneVerificationModal: React.FC<ModalProps> = props => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitting, dirty } = useFormState();

  return (
    <Modal className={s.root} {...props}>
      <div className={s.title}>{t('student~Верификация номера')}</div>

      <Field<FormValues['verificationCode']>
        name="verificationCode"
        validate={required}
        render={
          ({ input, meta }) => (
            <LabelInput
              className={s.input}
              label={t('student~Код')}
              {...input}
              error={meta.error || meta.submitError}
            />
          )
        }
      />

      <Button
        className={s.button}
        disabled={!dirty || submitting}
        onClick={form.submit}
      >
        {t('student~Принять')}
      </Button>
    </Modal>
  );
};