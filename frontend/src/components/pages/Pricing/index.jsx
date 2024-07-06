import React from 'react';
/* hoc */
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';
/* utility */
import Utility from '../../utils/utility';

const Pricing = () => {
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
};

export default withAppBarFooter(Pricing);
