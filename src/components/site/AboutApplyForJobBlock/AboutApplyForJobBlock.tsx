import * as React from 'react';
import * as classNames from 'classnames';

import { ApplyForJobFormContainer } from '@containers/site/ApplyForJobForm';

import * as s from './AboutApplyForJobBlock.sss';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { useTranslation } from 'react-i18next';

type AboutApplyForJobBlockProps = {
  className?: string
}

export const AboutApplyForJobBlock: React.FC<AboutApplyForJobBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <LayoutContainer className={s.layout}>
        <div className={s.textBlock}>
          <div className={s.title}>{t('site~Приєднуйся до команди Mary Ballet!')}</div>

          <div className={s.text}>
            {t('site~Mary Ballet Team - це професіонали своєї справи, яких об’єднала любов до мистецтва і бажання створювати magnifique компанію. В нашій команді працюють чарівниці-адміністратори, феї-педагоги, SMM та SEO спеціалісти, IT-розробники, маркетологи, таргетологи та дизайнери.')}
            <br/>
            <br/>
            {t('site~Хочеш стати частиною команди Mary Ballet?')}
            <br/>
            {t('site~Відправляй своє резюме!')}
          </div>
        </div>

        <ApplyForJobFormContainer className={s.applyForm} />
      </LayoutContainer>
    </div>
  );
}