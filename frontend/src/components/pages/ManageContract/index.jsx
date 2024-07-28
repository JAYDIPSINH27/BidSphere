// Author: Vraj Sunilkumar Shah

/* eslint-disable quotes,max-len,no-console */

import Loader from '@atoms/Loader';
import BidderList from '@molecules/BidderList';
import ConfirmationPopup from '@molecules/ConfirmationPopup';
import BidderDetails from '@organisms/BidderDetails';
import NoBidsImage from '@shared/assets/NoBidsAvailable.png';
import withAppBarFooter from '@shared/hoc/withAppBarFooter';
import axios, { HttpStatusCode } from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_Spring_BACKEND_URL;

const ContractManagement = () => {
  const { tenderId } = useParams();
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBid, setSelectedBid] = useState(null);
  const [awardedBid, setAwardedBid] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [declineConfirmationVisible, setDeclineConfirmationVisible] = useState(false);
  const [tender, setTender] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTenderDetails().then();
  }, []);

  useEffect(() => {
    if (!tender || !tender.bids || tender.bids.size === 0) {
      return;
    }
    if (tender.statistics && tender.statistics.awardedBid) {
      const bid = tender.bids.find(b => b.bidderId === tender.statistics.awardedBid);
      setAwardedBid(bid);
      return;
    }
    setBids(tender.bids);
    setSelectedBid(tender.bids[0]);
  }, [tender]);

  const fetchTenderDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/tenders/${tenderId}`);
      if (response.status === HttpStatusCode.Ok) {
        setTender(response.data);
      } else {
        setTender(null);
      }
    } catch (error) {
      setTender(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectBidder = (bidder) => {
    console.log(`Selected Bidder ID: ${bidder.name}`);
    setSelectedBid(bidder);
  };

  const handleAwardContract = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmAwardContract = async () => {
    try {
      const data = { tenderId: tender.id, bidderId: selectedBid.bidderId };
      const response = await axios.post(`${baseUrl}/api/contract/award-contract`, data);
      if (response.status === HttpStatusCode.Ok) {
        setTender(null);
        await fetchTenderDetails();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setConfirmationVisible(false);
  };

  const handleDeclineContract = () => {
    setDeclineConfirmationVisible(true);
  };

  const handleConfirmDeclineContract = async () => {
    try {
      const data = { tenderId: tender.id, bidderId: selectedBid.bidderId };
      const response = await axios.post(`${baseUrl}/api/contract/decline-contract`, data);
      if (response.status === HttpStatusCode.Ok) {
        setTender(null);
        await fetchTenderDetails();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setDeclineConfirmationVisible(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!tender) {
    return (
      <div className="w-full md:w-2/3 p-4 mt-10 text-center text-xl">
        Oops, the tender ID passed is wrong. Please go back to issuers dashboard and select tender!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tender Details
        </h2>
        <p className="mb-2">
          <strong>Tender Name:</strong> {tender.title}
        </p>
        <p className="mb-2">
          <strong>Project Description:</strong> {tender.description}
        </p>
        {tender.createdAt && (
          <p className="mb-2">
            <strong>Created at:</strong> {dayjs(tender.createdAt).format('DD MMM YYYY - HH:mm')}
          </p>
        )}
        {tender.updatedAt && (
          <p className="mb-2">
            <strong>Updated at:</strong> {dayjs(tender.updatedAt).format('DD MMM YYYY - HH:mm')}
          </p>
        )}
      </div>
      {awardedBid ? (
        <div>
          <BidderDetails
            bid={awardedBid}
            contractAwarded
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          {selectedBid ? (
            <>
              <BidderList bids={bids} onSelectBidder={handleSelectBidder} selectedBidderId={selectedBid.bidderId} />
              <BidderDetails
                key={selectedBid.bidderId}
                bid={selectedBid}
                onAwardContract={handleAwardContract}
                onDeclineContract={handleDeclineContract}
                contractAwarded={false}
              />
            </>
          ) : (
            <div className="flex flex-col h-96 w-full items-center justify-center">
              <img src={NoBidsImage} alt="No bids available" />
              <div className="flex text-xl mt-7">No bids available</div>
            </div>
          )}
        </div>
      )}
      {confirmationVisible && (
        <ConfirmationPopup
          message="Are you sure you want to award the contract?"
          onConfirm={handleConfirmAwardContract}
          onCancel={() => setConfirmationVisible(false)}
        />
      )}
      {declineConfirmationVisible && (
        <ConfirmationPopup
          message="Are you sure you want to decline the contract?"
          onConfirm={handleConfirmDeclineContract}
          onCancel={() => setDeclineConfirmationVisible(false)}
        />
      )}
    </div>
  );
};

export default withAppBarFooter(ContractManagement);
