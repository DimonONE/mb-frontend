import * as React from 'react';
import { FORM_ERROR } from 'final-form';
import { useTranslation } from 'react-i18next';


import {
  FormValues,
  TrialLessonModal
} from '@components/site/TrialLessonModal';
import {
  FormProps,
  withTypes
} from 'react-final-form';
import { ModalProps } from '@ui/Modal';
import { safeFbq } from '@utils/analytics';

type TrialLessonModalContainerProps = ModalProps & {
  isOpen: boolean
  onRequestClose: () => void
  className?: string
}

export const TrialLessonModalContainer: React.FC<TrialLessonModalContainerProps> = ({
  onRequestClose,
  ...props
}) => {
  const { t } = useTranslation();
  const { Form } = withTypes<FormValues>();

  const onSubmit: FormProps<FormValues>['onSubmit'] = async ({ firstName, phoneNumber }) => {
    const formData = new FormData();
    formData.append('name', firstName);
    formData.append('phone_number', phoneNumber);

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

    safeFbq('track', 'Lead');
    return undefined;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={() => (
        <TrialLessonModal
          onRequestClose={onRequestClose}
          {...props}
        />
      )}
    />
  );
}