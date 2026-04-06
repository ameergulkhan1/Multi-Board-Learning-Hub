import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n/config.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
