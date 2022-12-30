import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  NumberField,
  Create,
  BooleanField,
  DateField,
  BooleanInput,
  ImageField,
  ImageInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  required,
} from 'react-admin';

export const AlbumImageList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <BooleanField source="visible" label="Видимый" />
      <ImageField source="original" label="Изображение" />
      <ReferenceField
        label="Альбом"
        source="album_id"
        reference="album"
      >
        <TextField source="title" />
      </ReferenceField>
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
    </Datagrid>
  </List>
);

export const AlbumImageEdit = props => (
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
      <ImageField source="original" />
      <ReferenceInput
        label="Альбом"
        source="album_id"
        reference="album"
      >
        <SelectInput
          optionText="title"
          validate={[required()]}
        />
      </ReferenceInput>
      <TextInput
        source="alt"
        label="alt атрибут"
        multiline={true}
      />
      <TextInput
        source="title"
        label="title атрибут"
        multiline={true}
      />
      <BooleanInput
        source="visible"
        label="Доступен"
      />
    </SimpleForm>
  </Edit>
);

export const AlbumImageCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <ImageInput
        source="original"
        label="Изображение"
        accept="image/*"
        validate={[required()]}
      >
        <ImageField
          source="src"
          title="Изображение"
        />
      </ImageInput>
      <ReferenceInput
        label="Альбом"
        source="album_id"
        reference="album"
      >
        <SelectInput
          optionText="title"
          validate={[required()]}
        />
      </ReferenceInput>
      <TextInput
        source="alt"
        label="alt атрибут"
        multiline={true}
      />
      <TextInput
        source="title"
        label="title атрибут"
        multiline={true}
      />
      <BooleanInput
        source="visible"
        label="Доступен"
      />
    </SimpleForm>
  </Create>
);