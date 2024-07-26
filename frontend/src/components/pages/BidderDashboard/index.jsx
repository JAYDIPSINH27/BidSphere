// Author: Christin Saji

import React from 'react';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

const BidderDashboard = () => (
  <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">Bidder Dashboard</h1>
  </div>
);

export default withAppBarFooter(BidderDashboard);
