import React from 'react';
import SignupTemplate from '../../templates/Signup';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const SignupPage = () => (
  <div>
    <SignupTemplate />
  </div>
);

export default withAppBarFooter(SignupPage);
