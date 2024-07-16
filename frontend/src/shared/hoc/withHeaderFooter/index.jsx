/* eslint-disable func-names */
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const withNavbar = WrappedComponent => function (props) {
  return (
    <>
      <Header />
      <div className="h-screen">

        <WrappedComponent
          {...props}
        />

      </div>

      <Footer />
    </>
  );
};

export default withNavbar;
