/* external imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* internal components */
import QuestionAndAnswer from '@organisms/Q&A/Questionaire';
import QnAPage from '@components/organisms/Q&A/NestedComment';
import ContractManagement from '@pages/ManageContract';
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
import PrivateRoute from './privateRoute';
import AddTenders from '../../components/pages/TenderIssuer/AddTenders';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/payment-success" element={<PaymentStatus status="success" />} />
      <Route path="/payment-failure" element={<PaymentStatus status="failure" />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/q&a" element={<PrivateRoute><QuestionAndAnswer /></PrivateRoute>} />
      <Route path="/q&a/:qId" element={<PrivateRoute><QnAPage /></PrivateRoute>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verification-success" element={<VerificationSuccess />} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/bidder-dashboard" element={<PrivateRoute><BidderDashboard /></PrivateRoute>} />
      <Route path="/issuer-dashboard" element={<PrivateRoute><IssuerDashboard /></PrivateRoute>} />
      <Route path="/issuer-dashboard/new-tender" element={<PrivateRoute><AddTenders /></PrivateRoute>} />
      <Route path="/manage-contract/:tenderId" element={<PrivateRoute><ContractManagement /></PrivateRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteConfig;
