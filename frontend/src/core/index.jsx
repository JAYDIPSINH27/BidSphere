/* eslint-disable comma-dangle */
/* external imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
/* data */
import store from '../data/store';
/* internal components */
import ErrorBoundary from './configs/ErrorBoundary';
import Routes from './routes/route';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

library.add(fas);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);
