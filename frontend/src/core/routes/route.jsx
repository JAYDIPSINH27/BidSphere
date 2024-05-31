/* external imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* internal components */
import App from '../App';
import Pricing from '../../components/pages/Pricing';
import PageNotFound from '../../shared/components/PageNotFound';
import PaymentStatus from '../../components/molecules/PaymentStatus';
// import PrivateRoute from './PrivateRoute';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/home" element={<PrivateRoute />}> */}
      {/* <Route index element={<DashBoard />} /> */}
      {/* </Route> */}
      {/* <Route index element={<DashBoard />} /> */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/payment-success" element={<PaymentStatus status="success" />} />
      <Route path="/payment-failure" element={<PaymentStatus status="failure" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteConfig;
