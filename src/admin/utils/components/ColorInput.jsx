import * as React from 'react';
import {
  useInput,
  InputHelperText
} from 'react-admin';
import { SketchPicker } from 'react-color';

export const ColorInput = (props) => {
  const { input, meta } = useInput(props);

  return (
    <div>
      <SketchPicker
        {...input}
        color={input.value}
        onChange={
          (color) => input.onChange(color.hex)
        }
      />
      {
        meta.error &&
        <InputHelperText
            touched={meta.touched}
            error={meta.error}
            // helperText={'helperText'}
        />
      }
    </div>
  )
};

export default ColorInput;