import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './Wrapper';
import { I18nProvider } from './i18n/I18nProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nProvider>
      <Wrapper />
    </I18nProvider>
  </React.StrictMode>
);