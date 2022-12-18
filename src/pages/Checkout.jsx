import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link active">2. Details</Link>
                    <Link to="/payment" className="cartLink link">3. Payment</Link>
                    <Link to="/profile" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="redLine" style={{width: '35%'}}></div>
                </div>

                <div className="cartDetails">
                    
                </div>
            </div>
        </>
    );
}

export default Checkout;