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
import { useForm, Controller } from "react-hook-form";
import { updateTender } from "../../../services/tender";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const EditTenderDialog = ({ open, handleClose, tender,setUpdated }) => {
  console.log(tender)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue: setFormValue,
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      organizationId: "",
      representativeName: "",
      representativeEmail: "",
      representativeContact: "",
      representativeEmployeeId: "",
      description: "",
    },
  });

  useEffect(() => {
    if (tender) {
      reset({
        title: tender.title,
        organizationId: tender.organizationId,
        representativeName: tender.representativeName,
        representativeEmail: tender.representativeEmail,
        representativeContact: tender.representativeContact,
        representativeEmployeeId: tender.representativeEmployeeId,
        description: tender.description,
      });
    }
  }, [tender, reset]);

  const onSubmit = async (data) => {
    const { createdAt,...tenderdata } = tender
    const updatedData = {
      ...tenderdata, // Existing tender data
      ...data, // Form data to override existing tender data
    };

    try {
      await updateTender(tender.id, updatedData);
      setUpdated(true)
      handleClose();
      toast.success("Successfully Updated Tender!!")
      navigate("/issuer-dashboard");
    } catch (error) {
      console.error("Error updating tender:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Tender</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("title", { required: "Tender Title is required" })}
                label="Tender Title"
                fullWidth
                required
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("organizationId", { required: "Organization ID is required" })}
                label="Organization ID"
                fullWidth
                required
                error={!!errors.organizationId}
                helperText={errors.organizationId?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("representativeName", { required: "Representative Name is required" })}
                label="Representative Name"
                fullWidth
                required
                error={!!errors.representativeName}
                helperText={errors.representativeName?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("representativeEmail", {
                  required: "Representative Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                label="Representative Email"
                fullWidth
                required
                error={!!errors.representativeEmail}
                helperText={errors.representativeEmail?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("representativeContact", {
                  required: "Representative Contact is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Invalid contact number",
                  },
                })}
                label="Representative Contact"
                fullWidth
                required
                error={!!errors.representativeContact}
                helperText={errors.representativeContact?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("representativeEmployeeId", {
                  required: "Representative Employee ID is required",
                })}
                label="Representative Employee ID"
                fullWidth
                required
                error={!!errors.representativeEmployeeId}
                helperText={errors.representativeEmployeeId?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">{errors.description.message}</span>
              )}
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTenderDialog;
