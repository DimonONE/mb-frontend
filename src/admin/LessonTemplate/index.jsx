import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  NumberField,
  Create,
  BooleanField,
  SelectField,
  ReferenceField,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  required,
  minValue,
  regex,
  FunctionField,
} from 'react-admin';

import {
  typeChoices,
  levelChoices,
  weekdayChoices
} from '../constants';

export const LessonTemplateList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <BooleanField
        source="available"
        label="Доступен"
      />
      <ReferenceField
        label="Преподаватель"
        source="coach_id"
        reference="coach"
      >
        <FunctionField
          render={
            (record) => (
              `${record.first_name} ${record.last_name}` +
              `${record.is_coach ? '' : '*'}`
            )
          }
        />
      </ReferenceField>
      <ReferenceField
        label="Зал"
        source="hall_id"
        reference="hall"
      >
        <TextField source="name" />
      </ReferenceField>
      <SelectField
        source="weekday"
        label="День"
        choices={weekdayChoices}
      />
      <TextField
        source="time"
        label="Время"
      />
      <SelectField
        source="type"
        label="Тип"
        choices={typeChoices}
      />
      <TextField
        source="skill_level"
        label="Уровень"
      />
      <NumberField
        source="duration"
        label={
          <>
            Длительность
            <br/>
            (минуты)
          </>
        }
      />
    </Datagrid>
  </List>
);

export const LessonTemplateEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberField source="id" />
      <ReferenceInput
        source="coach_id"
        reference="coach"
        label="Преподаватель"
      >
        <SelectInput
          optionText={
            ({ first_name, last_name }) => (
              `${first_name} ${last_name}`
            )
          }
        />
      </ReferenceInput>
      <ReferenceInput
        source="hall_id"
        reference="hall"
        label="Зал"
      >
        <SelectInput
          optionText="name"
          validate={[required()]}
        />
      </ReferenceInput>
      <SelectInput
        source="weekday"
        label="День"
        choices={weekdayChoices}
        validate={[required()]}
      />
      <TextInput
        source="time"
        label="Время"
        validate={[
          required(),
          regex(/^\d\d:\d\d(:\d\d)?$/, 'Время должно быть в формате 04:15 (xx:xx)')
        ]}
      />
      <SelectInput
        source="type"
        label="Тип"
        choices={typeChoices}
        validate={[required()]}
      />
      <SelectInput
        source="skill_level"
        label="Уровень"
        choices={levelChoices}
        validate={[required()]}
      />
      <NumberInput
        source="duration"
        label="Длительность (минуты)"
        validate={[required(), minValue(0)]}
        initialValue={60}
      />
      <NumberInput
        source="booking_places_count"
        label="Места для бронирования"
        validate={[required(), minValue(0)]}
        initialValue={0}
      />
      <NumberInput
        source="trial_places_count"
        label="Места для пробников"
        validate={[required(), minValue(0)]}
        initialValue={0}
      />
      <BooleanInput
        source="available"
        label="Доступен"
      />
    </SimpleForm>
  </Edit>
);

export const LessonTemplateCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <ReferenceInput
        source="coach_id"
        reference="coach"
        label="Преподаватель"
      >
        <SelectInput
          optionText={
            ({ first_name, last_name }) => (
              `${first_name} ${last_name}`
            )
          }
        />
      </ReferenceInput>
      <ReferenceInput
        source="hall_id"
        reference="hall"
        label="Зал"
      >
        <SelectInput
          optionText="name"
          validate={[required()]}
        />
      </ReferenceInput>
      <SelectInput
        source="weekday"
        label="День"
        choices={weekdayChoices}
        validate={[required()]}
      />
      <TextInput
        source="time"
        label="Время"
        validate={[
          required(),
          regex(/^\d\d:\d\d(:\d\d)?$/, 'Время должно быть в формате 04:15 (xx:xx)')
        ]}
      />
      <SelectInput
        source="type"
        label="Тип"
        choices={typeChoices}
        validate={[required()]}
      />
      <SelectInput
        source="skill_level"
        label="Уровень"
        choices={levelChoices}
        validate={[required()]}
      />
      <NumberInput
        source="duration"
        label="Длительность (минуты)"
        validate={[required(), minValue(0)]}
        initialValue={60}
      />
      <NumberInput
        source="booking_places_count"
        label="Места для бронирования"
        validate={[required(), minValue(0)]}
        initialValue={0}
      />
      <NumberInput
        source="trial_places_count"
        label="Места для пробников"
        validate={[required(), minValue(0)]}
        initialValue={0}
      />
      <BooleanInput
        source="available"
        label="Доступен"
      />
    </SimpleForm>
  </Create>
);
