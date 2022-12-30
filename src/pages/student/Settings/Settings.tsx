import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { BasePage } from '@components/student/BasePage';
import { PersonalDataFormContainer } from '@containers/student/PersonalDataForm';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { ChangePasswordFormContainer } from '@containers/student/ChangePasswordForm';

import * as s from './Settings.sss';

export const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BasePage>
      <LayoutContainer className={s.container}>
        <div className={s.title}>{t('student~Личные данные')}</div>

        <PersonalDataFormContainer />

        <ChangePasswordFormContainer className={s.changePasswordForm} />
      </LayoutContainer>
    </BasePage>
  );
};

export default Settings;