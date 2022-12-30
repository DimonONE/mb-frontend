import * as React from 'react';
import * as classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Select from 'react-dropdown-select';
import { SelectItemRenderer, SelectProps } from 'react-dropdown-select';

import * as s from './Filter.sss';

type ValueObj = {
  value?: number[] | null
  id?: string | number | null
  name?: string
  placeholder?: string
};

const Item: React.FC<SelectItemRenderer<ValueObj>> = ({
  item,
  methods
}) => (
  <div
    key={item ? item.id : null}
    onClick={() => methods.addItem(item)}
    onKeyPress={() => methods.addItem(item)}
    className={s.option}
  >
    {item ? item.name : null}
  </div>
);

const Content: React.FC<SelectItemRenderer<ValueObj | undefined>> = ({ state, props }) => {
  const { t } = useTranslation();
  return (
    <div className={s.option}>
      <div>
        <span className={s.placeholder}>{props.placeholder}: </span>
        {state.values && state.values[0] && state.values[0].name || t('Выбрать')}
      </div>
    </div>
  );
};

export const Filter: React.FC<Omit<SelectProps<ValueObj> & { queryName?: string }, 'onChange'>> = props => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Select
      itemRenderer={Item}
      contentRenderer={Content}
      {...props}
      options={props.options}
      className={classNames(s.root, props.className)}
      onChange={val => {
        const queryParams = new URLSearchParams(location.search);
        const value = val[0].id || val[0].value;
        if (!value) {
          queryParams.delete(props.queryName);
        } else {
          queryParams.set(
            props.queryName, value && value.toString()
          );
        }
        const newUrl = location.pathname + '?' + queryParams.toString();
        history.push(newUrl);
      }}
    />
  );
};