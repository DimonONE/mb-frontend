import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  SimpleForm,
  NumberField,
  Create,
  FunctionField,
  ReferenceManyField,
  ReferenceField,
  SelectField,
  BooleanField,
} from 'react-admin';

import {
  typeChoices,
  weekdayChoices
} from '../constants';
import { ScheduleInput } from '../utils/components/ScheduleInput';

export const GroupList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <ReferenceManyField label="Comments by" reference="lessontemplate" target="group_id">
        <Datagrid>
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
      </ReferenceManyField>
    </Datagrid>
  </List>
);

export const GroupEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberField source="id" />
    </SimpleForm>
  </Edit>
);

export const GroupCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <ScheduleInput source="lesson_template_ids" />
    </SimpleForm>
  </Create>
);