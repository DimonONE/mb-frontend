import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  TextInput,
  NumberField,
  Create,
  BooleanField,
  DateField,
  BooleanInput,
  FunctionField,
  FormTab,
  TabbedForm,
  required,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const AlbumTopicList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <BooleanField source="visible" label="Видимый" />
      <TextField source="title" label="Заголовок" />
      <FunctionField
        label="Описание"
        render={record => <div dangerouslySetInnerHTML={{ __html: record.description }} />}
      />
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
      <DateField
        source="modified_at"
        label="Дата изменения"
        showTime={true}
      />
    </Datagrid>
  </List>
);

export const AlbumTopicEdit = props => (
  <Edit {...props}>
    <TabbedForm
      submitOnEnter={false}
    >
      <FormTab label="Основное">
        <NumberField source="id" />
        <DateField
          source="created_at"
          label="Дата создания"
          showTime={true}
        />
        <DateField
          source="modified_at"
          label="Дата изменения"
          showTime={true}
        />
        <TextInput
          source="title"
          label="Заголовок"
          validate={[required()]}
        />
        <RichTextInput
          source="description"
          label="Описание"
        />
        <BooleanInput
          source="visible"
          label="Доступен"
        />
      </FormTab>
      <FormTab label="SEO">
        <TextInput
          source="seo_title"
          label="SEO title"
          multiline={true}
        />
        <TextInput
          source="seo_description"
          label="SEO description"
          multiline={true}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const AlbumTopicCreate = props => (
  <Create {...props}>
    <TabbedForm
      submitOnEnter={false}
    >
      <FormTab label="Основное">
        <TextInput
          source="title"
          label="Заголовок"
          validate={[required()]}
        />
        <RichTextInput
          source="description"
          label="Описание"
        />
        <BooleanInput
          source="visible"
          label="Доступен"
        />
      </FormTab>
      <FormTab label="SEO">
        <TextInput
          source="seo_title"
          label="SEO title"
          multiline={true}
        />
        <TextInput
          source="seo_description"
          label="SEO description"
          multiline={true}
        />
      </FormTab>
    </TabbedForm>
  </Create>
);