import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  DateField,
  SimpleForm,
  NumberField,
  Create,
  FunctionField,
  ImageField,
  ImageInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const LandingReviewList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <ImageField
        source="reviewer_avatar"
        label="Изображение коментатора"
      />
      <FunctionField
        label="Информация о коментаторе"
        render={record => <div dangerouslySetInnerHTML={{ __html: record.reviewer_info }} />}
      />
      <FunctionField
        label="Отзыв"
        render={record => <div dangerouslySetInnerHTML={{ __html: record.content }} />}
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

export const LandingReviewEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
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
      <ImageField
        source="reviewer_avatar"
        label="Изображение коментатора"
      />
      <ImageInput
        source="reviewer_avatar"
        label="Изменить изображение коментатора"
        accept="image/*"
      >
          <ImageField source="src" title="Новое изображение" />
      </ImageInput>
      <RichTextInput
        source="reviewer_info"
        label="Информация о коментаторе"
      />
      <RichTextInput
        source="content"
        label="Отзыв"
      />
    </SimpleForm>
  </Edit>
);

export const LandingReviewCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <ImageInput
        source="reviewer_avatar"
        label="Related pictures"
        accept="image/*"
      >
          <ImageField source="src" title="Новое изображение" />
      </ImageInput>
      <RichTextInput
        source="reviewer_info"
        label="Информация о коментаторе"
      />
      <RichTextInput
        source="content"
        label="Отзыв"
      />
    </SimpleForm>
  </Create>
);