import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AppLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default AppLayout;