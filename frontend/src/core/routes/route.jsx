/* external imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* internal components */
import QuestionAndAnswer from '@organisms/Q&A/Questionaire';
import App from '../App';
import Pricing from '../../components/pages/Pricing';
import PageNotFound from '../../shared/components/PageNotFound';
import PaymentStatus from '../../components/molecules/PaymentStatus';
import Faq from '../../components/pages/Faq';
import Contact from '../../components/pages/Contact';
import Signin from '../../components/pages/Signin';
import Signup from '../../components/pages/Signup';
import VerificationSuccess from '../../components/pages/VerificationSuccess';
import ProfilePage from '../../components/pages/ProfilePage';
import ForgetPassword from '../../components/pages/ForgetPassword';
import ResetPassword from '../../components/pages/ResetPassword';
import BidderDashboard from '../../components/pages/BidderDashboard';
import IssuerDashboard from '../../components/pages/IssuerDashboard';
// import PrivateRoute from './PrivateRoute';
// import Tenders from '../../components/pages/TenderIssuer/Tenders';
// import AddTender from '../../components/pages/TenderIssuer/AddTenders';
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
      <Route path="/faq" element={<Faq />} />
      <Route path="/q&a" element={<QuestionAndAnswer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verification-success" element={<VerificationSuccess />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/bidder-dashboard" element={<BidderDashboard />} />
      <Route path="/issuer-dashboard" element={<IssuerDashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteConfig;
