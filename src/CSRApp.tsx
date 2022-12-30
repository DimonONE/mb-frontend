import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { withApolloHooksProvider } from '@client';

import { BaseApp } from './BaseApp';

const AppWithHooks = withApolloHooksProvider(BaseApp);
ReactDOM.render(
  (
    <BrowserRouter>
      <AppWithHooks />
    </BrowserRouter>
  ),
  document.querySelector('#app')
);