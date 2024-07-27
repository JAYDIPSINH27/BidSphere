/* eslint-disable func-names */
import React from 'react';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';

const withAppBarFooter = WrappedComponent => function (props) {
  return (
    <>
      <AppBar />
      <div style={{ padding: '1rem' }}>
        <WrappedComponent {...props} />
      </div>
      <FooterBar />
    </>
  );
};

export default withAppBarFooter;
