/* external imports */
import React from 'react';
/* styles */
// import './index.scss';
/* internal components */
import withNavbar from '../shared/hoc/withNavBar';

function App() {
  return (
    <h1> HomePage </h1>
  );
}

export default withNavbar(App);
