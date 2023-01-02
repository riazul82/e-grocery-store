import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EmptyCart = () => {
    return (
        <>
            <Navbar />
            <div className="emptyCart">
                <h1 className="title">Cart is Empty!</h1>
            </div>
            <Footer />
        </>
    );
}

export default EmptyCart;