import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { GoCreditCard } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

import { fs } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

import { CartContext } from '../context/CartContextProvider';
import { UserDetailsContext } from '../context/UserDetailsProvider';

const Payment = () => {
    const { cartItems, subTotal, shippingCost, discount, newUserDiscount, winterDiscount, totalCost, dispatch } = useContext(CartContext);
    const userDetails = useContext(UserDetailsContext);
    const [voucherCode, setVoucherCode] = useState(
        localStorage.getItem("voucherCode") || ''
    );
    const [paymentMethod, setPaymentMethod] = useState('');

    const [disableFlag, setDisableFlag] = useState(
        Boolean(localStorage.getItem("winterVoucher")) || 
        Boolean(localStorage.getItem("newUserVoucher")) || false
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (Boolean(localStorage.getItem("newUserVoucher")) && subTotal + shippingCost < 500) {
            dispatch({type: 'REMOVE_DISCOUNT'});
            localStorage.removeItem("voucherCode");
            setDisableFlag(false);
            setVoucherCode('');
        }
    }, [voucherCode, disableFlag, shippingCost, subTotal, dispatch]);

    const handleVoucherCode = (e) => {
        setVoucherCode(e.target.value);
    }

    const handleVoucher = (e) => {
        e.preventDefault();

        if (disableFlag === true) {
            dispatch({type: 'REMOVE_DISCOUNT'});
            localStorage.removeItem("voucherCode");
            setDisableFlag(false);
            setVoucherCode('');
        } else if (voucherCode === 'AZ8Y69' && totalCost < 500) {
            toast.error('Error! Purchase above Rs.500!');
        } else if (voucherCode === 'AZ8Y69') {
            dispatch({type: 'NEWUSER_DISCOUNT'});
            toast.success('NEW USER DISCOUNT ADDED!');
            localStorage.setItem("voucherCode", voucherCode);
            setDisableFlag(true);
        } else if (voucherCode === 'K6PZ8X') {
            dispatch({type: 'WINTER_DISCOUNT'});
            toast.success('WINTER DISCOUNT ADDED!');
            localStorage.setItem("voucherCode", voucherCode);
            setDisableFlag(true);
        } else {
            toast.error('Invalid Voucher Code!');
            setVoucherCode('');
        }
    }

    // handle payment method input
    const handleChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    const storeOrderDetails = async (orderDetails) => {
        console.log(orderDetails);
        try {
            const docRef = await addDoc(collection(fs, "orders"), orderDetails);
            
            let orderList = [];
            
            if (userDetails.orderList) {
                orderList = [...userDetails.orderList, docRef.id];
            } else {
                orderList = [docRef.id];
            }
            
            const userRef = doc(fs, 'users', userDetails.id);
            setDoc(userRef, {orderList}, { merge: true });
            toast.success('Order placed successful!');
            setTimeout(() => {
                navigate('/review');
            }, 3000);
        } catch (err) {
            toast.err('An error occured!');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hello');

        if (paymentMethod === 'cashon') {
            const orderDetails = {
                orderItems: cartItems,
                status: 'pending',
                subTotal: subTotal,
                shippingCost: shippingCost,
                discount: discount,
                totalCost: totalCost,
                time: new Date().toUTCString(),
                paymentStatus: 'unpaid',
                shippingInfo: JSON.parse(localStorage.getItem('checkoutUserDetails'))
            }
            storeOrderDetails(orderDetails);
        } else if (paymentMethod === 'stripe') {
            toast.error('Sorry! Payment method not included yet!');
        }
    }

    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link active">2. Details</Link>
                    <Link to="/payment" className="cartLink link active">3. Payment</Link>
                    <Link to="/review" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="redLine" style={{width: '70%'}}></div>
                </div>

                <div className="cartContent">
                    <div className="paymentMethods">
                        <p className="selectPaymentTitle">Select Payment Method</p>
                        <form className="selectPaymentMethod" onSubmit={handleSubmit}>
                            <label htmlFor="stripe">
                                <div className="paymentMethod">
                                    <GoCreditCard className="paymentIcon" />
                                    <p>Stripe</p>
                                </div>
                                <input type="radio" name="payment" id="stripe" value="stripe" onChange={handleChange} required /> 
                            </label>
                            <label htmlFor="cashon">
                                <div className="paymentMethod">
                                    <IoWalletOutline className="paymentIcon" />
                                    <p>Cash On delevery</p>
                                </div>
                                <input type="radio" name="payment" id="cashon" value="cashon" onChange={handleChange} />
                            </label>
                            <button className="paymentConfirmBtn">Confirm Order</button>
                        </form>
                    </div>
                    <div className="cartDetails">
                        <div className="cartTotalPriceBox">
                            <div className="cartPriceBox subTotalBox">
                                <p>Sub total</p>
                                <p>{subTotal}Tk</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Shipping Cost </p>
                                <p>{shippingCost}Tk</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Discuont </p>
                                <p>{`${newUserDiscount ? `${discount}+${newUserDiscount}` : winterDiscount ? `${discount}+${winterDiscount}` : discount}`}Tk</p>
                            </div>

                            <div className="voucherInputBox">
                                <input type="text" placeholder="Voucher (If any)" style={disableFlag ? {color: '#999'} : {color: '#ddd'}} value={voucherCode} onChange={handleVoucherCode} disabled={disableFlag} />
                                <button onClick={handleVoucher}>{disableFlag ? 'Applied' : 'Apply'}</button>
                            </div>

                            <div className="cartPriceBox totalCostBox">
                                <p>TOTAL COST </p>
                                <p>{totalCost}Tk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default Payment;