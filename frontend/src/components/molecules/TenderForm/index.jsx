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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (

      <Paper elevation={1} sx={{ padding: "1rem" ,margin:"1rem",overflow: "hidden"}}>
        <Typography variant="h5" gutterBottom>
          Create New Tender
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} alignContent={'center'} justifyContent={'center'}>
            <Grid item xs={6}>
              <Box sx={{ border: '1px solid grey', padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  General Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
      </Paper>
  );
};

export default TenderForm;