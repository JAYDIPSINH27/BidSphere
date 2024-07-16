/* eslint-disable no-unused-vars */
import Paper from '@mui/material/Paper';
import React from 'react';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import withHeaderFooter from '../../../../shared/hoc/withHeaderFooter';
import TenderForm from '../../../molecules/TenderForm';
import BreadCrumb from '../../../molecules/BreadCrumb';

function AddTender() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bid-issuer/tenders/add');
  };
  return (
    <Paper
      style={{
        height: '100vh', marginBottom: '1rem', padding: '1rem', overflow: 'auto',
      }}
    >
      <Box>
        <BreadCrumb />
      </Box>
      <Box>

        <Box>
          <Typography variant="h4" style={{ marginBottom: '2rem' }}>
            Create New Tender
            <Divider style={{ border: '2' }} />
          </Typography>

        </Box>

        <TenderForm />

      </Box>
    </Paper>

  );
}

export default withHeaderFooter(AddTender);
