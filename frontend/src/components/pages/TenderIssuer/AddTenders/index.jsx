/* eslint-disable no-unused-vars */
import Paper from '@mui/material/Paper';
import React from 'react';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TenderForm from '../../../molecules/TenderForm';
import BreadCrumb from '../../../molecules/BreadCrumb';
import withAppBarFooter from '../../../../shared/hoc/withAppBarFooter';

function AddTender() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bid-issuer/tenders/add');
  };
  return (
    <Box
      sx={{
        minHeight: '100vh', mb: 1, mt: 5, p: 5,
      }}
    >
      <Box>
        <BreadCrumb />
      </Box>
      <Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Create New Tender
          </Typography>
          <Divider sx={{ borderBottomWidth: 2 }} />
        </Box>

        <TenderForm />

      </Box>
    </Box>
  );
}

export default withAppBarFooter(AddTender);
