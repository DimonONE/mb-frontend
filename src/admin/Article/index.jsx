import * as React from 'react';
import {
  Create,
  Edit,
  TabbedForm,
  FormTab,
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  TextInput,
  ImageInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageField,
  maxLength,
  required,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const AddFormPart = (props) => (
  <>
    <div>
      <TextInput
        source="title"
        label="Заголовок"
        validate={[required(), maxLength(255)]}
      />
    </div>
    <ReferenceInput
      label="Категория"
      source="news_category_id"
      reference="newscategory"
      validate={[required()]}
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ImageInput
      label="Изображение"
      helpText={
        "Фото в размере 730x395"
      }
      source="image"
      accept="image/*"
      validate={[required()]}
    >
      <ImageField source="src" title="Изображение" />
    </ImageInput>
    <div style={{ minHeight: '300px' }}>
      <RichTextInput
        source="content"
        label="Контент"
        options={{
          modules: {
            toolbar: [
              [{ 'header': [2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['blockquote', 'code-block'],
              [{ 'align': [] }],
            ],
            imageUpload: {
              url: `/admin/api/_upload/article/${encodeURI(props.id || 'new')}/content`,
              name: 'file',
              callbackOK: (serverResponse, next) => {
                next(serverResponse.url);
              }
            }
          }
        }}
        validate={[required()]}
      />
    </div>
    <div>
      <TextInput
        source="author"
        label="Автор"
        validate={[required(), maxLength(128)]}
      />
    </div>
    <div>
      <ReferenceArrayInput
        label="Теги"
        source="article_tag_ids"
        reference="articletag"
      >
          <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
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


export const ArticleList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="slug" />
      <TextField source="title" label="Заголовок" />
      <ImageField source="image" />
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

export const ArticleCreate = props => (
  <Create {...props}>
    <TabbedForm  submitOnEnter={false}>
      <FormTab label="Статья">
        <AddFormPart {...props} />
      </FormTab>
      <FormTab label="SEO">
        <AddFormSeoPart />
      </FormTab>
    </TabbedForm>
  </Create>
);

export const ArticleEdit = props => (
  <Edit {...props}>
    <TabbedForm  submitOnEnter={false}>
      <FormTab label="Статья">
        <AddFormPart {...props} />
      </FormTab>
      <FormTab label="SEO">
        <AddFormSeoPart />
      </FormTab>
    </TabbedForm>
  </Edit>
);
