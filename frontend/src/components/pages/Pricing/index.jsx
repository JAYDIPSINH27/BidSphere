import React from 'react';
/* hoc */
import withNavbar from '../../../shared/hoc/withNavBar';
/* utility */
import Utility from '../../utils/utility';

function Pricing() {
  const onHandlePayment = () => {
    Utility.initPayment({
      // title,
      // amount,
      // sale,
      // description,
    });
  };
  return (
    <button
      onClick={() => onHandlePayment()}
    >
      Pay 100$ here
    </button>
  );
}

export default withNavbar(Pricing);
