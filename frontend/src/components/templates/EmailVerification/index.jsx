// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import EmailVerificationForm from '../../organisms/EmailVerificationForm';

const EmailVerificationTemplate = ({ onVerify }) => (
  <div className="min-h-screen flex items-center justify-center">
    <EmailVerificationForm onVerify={onVerify} />
  </div>
);

export default EmailVerificationTemplate;
