import { isPhoneNumberValid } from '@utils/common';
import { i18n } from '@utils/i18n';

type Validator = (value: string | null | undefined) => string | null;

export const composeValidators = (validators: Validator[]) => {

  const validator: Validator = value => {
    for (const validate of validators) {
      const validationResult = validate(value);
      if (validationResult) {
        return validationResult;
      }
    }

    return null;
  };

  return validator;
};

export const phoneNumberValidator: Validator = value => {
  if (value && !isPhoneNumberValid(value)) {
    return i18n.t('Введите номер телефона в формате 380123456789');
  }

  return null;
};

export const required: Validator = value => {
  if (!value) {
    return i18n.t('Поле обязательно для заполнения');
  }

  return null;
};