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

export const AboutUsBlockEdit = props => (
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
        source="left_image"
        label="Фотография слева"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="left_image" />
      </ImageInput>

      <ImageInput
        source="right_image"
        label="Фотография справа"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="right_image" />
      </ImageInput>
      <ImageInput
        source="right_top_image"
        label="Фотография справа сверху"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="right_top_image" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);