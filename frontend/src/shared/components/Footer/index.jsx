import React from 'react';
import {
  Grid, Link, Typography, Box, Container,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import HLogo from '../../../../public/bidphere_logo_notext_v1.png';
import Logo from '../../../../public/bidphere_logo_v1.png';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  // flexDirection: 'column',
  backgroundColor: '#e5e5e5',
}));

const Main = styled('main')({
  flexGrow: 1,
});

const StyledContainer = styled(Container)({
  padding: '2rem 0',
});

function Footer() {
  return (
    <FooterContainer>
      <Divider style={{ border: '2' }} />
      <StyledContainer>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={3}>
            <img src={Logo} alt="Logo" style={{ width: '15rem' }} />
          </Grid>

          <Grid item md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block">
                <span><HomeIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Home
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><InfoIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                About
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><MiscellaneousServicesIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Services
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><ContactsIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block">
                <span><LiveHelpIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                FAQ
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><HelpCenterIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Help Center
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><GavelIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" display="block">
                <span><PolicyIcon fontSize="8" style={{ marginRight: '2px' }} /></span>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </FooterContainer>
  );
}

export default Footer;
