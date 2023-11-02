import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/components/app/app';
import './scss/styles.css';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

