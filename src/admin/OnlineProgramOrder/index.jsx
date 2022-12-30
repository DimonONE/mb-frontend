import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Show,
  SimpleShowLayout,
} from 'react-admin';

export const OnlineProgramOrderList = props => (
  <List {...props} sort={{field: 'id', order: 'DESC'}}>
    <Datagrid rowClick="show" filter>
      <NumberField source="id" />
      <TextField source="first_name" label="Имя" />
      <TextField source="last_name" label="Фамилия" />
      <TextField source="phone_number" label="Номер телефона" />
      <TextField source="instagram_username" label="Инстаграм" />
      <TextField source="program_id" label="Идентификатор програмы" />
      <TextField source="program_name" label="Название програмы" />
      <TextField source="created_at" label="Время создания заказа" />
    </Datagrid>
  </List>
);

export const OnlineProgramOrderShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="first_name" label="Имя" />
      <TextField source="last_name" label="Фамилия" />
      <TextField source="phone_number" label="Номер телефона" />
      <TextField source="instagram_username" label="Инстаграм" />
      <TextField source="program_id" label="Идентификатор програмы" />
      <TextField source="program_name" label="Название програмы" />
      <TextField source="callback" label="Liqpay callback" />
      <TextField source="created_at" label="Время создания заказа" />
    </SimpleShowLayout>
  </Show>
);
