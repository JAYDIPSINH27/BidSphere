/* external imports */
import React from 'react';
/* styles */
// import './index.scss';
/* internal components */
import withNavbar from '../shared/hoc/withNavBar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <h1> HomePage </h1>
    <h1>My Functionality  Work:</h1>
    <Link to="/bid-issuer/tenders">
      
      <h1>New Tender Creation</h1>

    </Link>
    </>
    
  );
}

export default withNavbar(App);
