import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// context
import { CartContext } from '../../context/CartContextProvider';
import { UserDetailsContext } from '../../context/UserDetailsProvider';

// firebase
import { fs } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// icons
import { GoCreditCard } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const { cartItems, subTotal, shippingCost, discount, totalCost, dispatch } = useContext(CartContext);
    
    // states
    const userDetails = useContext(UserDetailsContext);
    const [paymentMethod, setPaymentMethod] = useState('');

    const navigate = useNavigate();

    // handle payment method input
    const handleChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    // store order details to firestore
    const storeOrderDetails = async (orderDetails) => {
        try {
            const docRef = await addDoc(collection(fs, "orders"), orderDetails);
            
            let orderList = [];
            
            if (userDetails.orderList) {
                orderList = [...userDetails.orderList, docRef.id];
            } else {
                orderList = [docRef.id];
            }
            
            const userRef = doc(fs, 'users', userDetails.id);
            setDoc(userRef, {orderList}, {merge: true});
            setTimeout(() => {
                toast.success('Order placed successfully!');
            }, 100);
            localStorage.setItem("orderConfirmed", true);
            dispatch({type: 'ORDER_CONFIRMED'});
            setTimeout(() => {
                navigate('/review');
            }, 3000);
        } catch (err) {
            toast.err('An error occured!');
        }
    }

    // confirm order
    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentMethod === 'cashon') {
            const orderDetails = {
                orderItems: cartItems,
                status: 'pending',
                subTotal: subTotal,
                shippingCost: shippingCost,
                discount: discount,
                totalCost: totalCost,
                time: new Date().toUTCString(),
                paymentMethod: paymentMethod,
                paymentStatus: 'unpaid',
                shippingInfo: JSON.parse(localStorage.getItem('checkoutUserDetails'))
            }
            storeOrderDetails(orderDetails);
        } else if (paymentMethod === 'stripe') {
            toast.error('Sorry! Payment method not included yet!');
        }
    }

    const handleRedirectReview = () => {
        toast.error('Please confirm order!');
    }

    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link active">2. Details</Link>
                    <Link to="/payment" className="cartLink link active">3. Payment</Link>
                    <div onClick={handleRedirectReview} className="cartLink">4. Review</div>
                    <div className="darkLine"></div>
                    <div className="greenLine" style={{width: '70%'}}></div>
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
                                <p>{discount}Tk</p>                          
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