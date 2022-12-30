import * as React from 'react';

import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  NumberInput,
  minValue,
  required,
  ReferenceArrayInput,
  SelectArrayInput,
  FormDataConsumer,
  DateInput,
} from 'react-admin';
import { weekdayVerbose } from '@constants';
import { ScheduleInput } from '@/admin/utils/components/ScheduleInput';

export const LessonPurchaseCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Пользователь"
        source="user_id"
        reference="user"
        fullWidth={true}
      >
        <SelectInput
          disabled
          fullWidth={true}
          optionText={record => (
              <>
                {record.first_name} {record.last_name} {record.phone_number}
              </>
            )
          }
        />
      </ReferenceInput>
      <ReferenceInput
        label="Абонемент"
        source="lesson_subscription_id"
        reference="lessonsubscription"
        validate={[required()]}
      >
        <SelectInput
          optionText={record => (
              <>
                Уроков: {record.lessons_count}<br/>
                Переносов: {record.moves_count}<br/>
                Дней заморозок: {record.freeze_days_count}<br/>
                <b>Цена: {record.price}</b>
              </>
            )
          }
        />
      </ReferenceInput>

      <FormDataConsumer>
        {({ formData, ...rest }) => {
          if (!formData.hall) {
            return null;
          }

          return (
            <ReferenceArrayInput
              label="Расписание"
              source="lesson_templates_ids"
              reference="lessontemplate"
              filter={{ hall_id: formData.hall }}
              fullWidth={true}
              validate={[required()]}
            >
              <SelectArrayInput
                optionText={record => (
                    <>
                      День: {weekdayVerbose[record.weekday]}<br/>
                      Время: {record.time}
                    </>
                  )
                }
              />
            </ReferenceArrayInput>
          );
        }}
      </FormDataConsumer>

      <ScheduleInput
        source="lesson_templates_ids"
      />

      <DateInput
        label="Дата начала абонемента"
        source="from_date"
      />

      <NumberInput
        label="Осталось занятий"
        source="lessons_left"
        validate={[minValue(1)]}
        helpText="Если оставить пустым, количество уроков будет взято из абонемента"
      />
    </SimpleForm>
  </Create>
);
