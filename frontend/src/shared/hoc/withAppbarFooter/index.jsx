/* eslint-disable func-names */
import React from 'react';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';

const withAppBarFooter = WrappedComponent => function (props) {
  return (
    <>
      <AppBar />
      <WrappedComponent
        {...props}
      />
      <FooterBar />
    </>
  );
};

export default withAppBarFooter;
