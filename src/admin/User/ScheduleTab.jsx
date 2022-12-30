import * as React from 'react';
import * as dayjs from 'dayjs';
import {
  Datagrid,
  NumberField,
  BooleanField,
  ReferenceManyField,
  ReferenceField,
  FunctionField,
} from 'react-admin';


export const scheduleTabContent = (
  <ReferenceManyField
    reference="lessonvisitor"
    target="user_id"
    fullWidth={true}
  >
    <Datagrid>
      <NumberField
        label="Id посетителя"
        source="id"
      />
      <NumberField
        label="Id подписки"
        source="lesson_purchase_id"
      />
      <ReferenceField
        label="Урок"
        source="lesson_id"
        reference="lesson"
        link={false}
      >
        <FunctionField
          render={
            record => (
              <div>
                {record.city}, {record.street}, {record.number}<br />
                {dayjs(record.time).format('DD MMM YYYY HH:mm')} <br />
                {
                  record.is_closed &&
                  '(Урок закрыт)'
                }
              </div>
            )
          }
        />
      </ReferenceField>
      <BooleanField
        label="Присутствие"
        source="visited"
      />
      <NumberField
        label="К оплате"
        source="pay_amount"
      />
      <FunctionField
        label="Оплата"
        render={
          record => {
            if (record.paid_online) {
              return 'Онлайн'
            }
            if (record.paid_on_lesson) {
              return 'На уроке'
            }

            return 'Не оплачено'
          }
        }
      />
      <NumberField
        label="Перенос"
        source="moved_to_lesson_visitor_id"
      />
    </Datagrid>
  </ReferenceManyField>
);