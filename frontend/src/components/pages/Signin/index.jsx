import React from 'react';
import LoginTemplate from '../../templates/Signin';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const SigninPage = () => (
  <div>
    <LoginTemplate />
  </div>
);

export default withAppBarFooter(SigninPage);
