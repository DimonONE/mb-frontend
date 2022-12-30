import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  FormDataConsumer,
  useDataProvider,
  required,
  regex,
  minValue,
  Edit,
} from 'react-admin';
import { weekdayVerbose } from '@constants';

import {
  typeChoices,
  levelChoices,
} from '../constants';

const LessonDataFormPart =props => {
  const { formData } = props;
  const dataProvider = useDataProvider();

  const [template, setTemplate] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(
    () => {
      setLoading(true);
      if (formData.lesson_template_id) {
        dataProvider.getOne('lessontemplate', { id: formData.lesson_template_id })
          .then(({ data }) => { setTemplate(data); setLoading(false); })
          .catch(error => { setError(error); setLoading(false); });
      }
    },
    [formData.lesson_template_id]
  );

  if (error) {
    throw error;
  }

  return (
    <div>
      <div>
        <ReferenceInput
          source="coach_id"
          reference="coach"
          label="Преподаватель"
        >
          <SelectInput
            initialValue={template?.coach_id}
            optionText={
              ({ first_name, last_name }) => (
                `${first_name} ${last_name}`
              )
            }
          />
        </ReferenceInput>
      </div>
      <div>
        <TextInput
          initialValue={template?.time}
          source="time"
          label="Время"
          validate={[
            required(),
            regex(/^\d\d:\d\d(:\d\d)?$/, 'Время должно быть в формате 04:15 (xx:xx)')
          ]}
        />
      </div>
      <div>
        <SelectInput
          initialValue={template?.type}
          source="type"
          label="Тип"
          choices={typeChoices}
          validate={[required()]}
        />
      </div>
      <div>
        <SelectInput
          initialValue={template?.skill_level}
          source="skill_level"
          label="Уровень"
          choices={levelChoices}
          validate={[required()]}
        />
      </div>
      <div>
        <NumberInput
          source="duration"
          label="Длительность (минуты)"
          validate={[required(), minValue(0)]}
          initialValue={template?.duration ?? 60}
        />
      </div>
      <div>
        <NumberInput
          source="booking_places_count"
          label="Места для бронирования"
          validate={[required(), minValue(0)]}
          initialValue={template?.booking_places_count ?? 0}
        />
      </div>
      <div>
        <NumberInput
          source="trial_places_count"
          label="Места для пробников"
          validate={[required(), minValue(0)]}
          initialValue={template?.trial_places_count ?? 0}
        />
      </div>
    </div>
  );
};

const TemplateChooseFormPart =props => {
  const { formData } = props;

  return (
    <>
      {
        formData.hall_id && (
          <>
            <div>
              <ReferenceInput
                label="Шаблон"
                source="lesson_template_id"
                reference="lessontemplate"
                filter={{
                  hall_id: formData.hall
                }}
              >
                <SelectInput
                  resettable={true}
                  optionText={
                    ({ weekday, time, type, level }) => (
                      `${weekdayVerbose[weekday]}, ${time}, ${type} ${level || ''}`
                    )
                  }
                  translateChoice={false}
                />
              </ReferenceInput>
            </div>
            <LessonDataFormPart {...props} />
            <div>
              <DateInput source="day" />
            </div>
          </>
        )
      }
    </>
  );
};

export const LessonCreate = props => {

  return (
    <Create {...props}>
      <SimpleForm submitOnEnter={false}>
        <ReferenceInput source="hall_id" label="Зал" reference="hall">
            <SelectInput
              optionText={
                ({ city, street, number }) => (
                  `${city}, ${street}, ${number}`
                )
              }
            />
        </ReferenceInput>
        <FormDataConsumer>
          {TemplateChooseFormPart}
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

export const LessonEdit = props => {

  return (
    <Edit {...props}>
      <SimpleForm submitOnEnter={false}>
        <ReferenceInput source="hall_id" label="Зал" reference="hall">
          <SelectInput
            optionText={
              ({ city, street, number }) => (
                `${city}, ${street}, ${number}`
              )
            }
          />
        </ReferenceInput>
        <FormDataConsumer>
          {TemplateChooseFormPart}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
