/* Author: Jaydipsinh Padhiyar */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { updateDocument } from '../../../services/tender';
import {useNavigate} from 'react-router-dom';

const EditDocumentDialog = ({ open, handleClose, document }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    tenderId: '',
    url: '',
    type: '',
    uploadedAt: '',
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (document) {
      setFormData({
        userId: document.userId,
        tenderId: document.tenderId,
        url: document.url,
        type: document.type,
        uploadedAt: document.uploadedAt,
      });
    }
  }, [document]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      if (file) {
        await updateDocument(document.id, file);
      }
      handleClose();
      navigate('/issuer-dashboard');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Document</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="userId"
                label="User ID"
                fullWidth
                required
                value={formData.userId}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="tenderId"
                label="Tender ID"
                fullWidth
                required
                value={formData.tenderId}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="url"
                label="URL"
                fullWidth
                required
                value={formData.url}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="type"
                label="Type"
                fullWidth
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="uploadedAt"
                label="Uploaded At"
                fullWidth
                required
                value={formData.uploadedAt}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <input type="file" onChange={handleFileChange} />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDocumentDialog;
