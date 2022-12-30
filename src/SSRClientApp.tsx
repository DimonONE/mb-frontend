import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import { withApolloHooksProvider } from '@client';

import BaseApp from './BaseApp';

const ApolloApp = withApolloHooksProvider(BaseApp);

loadableReady(() => {
  const root = document.getElementById('app');
  ReactDOM.hydrate(
    (
      <BrowserRouter>
        <ApolloApp/>
      </BrowserRouter>
    ),
    root
  );
});