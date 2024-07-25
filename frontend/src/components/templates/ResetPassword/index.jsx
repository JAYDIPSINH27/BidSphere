// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import ResetPasswordForm from '../../organisms/ResetPasswordForm';

const ResetPasswordTemplate = ({ onSetNewPassword }) => (
  <div className="min-h-screen flex items-center justify-center">
    <ResetPasswordForm onSetNewPassword={onSetNewPassword} />
  </div>
);

export default ResetPasswordTemplate;
