/* Author: Jaydipsinh Padhiyar */
/* eslint-disable */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { deleteTender } from '../../../services/tender';

const DeleteTenderDialog = ({ open, handleClose, tenderId }) => {
  const handleDelete = async () => {
    try {
      await deleteTender(tenderId);
      handleClose();
      window.location.reload(); // Refresh the page to remove the deleted tender
    } catch (error) {
      console.error('Error deleting tender:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Tender</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this tender? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} color="primary" variant="contained">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTenderDialog;
