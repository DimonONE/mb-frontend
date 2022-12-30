import React from 'react';

import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import { phoneNumberValidator } from '@utils/validators';

import LandingBlockToolbar from './LandingBlockToolbar';

export const MainBlockEdit = props => (
  <Edit {...props}>
    <SimpleForm toolbar={<LandingBlockToolbar/>}>
      <TextInput
        source="phone_number"
        label="Номер телефона"
        validate={
          value => {
            if (value && value.startsWith('380')) {
              return phoneNumberValidator(value);
            }

            return 'Введите номер телефона в формате 380681234567';
          }
        }
      />
      <TextInput
        source="right_corner_button"
        label="Кнопка в правом верхнем углу"
      />
      <TextInput
        source="left_center_button"
        label="Левая центральная кнопка"
      />
      {/* Add this later */}
      <ImageInput
        source="main_image"
        label="Фотография на главном екране"
        accept="image/*"
        placeholder={<p>Перенесите фото сюда</p>}
      >
        <ImageField source="main_image" />
      </ImageInput>
      <RichTextInput
        source="subtitle"
        label="Подзаголовок"
      />
    </SimpleForm>
  </Edit>
);