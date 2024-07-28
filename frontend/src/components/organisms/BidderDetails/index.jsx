// Author: Vraj Sunilkumar Shah

/* eslint-disable react/no-array-index-key */

import BaseButton from '@atoms/BaseButton';
import axios, { HttpStatusCode } from 'axios';
import React, { useEffect, useState } from 'react';
import MaleImage from '../../../shared/assets/UserMale.png';

const baseUrl = import.meta.env.VITE_Spring_BACKEND_URL;

const BidderDetails = ({
  bid,
  onAwardContract,
  onDeclineContract,
  contractAwarded,
}) => {
  const [bidder, setBidder] = useState(null);

  useEffect(() => {
    fetchBidder().then();
  }, []);

  const fetchBidder = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/users/${bid.bidderId}`);
      if (response.status === HttpStatusCode.Ok) {
        setBidder(response.data.data);
      } else {
        setBidder(null);
      }
    } catch (error) {
      setBidder(null);
    }
  };

  if (!bidder) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>);
  }

  if (!bid) {
    return (
      <div className="w-full md:w-2/3 p-4 text-center text-gray-600">
        No bidder selected
      </div>
    );
  }

  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={MaleImage}
          alt={`${bidder.name}'s avatar`}
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{bidder.name}</h2>
        <p className="mb-2">
          <strong>Bid Amount:</strong> ${bid.amount}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {bidder.email}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {bidder.phone}
        </p>
        <p className="mb-2">
          <strong>Address:</strong> {bidder.address}
        </p>
        {contractAwarded ? (
          <p className="text-center text-green-600 font-bold mb-4 mt-10">
            This bid has been contracted.
          </p>
        ) : (
          <div className="flex space-x-4 mt-10">
            <BaseButton
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${contractAwarded && 'opacity-50 cursor-not-allowed'}`}
              onClick={onAwardContract}
              disabled={contractAwarded}
            >
              Award Contract
            </BaseButton>
            <BaseButton
              className="bg-red-500 hover:bg-red-700 text-white font-bold"
              onClick={onDeclineContract}
            >
              Decline Contract
            </BaseButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default BidderDetails;
