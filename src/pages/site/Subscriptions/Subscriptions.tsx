import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, useRouteMatch } from 'react-router-dom';
import * as classNames from 'classnames';

import { OfflineSubscriptionsListContainer } from '@containers/site/OfflineSubscriptionsList';
import { JumbotronLayout } from '@components/site/JumbotronLayout';
import { Button } from '@ui/Button';
import { Link } from '@components/ui/Link';
import { QABlock } from '@components/site/QABlock';
import { Footer } from '@components/site/Footer';
import { OnlineSubscriptions } from '@components/site/OnlineSubscriptions';
import { siteSubscriptionsOffline, siteSubscriptionsOnline } from '@urls';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './Subscriptions.sss';

export const Subscriptions: React.FC = () => {
  const { t } = useTranslation();
  const matchOnline = useRouteMatch(siteSubscriptionsOnline);
  const matchOffline = useRouteMatch(siteSubscriptionsOffline);

  if (!matchOnline && !matchOffline) {
    return <Redirect to={siteSubscriptionsOffline} />;
  }

  return (
    <SiteLayout className={s.root}>
      <JumbotronLayout
        title={t('site~Абонементи')}
        description={t('site~Mary Ballet - це зручні абонементи на будь-який смак. Чим більший абонемент, тим дешевше кожне заняття та крутіші спеціальні можливості. Обирай свій варіант та скоріше біжи на заняття!')}
      >
        <div className={s.links}>
          <Link to={siteSubscriptionsOffline}>
            <Button className={classNames(s.buttonStudio, {[s.active]: !matchOnline})}>
              {t('site~В студії')}
            </Button>
          </Link>
          <Link to={siteSubscriptionsOnline}>
            <Button className={classNames(s.buttonOnline, {[s.active]: !matchOffline})}>
              {t('site~Онлайн')}
            </Button>
          </Link>
        </div>
      </JumbotronLayout>

      {matchOnline && <OnlineSubscriptions theme="lightGrey" />}
      {matchOffline && <OfflineSubscriptionsListContainer theme="lightGrey" />}

      <QABlock />
      <Footer />
    </SiteLayout>
  );
};

export default Subscriptions;