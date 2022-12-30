import * as React from 'react';
import { useInput } from 'react-admin';

import { ScheduleContainerWithoutClient } from '@IndexLanding/containers/Schedule';

export const ScheduleInput = (props) => {
  const {
    input: { value, onChange }
  } = useInput(props);

  const handleChooseTemplate = (templateId) => {
    const templateIndex = value.indexOf(templateId);

    if (templateIndex !== -1) {
      const valueCopy = [...value];
      valueCopy.splice(templateIndex, 1)
      onChange(valueCopy);
    } else {
      onChange([...value, templateId]);
    }
  }

  return (
    <ScheduleContainerWithoutClient
      chosenTemplatesIds={value || []}
      onChooseTemplate={handleChooseTemplate}
    />
  )
}