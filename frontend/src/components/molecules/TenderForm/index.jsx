import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const TenderForm = () => {
  const [value, setValue] = useState('');

  const [formData, setFormData] = useState({
    tenderName: '',
    tenderBudget: '',
    tenderDeadline: '',
    tenderDescription: '',
    name: '',
    email: '',
    organizationcontact: '',

  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    let error = '';
    switch (name) {
      case 'name':
        error = value === '' ? 'Name is required' : '';
        break;
      case 'email':
        error =
          value === ''
            ? 'Email is required'
            : !/\S+@\S+\.\S+/.test(value)
              ? 'Invalid email address'
              : '';
        break;
      case 'contactNumber':
        error =
          value === ''
            ? 'Contact number is required'
            : !/^\d+$/.test(value)
              ? 'Invalid contact number'
              : '';
        break;
      case 'employeeId':
        error = value === '' ? 'Employee ID is required' : '';
        break;
      case 'tenderName':
        error = value === '' ? 'Tender Name is required' : '';
        break;
      case 'tenderBudget':
        error = value === '' ? 'Tender Budget is required' : '';
        break;
      case 'tenderDeadline':
        error = value === '' ? 'Tender Deadline is required' : '';
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
      [`${name}Error`]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    // <Box style={{height:"100vh"}}>

    <Box style={{ padding: "1rem", overflow: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} alignContent={'center'} justifyContent={'center'}>
          {/* <Grid  item xs={12}>
              <Box sx={{ border: '1px solid grey', padding: "2rem" }}>
                <Typography variant="h6" gutterBottom>
                  General Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      name="tenderName"
                      label="Tender Name"
                      value={formData.tenderName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="tenderBudget"
                      label="Tender Budget"
                      value={formData.tenderBudget}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="tenderDeadline"
                      label="Tender Deadline"
                      type="date"
                      value={formData.tenderDeadline}
                      onChange={handleChange}
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid> */}
          <Grid item xs={12}>
            <Box sx={{ border: '1px solid grey', padding: "2rem" }}>
              <Typography variant="h6" gutterBottom>
                General Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    name="tenderName"
                    label="Tender Name"
                    value={formData.tenderName}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!formData.tenderNameError}
                    helperText={formData.tenderNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="tenderBudget"
                    label="Tender Budget"
                    value={formData.tenderBudget}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!formData.tenderBudgetError}
                    helperText={formData.tenderBudgetError}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name="tenderDeadline"
                    label="Tender Deadline"
                    type="date"
                    value={formData.tenderDeadline}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!formData.tenderDeadlineError}
                    helperText={formData.tenderDeadlineError}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ border: '1px solid grey', padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Project Description
              </Typography>

              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ border: '1px solid grey', padding: "2rem" }}>
              <Typography variant="h6" gutterBottom>
                Purchase Representative Contact Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formData.nameError}
                    helperText={formData.nameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formData.emailError}
                    helperText={formData.emailError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="contactNumber"
                    label="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formData.contactNumberError}
                    helperText={formData.contactNumberError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="employeeId"
                    label="Employee ID"
                    value={formData.employeeId}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={formData.employeeIdError}
                    helperText={formData.employeeIdError}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Create Tender
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    // </Box>

  );
};

export default TenderForm;