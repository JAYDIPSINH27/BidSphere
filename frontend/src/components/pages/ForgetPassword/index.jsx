// Author: Christin Saji

import React from 'react';
import ForgetPasswordTemplate from '../../templates/ForgetPassword';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const ForgetPasswordPage = () => (
  <div>
    <ForgetPasswordTemplate />
  </div>
);

export default withAppBarFooter(ForgetPasswordPage);
