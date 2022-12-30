import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  DateField,
  TabbedForm,
  FormTab,
  TextInput,
  Toolbar,
  SaveButton,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PageList = props => (
  <List {...props} sort={{field: 'slug', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <TextField source="slug" />
      <TextField source="title" label="Заголовок" />
      <TextField source="subtitle" label="Подзаголовок" />
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

const PageEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const PageEdit = props => (
  <Edit {...props}>
    <TabbedForm
      submitOnEnter={false}
      toolbar={<PageEditToolbar />}
    >
      <FormTab label="Страница">
        <TextField source="slug" />
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
        />
        <TextInput
          source="subtitle"
          label="Подзаголовок"
          fullWidth={true}
        />
        <RichTextInput
          source="content"
          label="Контент"
          options={{
            modules: {
              toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link', 'image'],
                ['blockquote', 'code-block'],
                [{ 'align': [] }],
              ],
              imageUpload: {
                url: `/admin/api/_upload/page/${encodeURI(props.id)}/content`,
                name: 'file',
                callbackOK: (serverResponse, next) => {
                  next(serverResponse.url);
                }
              }
            }
          }}
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