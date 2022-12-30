import React from 'react';
import {
  useState,
  useEffect
} from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import {
  useSSR,
  I18nextProvider,
} from 'react-i18next';

import { getApolloClient } from '@client';
import {
  defaultLang,
  getLanguageFromPath,
  getPathForLanguage,
  i18n,
} from '@utils/i18n';

import BaseApp from './BaseApp';

const App: React.FC = () => {
  useSSR(window.initialI18nStore, window.initialLanguage);
  const [languageFromPath, setLanguageFromPath] = useState(getLanguageFromPath(window.location.pathname));

  useEffect(
    () => {
      i18n.on(
        'languageChanged',
        () => {
          const languageFromPath = getLanguageFromPath(window.location.pathname)
          if (i18n.language !== languageFromPath) {
            setLanguageFromPath(i18n.language)
            history.replaceState(
              null, '', getPathForLanguage(location.pathname, i18n.language)
            )
          }
        }
      )
    },
    []
  );

  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={getApolloClient()}>
        <BrowserRouter
          key={languageFromPath}
          basename={defaultLang !== languageFromPath ? `/${languageFromPath}` : undefined}
        >
          <BaseApp />
        </BrowserRouter>
      </ApolloProvider>
    </I18nextProvider>
  );
}

// Load all components needed before rendering
loadableReady().then(() => {
  hydrate(
    <App />,
    document.getElementById("root"));
});

if (module.hot) {
  module.hot.accept();
}
