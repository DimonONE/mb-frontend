import * as React from 'react';
import * as classNames from 'classnames';
import Select, { SelectItemRenderer } from 'react-dropdown-select';
import { SelectProps } from 'react-dropdown-select';

import { LessonType } from '@graphql';

import * as s from './LessonTypeSelect.sss';

export type LessonTypeOption = {
  value: LessonType | null
  label: string
};

export const options = [
  { value: null, label: 'Всі види занять' },
  { value: LessonType.Primary, label: 'Балет' },
  { value: LessonType.Pointe, label: 'Пуанти' },
  { value: LessonType.Stretching, label: 'Стретчинг' },
  { value: LessonType.Parter, label: 'Партер' },
];

const Item: React.FC<SelectItemRenderer<LessonTypeOption>> = ({
  item,
  methods
}) => (
  <div
    key={item.value}
    className={s.option}
    onClick={() => methods.addItem(item)}
    onKeyPress={() => methods.addItem(item)}
  >
    {item.label}
  </div>
);

const Content: React.FC<SelectItemRenderer<LessonTypeOption>> = ({ state }) => (
  <div className={s.option}>
    {state.values[0].label}
  </div>
);

export const LessonTypeSelect: React.FC<Omit<SelectProps<LessonTypeOption>, 'options'>> = props => (
  <Select
    {...props}
    itemRenderer={Item}
    contentRenderer={Content}
    options={options}
    className={classNames(s.root, props.className)}
  />
);