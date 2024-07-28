/* eslint-disable */
import React, { useEffect, useState } from 'react';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';
import { getAllTenders, bid } from './functions/getAllTenders';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './bidder-dashboard.css';


function BidderDashboard() {
  useEffect(() => {
    document.title = 'Bidder Dashboard';
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    getAllTenders().then((response) => {
      if (response.status === 200) {
        setData(response.data);
      }
    });
  }, []);

  const [selectedTender, setSelectedTender] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);

  const handleViewTender = (tenderId) => {
    // Find the selected tender from the data array
    const tender = data.find((item) => item._id === tenderId);
    setSelectedTender(tender);
  };

  const handleCloseModal = () => {
    bid(selectedTender._id, 'bidderId', bidAmount);
    //To Do: Pass the user ID from Auth context
    setSelectedTender(null);
    setBidAmount(0);
  };

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className='container m-5'>
      <h1 className='text-center my-4'>All Tenders</h1>
      <table className='table table-bordered table-white table-striped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tender Number</th>
            <th>Issuer ID</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.tenderNumber}</td>
              <td>{item.issuerId}</td>
              <td>{item.createdAt}</td>
              <td>{item.status}</td>
              <td className='text-center'>
                <button
                  className='btn btn-warning'
                  onClick={() => handleViewTender(item._id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal to display tender details */}
      <Modal show={selectedTender !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tender Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTender && (
            <div>
              <h5>Title: {selectedTender.title}</h5>
              <p>Description: {selectedTender.description}</p>
              <p>Tender Number: {selectedTender.tenderNumber}</p>
              <p>Issuer ID: {selectedTender.issuerId}</p>
              <p>Created At: {selectedTender.createdAt}</p>
              <p>Status: {selectedTender.status}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <button
            className='btn btn-primary mx-auto px-5'
            onClick={handleCloseModal}
            disabled={selectedTender && selectedTender.status !== 'open'} // Disable the button if the status is not 'open'
          >
            Bid
          </button>
          <input
            type="number"
            value={bidAmount}
            onChange={handleBidAmountChange}
            className='mx-auto text-center'
            disabled={selectedTender && selectedTender.status !== 'open'} // Disable the input if the status is not 'open'
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default withAppBarFooter(BidderDashboard);
