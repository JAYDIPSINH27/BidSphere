/* external imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
/* internal components */
import ErrorBoundary from './configs/ErrorBoundary';
import Routes from './routes/route';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

library.add(fas);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ErrorBoundary>,
);
