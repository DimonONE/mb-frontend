import * as React from 'react';
import { useState } from 'react';
import {
  List,
  Datagrid,
  NumberField,
  TextField,
  BooleanField,
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  required,
  Edit,
  TabbedForm,
  FormTab,
  ReferenceManyField,
  ReferenceField,
  FunctionField,
  DateField,
  useNotify,
  useRefresh,
} from 'react-admin';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import { phoneNumberValidator } from '@utils/validators';
import { LessonPurchaseCreate } from '../LessonPurchase';
import {
  scheduleTabContent,
} from './ScheduleTab';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="first_name" label="Имя" />
      <TextField source="last_name" label="Фамилия" />
      <TextField source="phone_number" label="Номер телефона" />
      <TextField source="instagram" label="Инстаграм" />
      <BooleanField source="is_coach" label="Преподаватель ?" />
    </Datagrid>
  </List>
);

const createTabFields = [
  <TextInput
    source="first_name"
    label="Имя"
    validate={[required()]}
  />,
  <TextInput
    source="last_name"
    label="Фамилия"
    validate={[required()]}
  />,
  <TextInput
    source="phone_number"
    label="Номер телефона"
    validate={[required(), phoneNumberValidator]}
  />,
  <TextInput
    source="instagram"
    label="Инстаграм"
  />,
  <TextInput
    source="password"
    label="Пароль"
    helpText="Оставьте поле пустым и пароль будет сгенерирован автоматически"
  />,
  <BooleanInput
    source="send_sms_with_password"
    default={false}
    label="Отправить пароль по смс ?"
  />,
  <BooleanInput
    source="is_coach"
    label="Преподаватель ?"
  />,
  <BooleanField
    source="is_trial_ballet_lesson_available"
    label="Доступно пробное балет"
  />,
  <BooleanField
    source="is_trial_pointe_lesson_available"
    label="Доступно пробное пуанты"
  />
];

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm submitOnEnter={false}>
      {createTabFields}
    </SimpleForm>
  </Create>
);

export const UserEdit = props => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const notify = useNotify();
  const refresh = useRefresh();

  const onSubscriptionCreated = () => {
    notify('Подписка успешно создана');
    refresh();
    setIsSubscriptionModalOpen(false);
  };

  return (
    <Edit {...props}>
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Пользователь">
          {createTabFields}
        </FormTab>
        <FormTab label="Подписки">
          <div>
            <Button
              variant="contained"
              onClick={() => setIsSubscriptionModalOpen(true)}
            >
              Создать запись
            </Button>
            <Dialog
              open={isSubscriptionModalOpen}
              onClose={() => setIsSubscriptionModalOpen(false)}
              fullWidth={true}
              maxWidth="lg"
            >
              <DialogTitle>Создание записи</DialogTitle>
              <DialogContent>
                <LessonPurchaseCreate
                  {...{
                    ...props,
                    onSuccess: onSubscriptionCreated,
                    resource: 'lessonpurchase',
                    basePath: '/lessonpurchase',
                    record: { user_id: props.id }
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
          <ReferenceManyField
            reference="lessonpurchase"
            target="user_id"
            sort={{ field: 'created_at', order: 'DESC' }}
            fullWidth={true}
          >
            <Datagrid>
              <NumberField source="id" />
              <ReferenceField
                label="Абонемент"
                reference="lessonsubscription"
                source="lesson_subscription_id"
              >
                <FunctionField
                  render={
                    record => (
                      <div>
                        <b>Уроков: {record.lessons_count}</b><br/>
                        Переносов: {record.moves_count}<br/>
                        Дней заморозок: {record.freeze_days_count}<br/>
                        <b>Цена: {record.price}</b><br/>
                        Цена за урок: {record.price / record.lessons_count}
                      </div>
                    )
                  }
                />
              </ReferenceField>
              <NumberField
                source="lessons_left"
                label={(
                  <div>
                    Изначально доступно<br/>
                    уроков с абонемента
                  </div>
                )}
              />
              <BooleanField
                label="Заморозка использована?"
                source="freeze_used"
              />
              <NumberField
                source="available_movements"
                label="Доступно переносов"
              />
              <DateField
                source="created_at"
                label="Дата создания"
                showTime={true}
              />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
        <FormTab label="Уроки">
          {scheduleTabContent}
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
