import Paper from '@mui/material/Paper';
import React from 'react';
import withHeaderFooter from '../../../../shared/hoc/withHeaderFooter';
import Table from '../../../molecules/Table';
import { Box, Button, Divider, Typography } from '@mui/material';
import BreadCrumb from '../../../molecules/BreadCrumb';
import { useNavigate } from 'react-router-dom';

const Tenders = () => {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/bid-issuer/tenders/add');
    };
  return (
    <Paper elevation={1} style={{ height: "100vh" }}>
      <Box>
        <BreadCrumb />
      </Box>
      <Box style={{ padding: "10px" }}>

        <Box>
          <Typography variant="h4" style={{ marginBottom: "2rem" }}>
            Tenders
            <Divider style={{ border: "2" }} />
          </Typography>

        </Box>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-end",gap:"1rem" }}>
          <Button variant="contained" onClick={handleClick}>Add Tender +</Button>
          <Table />
        </Box>


      </Box>
    </Paper >

  );
}

export default withHeaderFooter(Tenders)