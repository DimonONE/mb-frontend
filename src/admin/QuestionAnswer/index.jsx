import React from 'react';
import {
  Edit,
  List,
  Datagrid,
  TextField,
  DateField,
  SimpleForm,
  TextInput,
  NumberField,
  Create,
  FunctionField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const QuestionAnswerList = props => (
  <List {...props} sort={{field: 'id', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="question" label="Вопрос" />
      <FunctionField
        label="Ответ"
        render={record => <div dangerouslySetInnerHTML={{ __html: record.answer }} />}
      />
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
      <DateField
        source="modified_at"
        label="Дата изменения"
        showTime={true}
      />
    </Datagrid>
  </List>
);

export const QuestionAnswerEdit = props => (
  <Edit {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <NumberField source="id" />
      <DateField
        source="created_at"
        label="Дата создания"
        showTime={true}
      />
      <DateField
        source="modified_at"
        label="Дата изменения"
        showTime={true}
      />
      <TextInput
        source="question"
        label="Вопрос"
      />
      <RichTextInput
        source="answer"
        label="Ответ"
      />
    </SimpleForm>
  </Edit>
);

export const QuestionAnswerCreate = props => (
  <Create {...props}>
    <SimpleForm
      submitOnEnter={false}
    >
      <TextInput
        source="question"
        label="Вопрос"
      />
      <RichTextInput
        source="answer"
        label="Ответ"
      />
    </SimpleForm>
  </Create>
);