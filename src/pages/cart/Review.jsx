import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import celetrationImg from '../../assets/images/project/fireworks.png';

const Review = () => {
    let checkoutUser = JSON.parse(localStorage.getItem("checkoutUserDetails"));
    const [countdown, setCountdown] = useState(10);

    const navigate = useNavigate();

    useEffect(() => {
        let timerId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const removeLocalStorageData = () => {
            localStorage.removeItem("checkoutUserDetails");
            localStorage.removeItem("checkoutFormFilled");
            localStorage.removeItem("orderConfirmed");
            localStorage.removeItem("cartItems");
        }

        if (countdown === 0) {
            clearInterval(timerId);
            removeLocalStorageData();
            navigate('/');
            setTimeout(() => {
                document.location.reload();
            }, 100);
        }

        return (() => clearInterval(timerId));
    });

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

            <div className="reviewContent">
                <div className="greetingBox">
                    <div className="greetingImageWrap">
                        <img src={celetrationImg} alt="greeting" />
                    </div>
                    <p className="greetings">Thank you <strong>{checkoutUser.name}</strong>!! Your order have been receieved!</p>
                </div>
                <p className="redirectMsg">You will be redirected to home in {countdown}s</p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Review;