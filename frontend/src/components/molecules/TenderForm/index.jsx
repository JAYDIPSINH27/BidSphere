/*eslint-disable*/
/* Author: Jaydipsinh Padhiyar */
import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createTender, uploadDocuments } from '../../../services/tender';
import toast from 'react-hot-toast';
function TenderForm() {
  const issuerId = sessionStorage.getItem('issuer_id');
  const [value, setValue] = useState('<p>Tender description goes here.</p><p>Provide as much project details as required.</p>');
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue: setFormValue,
    trigger,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      // Step 1: Create the tender and get the tender ID
      const tenderData = {
        title: formData.title,
        description: value,
        issuerId,
        organizationId: formData.organizationId,
        representativeName: formData.name,
        representativeEmail: formData.email,
        representativeContact: formData.contactNumber,
        representativeEmployeeId: formData.employeeId,
        status: 'open',
      };

      const createdTender = await createTender(tenderData);
      const tenderId = createdTender.id;

      await uploadDocuments(formData.documents, issuerId, tenderId)
      .then(() => {
        toast.success('Tender Created Successfully');
      });

      // Navigate to issuer-dashboard after successful creation
      navigate('/issuer-dashboard');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleNextStep = async () => {
    const isValid = step === 1
      ? await trigger(['title', 'organizationId'])
      : await trigger(['name', 'email', 'contactNumber', 'employeeId']);

    if (isValid && (step === 1 ? value !== '' : true)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <Box style={{ padding: '1rem', overflow: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} alignContent="center" justifyContent="center">
          {step === 1 && (
            <>
              <Grid item xs={12}>
                <Box sx={{ border: '1px solid grey', padding: '2rem', borderRadius: '8px', backgroundColor:'whitesmoke' }}>
                  <Typography variant="h6" gutterBottom>
                    General Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="title"
                        label="Tender Title"
                        fullWidth
                        required
                        {...register('title', { required: 'Tender Title is required' })}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        disabled
                        value={issuerId}
                        name="issuerId"
                        label="Issuer ID"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="organizationId"
                        label="Organization ID"
                        fullWidth
                        required
                        {...register('organizationId', { required: 'Organization ID is required' })}
                        error={!!errors.organizationId}
                        helperText={errors.organizationId?.message}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ border: '1px solid grey', padding: '2rem', borderRadius: '8px', backgroundColor:'whitesmoke' }}>
                  <Typography variant="h6" gutterBottom>
                    Project Description
                  </Typography>
                  <Controller
                    control={control}
                    name="description"
                    render={() => (
                      <ReactQuill theme="snow" value={value} onChange={setValue} />
                    )}
                  />
                  {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={handleNextStep} fullWidth>
                  Next
                </Button>
              </Grid>
            </>
          )}
          {step === 2 && (
            <>
              <Grid item xs={12}>
                <Box sx={{ border: '1px solid grey', padding: '2rem', borderRadius: '8px', backgroundColor:'whitesmoke' }}>
                  <Typography variant="h6" gutterBottom>
                    Purchase Representative Contact Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="name"
                        label="Name"
                        fullWidth
                        required
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="email"
                        label="Email"
                        fullWidth
                        required
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email address',
                          },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="contactNumber"
                        label="Contact Number"
                        fullWidth
                        required
                        {...register('contactNumber', {
                          required: 'Contact number is required',
                          pattern: {
                            value: /^\d+$/,
                            message: 'Invalid contact number',
                          },
                        })}
                        error={!!errors.contactNumber}
                        helperText={errors.contactNumber?.message}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="employeeId"
                        label="Employee ID"
                        fullWidth
                        required
                        {...register('employeeId', { required: 'Employee ID is required' })}
                        error={!!errors.employeeId}
                        helperText={errors.employeeId?.message}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ border: '1px solid grey', padding: '2rem', borderRadius: '8px', backgroundColor:'whitesmoke' }}>
                  <Typography variant="h6" gutterBottom>
                    Document Upload
                  </Typography>
                  <Controller
                    control={control}
                    name="documents"
                    render={() => (
                      <input type="file" multiple onChange={e => setFormValue('documents', e.target.files)} />
                    )}
                  />
                  {errors.documents && <span className="text-red-500 text-sm">{errors.documents.message}</span>}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={handlePrevStep} fullWidth>
                  Back
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Create Tender
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </form>
    </Box>
  );
}

export default TenderForm;
