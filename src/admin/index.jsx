import React from 'react';
import ReactDOM from 'react-dom';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';

import App from './App';

dayjs.locale('ru');

const appElement = document.querySelector('#app');

ReactDOM.render(
  <App />,
  appElement
);

