import * as React from 'react';
import * as classNames from 'classnames';

import * as s from './ApplyForJobForm.sss';
import { required } from '@utils/validators';
import { LabelInput } from '@components/ui/LabelInput';
import {
  Field,
  useForm,
  useFormState
} from 'react-final-form';
import {
  Trans,
  useTranslation
} from 'react-i18next';
import Dropzone from 'react-dropzone';
import UploadIcon from '@static/svg/upload.svg';
import { Button } from '@components/student/Button';
import { Link } from '@components/ui/Link';
import { sitePrivacyPolicy } from '@urls';

export type FormValues = {
  firstName: string
  email: string
  phone: string
  resume: File
}

type ApplyForJobFormProps = {
  className?: string
}

export const ApplyForJobForm: React.FC<ApplyForJobFormProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const form = useForm();
  const {
    submitting,
    submitError,
    submitSucceeded
  } = useFormState();

  return (
    <form
      className={classNames(s.root, className)}
      onSubmit={
        async e => {
          e.preventDefault();
          await form.submit();
        }
      }
    >
      <div className={s.inputs}>
        <Field<FormValues['firstName']>
          name="firstName"
          validate={required}
          render={
            ({ input, meta }) => (
              <LabelInput
                className={s.input}
                placeholder={t('login~Ім’я')}
                autoComplete="given-name"
                {...input}
                error={meta.touched && meta.error || meta.submitError}
              />
            )
          }
        />
        <Field<FormValues['email']>
          name="email"
          validate={required}
          render={
            ({ input, meta }) => (
              <LabelInput
                className={s.input}
                type="email"
                placeholder={t('login~Електронна пошта')}
                autoComplete="email"
                {...input}
                error={meta.touched && meta.error || meta.submitError}
              />
            )
          }
        />
        <Field<FormValues['phone']>
          name="phone"
          validate={required}
          render={
            ({ input, meta }) => (
              <LabelInput
                className={s.input}
                type="tel"
                placeholder={t('login~Номер телефону')}
                autoComplete="tel"
                {...input}
                error={meta.touched && meta.error || meta.submitError}
              />
            )
          }
        />

        <Field<FormValues['resume']>
          name="resume"
          render={
            ({ input }) => (
              <Dropzone
                accept=".pdf"
                maxFiles={1}
                multiple={false}
                // 10 Mb
                maxSize={10 * 1000000}
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
                        : t('site~Прикріпити резюме')
                      }
                    </div>
                  </div>
                )}
              </Dropzone>
            )
          }
        />
      </div>

      <Button
        theme="primaryOrange"
        type="submit"
        size="L"
        disabled={submitting || submitSucceeded}
        className={s.button}
      >
        {
          submitSucceeded
          ? 'Дякую!'
          : <>
              {t('site~Хочу у вашу балетну труппу')}
              {submitting && '...'}
            </>
        }
      </Button>
      {
        submitError &&
          <div className={s.error}>{submitError}</div>
      }

      <div className={s.termsAccept}>
        <Trans ns="site">
          Натискаючи цю кнопку я даю згоду на обробку
          {' '}
          <Link theme="white" to={sitePrivacyPolicy}>персональних даних</Link>
        </Trans>
      </div>
    </form>
  );
}