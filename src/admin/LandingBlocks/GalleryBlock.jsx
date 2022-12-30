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

const imagesCount = 12;

export const GalleryBlockEdit = props => {
  const imageInputs = [];
  for (let i = 1; i <= imagesCount; i++) {
    imageInputs.push(
      <ImageInput
          key={i}
          source={`image_${i}`}
          label={`Фотография ${i}`}
          accept="image/*"
          placeholder={<p>Перенесите фото сюда</p>}
        >
          <ImageField source={`image_${i}`} />
        </ImageInput>
    )
  }

  return (
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

        {imageInputs}
      </SimpleForm>
    </Edit>
  );
};