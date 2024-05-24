/* external imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
/* internal components */
import ErrorBoundary from './configs/ErrorBoundary';
import Routes from './routes/route';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ErrorBoundary>,
);
