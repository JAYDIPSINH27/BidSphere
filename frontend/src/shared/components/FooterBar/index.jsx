import React from 'react'
import Logo from '../../../../public/bidphere_logo_onlytext_v2.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';


const FooterBar = () => {
  return (
    <footer className='py-[70px] bg-gray-10'>
      <div className='container'>
        <div>
          <div className='flex flex-col'>
            <div className='flex items-start justify-between flex-wrap gap-8'>
              <div className='footer-col'>
                <h2 className='text-h3 text-white'>
                  {/* <img src={Logo} alt="Logo" /> */}
                  BidSphere
                </h2>
                <p className='text-base !leading-[normal] text-gray-80'>
                  Your Trusted Partner in Tender Bidding and Procurement.
                </p>
                <div className='flex items-center gap-x-4'>
                  <a href="">
                    <FacebookIcon className='text-white' />
                  </a>
                  <a href="">
                    <TwitterIcon className='text-white' />
                  </a>
                  <a href="">
                    <InstagramIcon className='text-white' />
                  </a>
                  <a href="">
                    <LinkedInIcon className='text-white' />
                  </a>
                </div>


              </div>
              <div className='footer-col'>
                <p className='footer-heading'>
                  Quick Links
                </p>
                <div className='flex flex-col gap-y-2'>
                  <a href="" className='footer-link'>Home</a>
                  <a href="" className='footer-link'>About Us</a>
                  <a href="" className='footer-link'>Services</a>
                  <a href="" className='footer-link'>Contact Us</a>
                </div>
              </div>

              <div className='footer-col'>
                <p className='footer-heading'>
                  Support
                </p>
                <div className='flex flex-col gap-y-2'>
                  <a href="" className='footer-link'>
                    <LiveHelpIcon className='text-white mr-2' />
                    FAQ</a>
                  <a href="" className='footer-link'>
                    <HelpCenterIcon className='text-white mr-2' />
                    Help Center</a>
                  <a href="" className='footer-link'>
                    <GavelIcon className='text-white mr-2' />
                    Terms of Service</a>
                  <a href="" className='footer-link'>
                    <PolicyIcon className='text-white mr-2' />
                    Privacy Policy</a>
                </div>
              </div>

              <div className='footer-col'>
                <p className='footer-heading'>
                  Contact Us
                </p>
                <div className='flex flex-col gap-y-2'>
                  <a href="" className='footer-link'>Mail Address: 6299 South St, Halifax, Nova Scotia, Canada</a>
                  <a href="mailto:bidshphere@gmail.com" className='footer-link'>bidshphere@gmail.com</a>
                  <a href="tel:+11234567890" className='footer-link'>+1 (123) 456-7890 </a>
                </div>
              </div>


            </div>


          </div>
        </div>


        <div>
          <p className='flex pt-20 text-base text-gray-80 justify-center'> Copyright © 2024, BidSphere.

          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterBar