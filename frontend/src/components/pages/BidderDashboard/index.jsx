/* eslint-disable */
import React, { useEffect, useState } from 'react';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';
import { getAllTenders, bid } from './functions/getAllTenders';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './bidder-dashboard.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function BidderDashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    handleOpen();
  };

  const handleCloseModal = () => {
    bid(selectedTender._id, 'bidderId', bidAmount);
    //To Do: Pass the user ID from Auth context
    setSelectedTender(null);
    setBidAmount(0);
    handleClose();
  };

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className='container m-5 p-5 flex justify-self-center'  >
    <table className='m-5 p-5 table-auto w-full '>
      <thead>
        <tr>
          <th className='px-4 py-2'>Title</th>
          <th className='px-4 py-2'>Description</th>
          <th className='px-4 py-2'>Tender Number</th>
          <th className='px-4 py-2'>Issuer ID</th>
          <th className='px-4 py-2'>Created At</th>
          <th className='px-4 py-2'>Status</th>
          <th className='px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td className='border px-4 py-2'>{item.title}</td>
            <td className='border px-4 py-2'>{item.description}</td>
            <td className='border px-4 py-2'>{item.tenderNumber}</td>
            <td className='border px-4 py-2'>{item.issuerId}</td>
            <td className='border px-4 py-2'>{item.createdAt}</td>
            <td className='border px-4 py-2'>{item.status}</td>
            <td className='border px-4 py-2 text-center'>
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {selectedTender && (
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedTender.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description: {selectedTender.description}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Tender Number: {selectedTender.tenderNumber}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Issuer ID: {selectedTender.issuerId}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Created At: {selectedTender.createdAt}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Status: {selectedTender.status}
            </Typography>
            <Typography className='my-5' id="modal-modal-description" sx={{ mt: 2 }}>
              Bid Amount:
              <input
                type="number"
                value={bidAmount}
                onChange={handleBidAmountChange}
                className='mx-4'
              />
            </Typography>
            <Button onClick={handleCloseModal} className='mx-4' variant="contained">Submit Bid</Button>
          </div>
        )}
        </Box>
      </Modal>

  </div>
  );
}

export default withAppBarFooter(BidderDashboard);
