import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as classNames from 'classnames';

import * as s from './AvatarInput.sss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type AvatarInputProps = Omit<InputProps, 'value' | 'type' | 'onChange'> & {
  // Currently set image
  imageUrl?: string
  value?: File
  onChange?: (image: File) => void
  error?: string | string[]
};

export const AvatarInput: React.FC<AvatarInputProps> = ({
  imageUrl,
  value,
  onChange,
  className,
  error,
  ...inputProps
}) => {
  const { t } = useTranslation();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);

  useEffect(
    () => {
      if (value) {
        const reader = new FileReader();
        reader.addEventListener(
          'load',
          ({ target }) => {
            const previewUrl = target?.result;
            if (typeof previewUrl === 'string') {
              setImagePreviewUrl(previewUrl);
            } else {
              throw new Error('Received non string result from file reader');
            }
          }
        );
        reader.readAsDataURL(value);
      } else {
        // If value deleted - set default preview image;
        setImagePreviewUrl(imageUrl);
      }
    },
    [value]
  );

  const onInputChange: InputProps['onChange'] = ({ target }) => {
    if (onChange) {
      onChange(target.files ? target.files[0] : undefined);
    }
  };

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.imageWrapper}>
        {
          imagePreviewUrl &&
            <img
              className={s.image}
              src={imagePreviewUrl}
              alt={t('student~Фото профиля')}
            />
        }
      </div>

      <label className={s.label}>
        {t('student~Изменить')}
        <input
          className={s.input}
          type="file"
          onChange={onInputChange}
          {...inputProps}
        />
      </label>

      {
        error && (
          typeof error === 'string'
            ? <div className={s.error}>{error}</div>
            : error.map((singleError, i) => <div key={i} className={s.error}>{singleError}</div>)
        )
      }
    </div>
  );
};