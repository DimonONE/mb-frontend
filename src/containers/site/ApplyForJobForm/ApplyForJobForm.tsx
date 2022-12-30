import * as React from 'react';
import {
  FormProps,
  withTypes
} from 'react-final-form';

import {
  ApplyForJobForm,
  FormValues,
} from '@components/site/ApplyForJobForm';
import { useSendResumeMutation } from '@graphql';

type Props = {
  className?: string
}


export const ApplyForJobFormContainer: React.FC<Props> = ({
  className
}) => {
  const { Form } = withTypes<FormValues>();
  const [sendResume] = useSendResumeMutation();

  const handleSubmit: FormProps<FormValues>['onSubmit'] = async (values) => {
    await sendResume({
      variables: {
        ...values,
        phoneNumber: values.phone
      }
    });
  }


  return (
    <Form
      onSubmit={handleSubmit}
      render={() => <ApplyForJobForm className={className} />}
    />
  );
}