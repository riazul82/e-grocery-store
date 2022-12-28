import React from 'react';
import { Link } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Review = () => {
    return (
        <>
        <Navbar />
        <div className="cart">
            <div className="cartHeader">
                <Link to="/cart" className="cartLink link active">1. Cart</Link>
                <Link to="/checkout" className="cartLink link active">2. Details</Link>
                <Link to="/payment" className="cartLink link active">3. Payment</Link>
                <Link to="/review" className="cartLink link active">4. Review</Link>
                <div className="darkLine"></div>
                <div className="redLine" style={{width: '90%'}}></div>
            </div>

            <div className="cartContent">
                <p>Order placed successfully!</p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Review;