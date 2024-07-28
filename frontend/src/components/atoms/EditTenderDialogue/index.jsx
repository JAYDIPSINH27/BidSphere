/* Author: Jaydipsinh Padhiyar */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ReactQuill from "react-quill";
import { updateTender } from "../../../services/tender";

const EditTenderDialog = ({ open, handleClose, tender }) => {
  console.log(tender);
  const [value, setValue] = useState();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    issuerId: "",
    organizationId: "",
    representativeName: "",
    representativeEmail: "",
    representativeContact: "",
    representativeEmployeeId: "",
    status: "open",
  });

  useEffect(() => {
    if (tender) {
      setFormData({
        title: tender.title,
        description: tender.description,
        organizationId: tender.organizationId,
        representativeName: tender.representativeName,
        representativeEmail: tender.representativeEmail,
        representativeContact: tender.representativeContact,
        representativeEmployeeId: tender.representativeEmployeeId,
        documents: tender.documents,
        status: tender.status,
      });
    }
  }, [tender]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await updateTender(tender.id, formData);
      handleClose();
      window.location.reload(); // Refresh the page to show the updated tender
    } catch (error) {
      console.error("Error updating tender:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Tender</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="title"
                label="Tender Title"
                fullWidth
                required
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="organizationId"
                label="Organization ID"
                fullWidth
                required
                value={formData.organizationId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="representativeName"
                label="Representative Name"
                fullWidth
                required
                value={formData.representativeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="representativeEmail"
                label="Representative Email"
                fullWidth
                required
                value={formData.representativeEmail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="representativeContact"
                label="Representative Contact"
                fullWidth
                required
                value={formData.representativeContact}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="representativeEmployeeId"
                label="Representative Employee ID"
                fullWidth
                required
                value={formData.representativeEmployeeId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" value={formData.description} onChange={setValue} />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTenderDialog;
