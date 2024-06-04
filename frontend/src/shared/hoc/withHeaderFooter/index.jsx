/* eslint-disable func-names */
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const withNavbar = WrappedComponent => function (props) {
    return (
        <>
            <Header />
            <WrappedComponent
                {...props}
            />
            <Footer />
        </>
    );
};

export default withNavbar;
