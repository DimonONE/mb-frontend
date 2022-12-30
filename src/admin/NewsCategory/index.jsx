import * as React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TabbedForm,
  FormTab,
  required,
  maxLength,
  NumberField,
  TextField,
  TextInput,
} from 'react-admin';

const AddFormPart = () => (
  <>
    <div>
      <TextInput
        source="name"
        validate={[required(), maxLength(255)]}
        label="Название"
        helperText={
          'URL на категорию формируется на основе названия при создании ' +
          'категории и в дальнейшем не изменяется'
        }
      />
    </div>
    <div>
      <TextInput
        source="description"
        validate={[maxLength(1024)]}
        multiline={true}
        label="Описание"
      />
    </div>
  </>
);

const AddFormSeoPart = () => (
  <>
    <div>
      <TextInput
        source="meta_title"
        label="SEO title"
        validate={[required(), maxLength(255)]}
        multiline={true}
      />
    </div>
    <div>
      <TextInput
        source="meta_description"
        label="SEO description"
        validate={[required(), maxLength(1024)]}
        multiline={true}
      />
    </div>
  </>
);

export const NewsCategoryList = props => (
  <List {...props} >
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="slug" />
      <TextField
        source="name"
        label="Название"
      />
      <TextField
        source="description"
        label="Описание"
      />
      <TextField
        source="meta_title"
        label="SEO title"
      />
      <TextField
        source="meta_description"
        label="SEO description"
      />
    </Datagrid>
  </List>
);

export const NewsCategoryCreate = props => (
  <Create {...props}>
    <TabbedForm  submitOnEnter={false}>
      <FormTab label="Категория">
        <AddFormPart />
      </FormTab>
      <FormTab label="SEO">
        <AddFormSeoPart />
      </FormTab>
    </TabbedForm>
  </Create>
);

export const NewsCategoryEdit = props => (
  <Edit {...props}>
    <TabbedForm  submitOnEnter={false}>
      <FormTab label="Категория">
        <NumberField source="id" />
        <TextField source="slug" />
        <AddFormPart />
      </FormTab>
      <FormTab label="SEO">
        <AddFormSeoPart />
      </FormTab>
    </TabbedForm>
  </Edit>
);
