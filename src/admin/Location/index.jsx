import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  NumberField,
  NumberInput,
  Create,
  maxLength,
  required,
  FunctionField,
} from 'react-admin';

import { ColorInput } from '@/admin/utils/components/ColorInput';

export const LocationList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" label="Имя" />
      <FunctionField
        label="Цвет"
        render={record => (
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '100%',
              backgroundColor: record.color
            }}
          />
        )}
      />
      <NumberField
        label="Приоритет"
        source="priority"
      />
    </Datagrid>
  </List>
);

export const LocationEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberField source="id" />
      <TextInput
        source="name"
        label="Имя"
        validate={[required(), maxLength(64)]}
      />
      <ColorInput
        source="color"
        label="Цвет"
        validate={[required()]}
      />
      <NumberInput
        source="priority"
        label="Приоритет"
      />
    </SimpleForm>
  </Edit>
);

export const LocationCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <TextInput
        source="name"
        label="Имя"
        validate={[required(), maxLength(64)]}
      />
      <ColorInput
        source="color"
        label="Цвет"
        validate={[required()]}
      />
      <NumberInput
        source="priority"
        label="Приоритет"
      />
    </SimpleForm>
  </Create>
);