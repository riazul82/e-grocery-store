import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import AppLayout from '../../layouts/AppLayout';

// images
import celetrationImg from '../../assets/images/project/fireworks.png';

const Review = () => {
    let checkoutUser = JSON.parse(localStorage.getItem("checkoutUserDetails"));
    const [countdown, setCountdown] = useState(10);

    const navigate = useNavigate();

    const removeLocalStorageData = () => {
        localStorage.removeItem("checkoutUserDetails");
        localStorage.removeItem("checkoutFormFilled");
        localStorage.removeItem("orderConfirmed");
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timerId);
            removeLocalStorageData();
            navigate('/');
        }

        return (() => clearInterval(timerId));
    });

    const handleRedirectHome = () => {
        removeLocalStorageData();
        navigate('/');
    }

    return (
        <AppLayout>
            <div className="cart">
                <div className="cartHeader">
                    <div className="cartLink active">1. Cart</div>
                    <div className="cartLink active">2. Details</div>
                    <div className="cartLink active">3. Payment</div>
                    <div className="cartLink active">4. Review</div>
                    <div className="darkLine"></div>
                    <div className="greenLine" style={{width: '90%'}}></div>
                </div>

                <div className="reviewContent">
                    <div className="greetingBox">
                        <div className="greetingImageWrap">
                            <img src={celetrationImg} alt="greeting" />
                        </div>
                        <p className="greetings">Thank you <strong>{checkoutUser.name}</strong>!! Your order have been receieved!</p>
                    </div>
                    <div className="redirectBox">
                        <span onClick={handleRedirectHome} className="redirectToHomeBtn">Back to Home</span>
                        <span>or auto redirected to home in {countdown}s</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Review;