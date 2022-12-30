import * as React from 'react';
import {
  List,
  Datagrid,
  BooleanField,
  NumberField,
  DateField,
  Create,
  Edit,
  SimpleForm,
  NumberInput,
  BooleanInput,
  TextField,
  TextInput,
  required,
} from 'react-admin';

export const LessonSubscriptionList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <BooleanField
        source="available"
        label="Доступен?"
      />
      <BooleanField
        source="is_trial"
        label="Пробный?"
      />
      <BooleanField
        source="for_pointe"
        label="Только пуанты?"
      />
      <NumberField source="id" />
      <NumberField
        source="price"
        label="Цена"
      />
      <NumberField
        source="lessons_count"
        label="Количество уроков"
      />
      <NumberField
        source="moves_count"
        label="Количество переносов"
      />
      <NumberField
        source="freeze_days_count"
        label="Количество дней заморозок"
      />
      <TextField
        source="description"
        label="Описание"
      />
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
    </Datagrid>
  </List>
);

export const LessonSubscriptionCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberInput
        source="lessons_count"
        label="Количество уроков"
        validate={[required()]}
      />
      <NumberInput
        source="moves_count"
        label="Количество переносов"
        validate={[required()]}
      />
      <NumberInput
        source="freeze_days_count"
        label="Количество дней заморозок"
        validate={[required()]}
      />
      <NumberInput
        source="price"
        label="Цена"
        validate={[required()]}
      />
      <BooleanInput
        source="available"
        initialValue={false}
        label="Доступен"
      />
      <BooleanInput
        source="for_pointe"
        initialValue={false}
        label="Только пуанты"
      />
      <BooleanInput
        source="is_trial"
        initialValue={false}
        label="Пробный"
        helperText={
          'Одновременно может быть только один пробный абонемент для пуант и ' +
          'один для других типов занятий, если вы создадите новый или активируете ' +
          'существующий пробный абонемент, то старый активный пробный абонемент ' +
          'для того же типа занятий будет деактивирован.'
        }
      />
      <TextInput
        source="description"
        multiline={true}
        label="Описание"
      />
    </SimpleForm>
  </Create>
);

export const LessonSubscriptionEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <BooleanInput
        source="available"
        initialValue={false}
        label="Доступен"
      />
      <BooleanField
        source="is_trial"
        label="Пробный?"
      />
      <div>
        Одновременно может быть только один пробный абонемент для пуант и
        один для других типов занятий, если вы создадите новый или активируете
        существующий пробный абонемент, то старый активный пробный абонемент
        для того же типа занятий будет деактивирован.
      </div>
      <TextInput
        source="description"
        multiline={true}
        label="Описание"
      />
      <BooleanField
        source="for_pointe"
        label="Только пуанты?"
      />
      <NumberField source="id" />
      <NumberField
        source="price"
        label="Цена"
      />
      <NumberField
        source="lessons_count"
        label="Количество уроков"
      />
      <NumberField
        source="moves_count"
        label="Количество переносов"
      />
      <NumberField
        source="freeze_days_count"
        label="Количество дней заморозок"
      />
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
    </SimpleForm>
  </Edit>
);
