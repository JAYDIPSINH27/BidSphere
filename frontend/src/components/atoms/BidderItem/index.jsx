// Author: Vraj Sunilkumar Shah

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import axios, { HttpStatusCode } from 'axios';
import React, { useEffect, useState } from 'react';
import MaleImage from '../../../shared/assets/UserMale.png';

const baseUrl = import.meta.env.VITE_Spring_BACKEND_URL;

const BidderItem = ({
  bid,
  onClick,
  selectedBidderId,
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

  return (
    <li
      className={`flex flex-col items-center p-6 mb-6 bg-white shadow-md rounded-lg cursor-pointer 
    ${selectedBidderId === bid.bidderId ? 'border-2 border-black' : ''} transition-colors`}
      onClick={() => onClick(bid)}
    >
      <img
        className="w-16 h-16 rounded-full mb-4"
        src={MaleImage}
        alt={`${bidder.name}'s avatar`}
      />
      <div className="text-center">
        <span className="block font-semibold text-gray-800">{bidder.name}</span>
        <span className="block text-green-500 font-bold">
          ${bid.amount}
        </span>
      </div>
    </li>
  );
};

export default BidderItem;
