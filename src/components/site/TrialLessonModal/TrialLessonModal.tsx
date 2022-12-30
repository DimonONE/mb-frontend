import * as React from 'react';
import * as classNames from 'classnames';

import {
  Modal,
  ModalProps
} from '@ui/Modal';
import {
  Trans,
  useTranslation
} from 'react-i18next';

import * as s from './TrialLessonModal.sss';
import {
  composeValidators,
  phoneNumberValidator,
  required
} from '@utils/validators';
import { LabelInput } from '@components/ui/LabelInput';
import {
  Field,
  useForm,
  useFormState
} from 'react-final-form';
import { Button } from '@components/student/Button';
import { Link } from '@components/ui/Link';
import { sitePrivacyPolicy } from '@urls';

type TrialLessonModalProps = ModalProps;

export type FormValues = {
  firstName: string
  phoneNumber: string
}

export const TrialLessonModal: React.FC<TrialLessonModalProps> = ({
  className,
  ...props
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const { submitError, submitting, submitSucceeded } = useFormState<FormValues>();

  return (
    <Modal
      {...props}
      className={classNames(s.root, className)}
      withClose={true}
    >
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await form.submit();
        }}
      >
        <div className={s.title}>
          {
            submitSucceeded
            ? t('site~Дякую')
            : t('site~Пробне заняття')
          }
        </div>

        <div className={classNames({ [s.hidden]: submitSucceeded })}>
          <Field<FormValues['firstName']>
            name="firstName"
            validate={required}
            render={
              ({ input, meta }) => (
                <LabelInput
                  className={s.input}
                  placeholder={t('site~Як вас звати?')}
                  autoComplete="given-name"
                  {...input}
                  error={meta.touched && meta.error || meta.submitError}
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
                  placeholder={t('site~Ваш номер телефону')}
                  autoComplete="tel"
                  {...input}
                  error={meta.touched && meta.error || meta.submitError}
                />
              )
            }
          />
        </div>

        <Button
          type="submit"
          className={classNames(s.submitButton, { [s.hidden]: submitSucceeded })}
          disabled={submitting || submitSucceeded}
        >
          {
            submitSucceeded
            ? t('site~Дякую')
            : t('site~Відправити')
          }
          {submitting && '...'}
        </Button>

        {
          submitError &&
            <div className={s.error}>{submitError}</div>
        }

        <div className={s.termsAccept}>
          <Trans ns="site">
            Натискаючи цю кнопку я даю згоду на обробку
            {' '}
            <Link theme="orange" to={sitePrivacyPolicy}>персональних даних</Link>
          </Trans>
        </div>
      </form>
    </Modal>
  );
}