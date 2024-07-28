// Author: Vraj Sunilkumar Shah

/* eslint-disable react/no-array-index-key */

import BidderItem from '@atoms/BidderItem';
import React from 'react';

const BidderList = ({
  bids,
  onSelectBidder,
  selectedBidderId,
}) => (
  <div className="w-full md:w-1/2 max-w-2xl p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Bidders</h2>
      <ul className="max-h-96 overflow-y-auto">
        {bids.map((bid, index) => (
          <BidderItem
            key={index}
            bid={bid}
            onClick={onSelectBidder}
            selectedBidderId={selectedBidderId}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default BidderList;
