// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import ForgetPasswordForm from '../../organisms/ForgetPasswordForm';

const ForgetPasswordTemplate = ({ onRequestReset }) => (
  <div className="min-h-screen flex items-center justify-center">
    <ForgetPasswordForm onRequestReset={onRequestReset} />
  </div>
);

export default ForgetPasswordTemplate;
