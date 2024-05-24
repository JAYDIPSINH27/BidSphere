/* external imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* internal components */
import App from '../App';
import Pricing from '../../components/pages/Pricing';
import PageNotFound from '../../shared/components/PageNotFound';
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteConfig;
