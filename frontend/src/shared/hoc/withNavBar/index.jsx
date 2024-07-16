/* eslint-disable func-names */
import React from 'react';
import AppBar from '@shared/components/AppBar';

const withNavbar = WrappedComponent => function (props) {
  return (
    <>
      <AppBar />
      <div style={{ padding: '1rem' }}>
        <WrappedComponent
          {...props}
        />
      </div>
    </>
  );
};

export default withNavbar;
