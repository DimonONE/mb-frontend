import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  NumberField,
  BooleanField,
  Create,
  maxLength,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  required,
  ImageField,
  ImageInput,
  BooleanInput,
} from 'react-admin';

export const HallList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <BooleanField source="available" label="Доступен?" />
      <TextField source="name" label="Имя" />
      <TextField source="city" label="Город" />
      <TextField source="street" label="Улица" />
      <TextField source="number" label="Номер" />
    </Datagrid>
  </List>
);

export const HallEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberField source="id" />
      <ReferenceArrayInput
        label="Локации"
        source="locations_ids"
        reference="location"
      >
          <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput
        source="name"
        label="Имя"
        validate={maxLength(64)}
      />
      <TextInput
        source="city"
        label="Город"
        validate={maxLength(32)}
      />
      <TextInput
        source="street"
        label="Улица"
        validate={maxLength(48)}
      />
      <TextInput
        source="number"
        label="Номер"
        validate={maxLength(16)}
      />
      <NumberInput
        source="lat"
        validate={[required()]}
      />
      <NumberInput
        source="lng"
        validate={[required()]}
      />
      <ImageField source="image_1" title="Изображение" />
      <ImageInput
        source="image_1"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>

      <ImageField source="image_2" title="Изображение" />
      <ImageInput
        source="image_2"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>

      <ImageField source="image_3" title="Изображение" />
      <ImageInput
        source="image_3"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>
      <BooleanInput
        source="available"
        label="Доступен?"
        default={true}
      />
    </SimpleForm>
  </Edit>
);

export const HallCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <ReferenceArrayInput
        label="Локации"
        source="locations_ids"
        reference="location"
      >
          <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput
        source="name"
        label="Имя"
        validate={maxLength(64)}
      />
      <TextInput
        source="city"
        label="Город"
        validate={maxLength(32)}
      />
      <TextInput
        source="street"
        label="Улица"
        validate={maxLength(48)}
      />
      <TextInput
        source="number"
        label="Номер"
        validate={maxLength(16)}
      />
      <NumberInput
        source="lat"
        validate={[required()]}
      />
      <NumberInput
        source="lng"
        validate={[required()]}
      />
      <ImageInput
        source="image_1"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>
      <ImageInput
        source="image_2"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>
      <ImageInput
        source="image_3"
        accept="image/*"
      >
        <ImageField source="src" title="Изображение" />
      </ImageInput>
      <BooleanInput
        source="available"
        label="Доступен?"
        default={true}
      />
    </SimpleForm>
  </Create>
);