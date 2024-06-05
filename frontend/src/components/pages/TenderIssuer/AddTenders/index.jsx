import Paper from '@mui/material/Paper';
import React from 'react';
import withHeaderFooter from '../../../../shared/hoc/withHeaderFooter';
import TenderForm from '../../../molecules/TenderForm';
import { Box, Button, Divider, Typography } from '@mui/material';
import BreadCrumb from '../../../molecules/BreadCrumb';
import { useNavigate } from 'react-router-dom';

const AddTender = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bid-issuer/tenders/add');
  };
  return (
    <Paper elevation={1} style={{ height: "100vh" }}>
      <Box>
        <BreadCrumb />
      </Box>
      <Box >

        <Box>
          <Typography variant="h4" style={{ marginBottom: "2rem" }}>
            Create New Tender
            <Divider style={{ border: "2" }} />
          </Typography>

        </Box>

        <TenderForm />



      </Box>
    </Paper >

  );
}

export default withHeaderFooter(AddTender)