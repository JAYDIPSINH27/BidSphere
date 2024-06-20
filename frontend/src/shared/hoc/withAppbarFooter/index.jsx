/* eslint-disable func-names */
import React from 'react';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';

const withNavbar = WrappedComponent => function (props) {
    return (
        <>
            <AppBar />

            <div className=''>

                <WrappedComponent
                    {...props}
                />

            </div>

            <FooterBar />
        </>
    );
};

export default withNavbar;
