import React from 'react';
import ContactTemplate from '../../templates/Contact/index';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

function Contact() {
  return (
    <div>
      <ContactTemplate />
    </div>
  );
}

export default withAppBarFooter(Contact);
