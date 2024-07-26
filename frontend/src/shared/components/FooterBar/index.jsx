/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import { Link } from 'react-router-dom';
import Modal from '../../../components/molecules/LandingPage/Modal';
import { footerData } from '../../constants';

function FooterBar() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="py-[70px] bg-gray-10">
      <div className="container">
        <div>
          <div className="flex flex-col">
            <div className="flex items-start justify-between flex-wrap gap-8">
              <div className="footer-col">
                <Link to="/">
                  <h2 className="text-h3 text-white">
                    BidSphere
                  </h2>
                </Link>
                <p className="text-base !leading-[normal] text-gray-80">
                  Your Trusted Partner in Tender Bidding and Procurement.
                </p>
                <div className="flex items-center gap-x-4">
                  <a href="#">
                    <FacebookIcon className="text-white" />
                  </a>
                  <a href="#">
                    <TwitterIcon className="text-white" />
                  </a>
                  <a href="#">
                    <InstagramIcon className="text-white" />
                  </a>
                  <a href="#">
                    <LinkedInIcon className="text-white" />
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">
                  Quick Links
                </p>
                <div className="flex flex-col gap-y-2">
                  <Link to="/" className="footer-link">Home</Link>
                  <a href="#about" className="footer-link">About Us</a>
                  <a href="#tenders" className="footer-link">Tenders</a>
                  <Link to="/contact" className="footer-link">Contact Us</Link>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">
                  Support
                </p>
                <div className="flex flex-col gap-y-2">
                  <Link to="/faq" className="footer-link">
                    <LiveHelpIcon className="text-white mr-2" />
                    FAQ
                  </Link>
                  <div>
                    <GavelIcon className="text-white mr-2" />
                    <button type="button" className="footer-link" onClick={() => setIsTermsModalOpen(true)}>
                      Terms of Service
                    </button>
                  </div>
                  <div>
                    <PolicyIcon className="text-white mr-2" />
                    <button type="button" className="footer-link" onClick={() => setIsPrivacyModalOpen(true)}>
                      Privacy Policy
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">
                  Contact Us
                </p>
                <div className="flex flex-col gap-y-2">
                  <a href="#" className="footer-link">Mail Address: 6299 South St, Halifax, Nova Scotia, Canada</a>
                  <a href="mailto:bidsphere24@gmail.com" className="footer-link">{import.meta.env.VITE_EMAIL}</a>
                  <a href="tel:+11234567890" className="footer-link">+1 (123) 456-7890</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="flex pt-20 text-base text-gray-80 justify-center"> Copyright © 2024, BidSphere.

          </p>
        </div>
      </div>
      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title={footerData.termsandservice.title}
        content={footerData.termsandservice.content}
      />
      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title={footerData.privacypolicy.title}
        content={footerData.privacypolicy.content}
      />
    </footer>
  );
}

export default FooterBar;
