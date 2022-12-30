import React from 'react';

import {
  Edit,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import LandingBlockToolbar from './LandingBlockToolbar';

export const PricesBlockEdit = props => (
  <Edit {...props}>
    <SimpleForm toolbar={<LandingBlockToolbar/>}>
      <TextInput
        source="title"
        label="Заголовок"
      />
      <RichTextInput
        source="description"
        label="Описание"
      />

      <ImageInput
        source="group_lessons_image"
        label="Фотография к груповым абонементам"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="group_lessons_image" />
      </ImageInput>

      <ImageInput
        source="individual_lessons_image"
        label="Фотография к индивидуальным абонементам"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="individual_lessons_image" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);