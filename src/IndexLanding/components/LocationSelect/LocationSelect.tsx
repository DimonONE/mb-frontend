import * as React from 'react';
import * as classNames from 'classnames';
import Select from 'react-dropdown-select';
import { SelectItemRenderer, SelectProps } from 'react-dropdown-select';

import { LocationLabel } from '@IndexLanding/components/LocationLabel';

import * as s from './LocationSelect.sss';

export type LocationOption = {
  id: number
  name: string
  color: string
};

const Item: React.FC<SelectItemRenderer<LocationOption>> = ({
  item,
  methods
}) => (
  <div
    key={item.id}
    onClick={() => methods.addItem(item)}
    onKeyPress={() => methods.addItem(item)}
  >
    <LocationLabel
      className={s.option}
      color={item.color}
      name={item.name}
    />
  </div>
);

const Content: React.FC<SelectItemRenderer<LocationOption | undefined>> = ({ state }) => (
  <div className={s.option}>
    {
      state.values.length
        ?
          <LocationLabel
            color={state.values[0].color}
            name={state.values[0].name}
          />
        : 'Виберіть локацію'
    }
  </div>
);

export const LocationSelect: React.FC<SelectProps<LocationOption>> = props => (
  <Select
    itemRenderer={Item}
    contentRenderer={Content}
    dropdownHeight="425px"
    {...props}
    options={[
      { id: null, color: '#fff', name: 'Всі локації' },
      ...props.options,
    ]}
    className={classNames(s.root, props.className)}
  />
);