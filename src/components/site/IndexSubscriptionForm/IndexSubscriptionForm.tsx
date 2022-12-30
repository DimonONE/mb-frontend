import * as React from 'react';
import * as classNames from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import {
  withTypes,
  Field,
  FormProps
} from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

import { Card } from '@components/ui/Card';
import { Button } from '@components/student/Button';
import { LabelInput } from '@components/ui/LabelInput';
import { Link } from '@components/ui/Link';
import { required } from '@utils/validators';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { sitePrivacyPolicy } from '@urls';
// import { authRegister } from '@urls';
// import type { LocationState } from '@pages/auth/Register';

import * as s from './IndexSubscriptionForm.sss';

type IndexSubscriptionFormProps = {
  className?: string
};

type FormValues = {
  firstName: string
  lastName: string
  phoneNumber: string
};

type SubscriptionFormProps = FormProps<FormValues>;

export const IndexSubscriptionForm: React.FC<IndexSubscriptionFormProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const { Form } = withTypes<FormValues>();
  const history = useHistory();

  const onSubmit: SubscriptionFormProps['onSubmit'] = async (values) => {
    // const pushState: Required<Pick<LocationState, 'initialFormData'>> = {
    //   initialFormData: values
    // };
    // history.push(
    //   authRegister,
    //   pushState
    // );
    const formData = new FormData();
    formData.append('name', values.firstName);
    formData.append('phone_number', values.phoneNumber);

    const response = await fetch(
      '/trial-lesson-subscribe',
      {
        method: 'POST',
        body: formData
      }
    );

    if (!response.ok) {
      return { [FORM_ERROR]: t('site~Виникла помилка, спробуйте повторити пізніше') };
    }

    return undefined;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={
        ({ handleSubmit, submitSucceeded }) => (
          <form
            className={classNames(s.root, className)}
            onSubmit={handleSubmit}
          >
            <LayoutContainer>
              <div className={s.title}>
                {t('site~Запишись на пробне заняття прямо зараз!')}
              </div>

              <div className={s.description}>
                {t('site~Ми познайомимось з тобою ближче, визначемо твій рівень і підготуємо до заняття')}
              </div>

              <Card className={s.card}>
                <Field<FormValues['firstName']>
                  name="firstName"
                  validate={required}
                  render={
                    ({ input, meta }) => (
                      <LabelInput
                        className={s.input}
                        placeholder={t('login~Вкажіть ваше ім’я')}
                        autoComplete="given-name"
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
                        placeholder={t('login~Номер телефону')}
                        type="tel"
                        autoComplete="tel"
                        {...input}
                        error={meta.touched && meta.error || meta.submitError}
                      />
                    )
                  }
                />

                {/*<Field<FormValues['instagram']>*/}
                {/*  name="instagram"*/}
                {/*  validate={required}*/}
                {/*  render={*/}
                {/*    ({ input, meta }) => (*/}
                {/*      <LabelInput*/}
                {/*        className={s.input}*/}
                {/*        placeholder={t('site~Інстаграм (напишемо тобі в Direct)')}*/}
                {/*        {...input}*/}
                {/*        error={meta.touched && meta.error || meta.submitError}*/}
                {/*      />*/}
                {/*    )*/}
                {/*  }*/}
                {/*/>*/}

                <Button
                  theme="primaryOrange"
                  type="submit"
                  size="L"
                  className={s.button}
                  disabled={submitSucceeded}
                >
                  {
                    submitSucceeded
                    ? t('site~Дякую')
                    : t('site~Запишіть мене!')
                  }
                </Button>

                <div className={s.termsAccept}>
                  <Trans ns="site">
                    Натискаючи цю кнопку я даю згоду на обробку
                    {' '}
                    <Link theme="orange" to={sitePrivacyPolicy}>персональних даних</Link>
                  </Trans>
                </div>
              </Card>
            </LayoutContainer>
          </form>
        )
      }
    />
  );
};