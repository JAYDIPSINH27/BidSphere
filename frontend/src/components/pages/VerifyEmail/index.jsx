// Author: Christin Saji

import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmailVerificationTemplate from '../../templates/EmailVerification';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      navigate('/signin');
    } catch (err) {
      throw new Error('Verification failed');
    }
  };

  return (
    <EmailVerificationTemplate onVerify={handleVerify} />
  );
};

export default withAppBarFooter(VerifyEmail);
