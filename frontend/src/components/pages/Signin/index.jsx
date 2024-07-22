// Author: Christin Saji

import React from 'react';
import SigninTemplate from '../../templates/Signin';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const SigninPage = () => (
  <div>
    <SigninTemplate />
  </div>
);

export default withAppBarFooter(SigninPage);
