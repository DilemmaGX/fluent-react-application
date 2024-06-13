import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './Wrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>
);