// Author: Christin Saji

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const VerificationSuccessPage = () => {
  const navigate = useNavigate();

  const handleSigninRedirect = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">
        Email Verified Successfully
      </h1>
      <p className="mb-6 text-center">Your email has been verified successfully. You can now sign in.</p>
      <Button onClick={handleSigninRedirect} className="w-full md:w-auto px-8 py-3 text-lg">Sign In</Button>
    </div>
  );
};

export default withAppBarFooter(VerificationSuccessPage);
