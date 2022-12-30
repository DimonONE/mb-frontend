import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  TextInput,
  NumberField,
  Create,
  ReferenceField,
  BooleanField,
  DateField,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  FormTab,
  TabbedForm,
  required,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const AlbumList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <BooleanField source="visible" label="Видимый" />
      <TextField source="title" label="Заголовок" />
      <ReferenceField
        label="Категория"
        source="album_topic_id"
        reference="albumtopic"
      >
          <TextField source="title" />
      </ReferenceField>
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

export const AlbumEdit = props => (
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
        <ReferenceInput
          label="Обложка"
          source="cover_image_id"
          reference="albumimage"
          filter={{
            album_id: props.id,
          }}
        >
          <SelectInput
            optionText={
              (image) => (
                <img
                  src={image.gallery_thumbnail}
                  style={{ width: '200px' }}
                  alt="..."
                />
              )
            }
            translateChoice={false}
          />
        </ReferenceInput>

        <TextInput
          source="title"
          label="Заголовок"
          validate={[required()]}
        />
        <RichTextInput
          source="subtitle"
          label="Подзаголовок"
        />
        <ReferenceInput
          label="Категория"
          source="album_topic_id"
          reference="albumtopic"
        >
          <SelectInput
            optionText="title"
            validate={[required()]}
          />
        </ReferenceInput>
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

export const AlbumCreate = props => (
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
          source="subtitle"
          label="Подзаголовок"
        />
        <ReferenceInput
          label="Категория"
          source="album_topic_id"
          reference="albumtopic"
        >
          <SelectInput
            optionText="title"
            validate={[required()]}
          />
        </ReferenceInput>
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