import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { JumbotronLayout } from '@components/site/JumbotronLayout';
import { useGenericPageQuery } from '@graphql';
import { LayoutContainer } from '@components/student/LayoutContainer';
import { Footer } from '@components/site/Footer';
import { SiteLayout } from '@components/site/SiteLayout';

import * as s from './GenericPage.sss';

type GenericPageProps = {
  slug: string
};

export const GenericPage: React.FC<GenericPageProps> = ({ slug }) => {
  const { data } = useGenericPageQuery({
    variables: { slug },
  });

  if (!data) {
    return null;
  }

  const { page } = data;
  return (
    <SiteLayout className={s.root}>
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoDescription} />
      </Helmet>

      <JumbotronLayout
        title={page.title}
        description={page.subtitle}
      />

      <LayoutContainer className={s.layout}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </LayoutContainer>

      <Footer />
    </SiteLayout>
  );
};

export default GenericPage;