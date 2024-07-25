// Author: Christin Saji

import React from 'react';
import ResetPasswordTemplate from '../../templates/ResetPassword';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const ResetPasswordPage = () => (
  <div>
    <ResetPasswordTemplate />
  </div>
);

export default withAppBarFooter(ResetPasswordPage);
