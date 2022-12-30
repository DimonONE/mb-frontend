import React from 'react';
import {
  SaveButton,
  Toolbar,
  useUpdate,
  useNotify,
  useRedirect
} from 'react-admin';
import { useFormState } from 'react-final-form';

const SaveJSONInOneFieldButton = props => {
  const [update] = useUpdate('landingblock', props.record.id);
  const redirectTo = useRedirect();
  const notify = useNotify();
  const {basePath, redirect} = props;

  const formState = useFormState();
  const handleClick = React.useCallback(() => {
    if (!formState.valid) {
      return;
    }

    update(
      {
        payload: {data: {data: formState.values}},
      },
      {
        onSuccess: ({data: newRecord}) => {
          notify('Успешно сохранено');
        },
      }
    );
  }, [
    formState.valid,
    formState.values,
    update,
    notify,
    redirectTo,
    redirect,
    basePath,
  ]);

  return <SaveButton {...props} handleSubmitWithRedirect={handleClick}/>;
};


const LandingBlockToolbar = props => (
  <Toolbar {...props} >
    <SaveJSONInOneFieldButton
      redirect={false}
      submitOnEnter={false}
      variant="text"
    />
  </Toolbar>
);

export default LandingBlockToolbar;