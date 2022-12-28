import React, { useContext, useEffect, useState } from 'react';
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
    const { cartItems, subTotal, shippingCost, discount, newUserDiscount, winterDiscount, totalCost, NEW_USER_VOUCHER, WINTER_VOUCHER, dispatch } = useContext(CartContext);
    
    // states
    const userDetails = useContext(UserDetailsContext);
    const [voucherCode, setVoucherCode] = useState(
        localStorage.getItem("voucherCode") || ''
    );
    const [paymentMethod, setPaymentMethod] = useState('');
    
    // track active voucher
    const [disableFlag, setDisableFlag] = useState(
        Boolean(localStorage.getItem("winterVoucher")) || 
        Boolean(localStorage.getItem("newUserVoucher")) || false
    );

    const navigate = useNavigate();

    useEffect(() => {
        // if purchase amount < 500, then remove voucher
        if (Boolean(localStorage.getItem("newUserVoucher")) && subTotal + shippingCost < 500) {
            dispatch({type: 'REMOVE_DISCOUNT'});
            localStorage.removeItem("voucherCode");
            setDisableFlag(false);
            setVoucherCode('');
        }
    }, [voucherCode, disableFlag, shippingCost, subTotal, dispatch]);

    // handle voucher input
    const handleVoucherCode = (e) => {
        setVoucherCode((e.target.value).split(' ').join('').toUpperCase());
    }

    // apply or remove voucher
    const handleVoucher = (e) => {
        e.preventDefault();
        if (disableFlag === true) {
            dispatch({type: 'REMOVE_DISCOUNT'});
            localStorage.removeItem("voucherCode");
            setDisableFlag(false);
            setVoucherCode('');
        } else if (voucherCode === NEW_USER_VOUCHER && totalCost < 500) {
            toast.error('Error! Purchase above Rs.500!');
        } else if (voucherCode === NEW_USER_VOUCHER) {
            dispatch({type: 'NEWUSER_DISCOUNT'});
            toast.success('NEW USER DISCOUNT ADDED!');
            localStorage.setItem("voucherCode", voucherCode);
            setDisableFlag(true);
        } else if (voucherCode === WINTER_VOUCHER) {
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

    // store order details to firestore
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
            setDoc(userRef, {
                orderList,
                isWinterVoucherAdded: Boolean(localStorage.getItem("winterVoucher")) || false,
                isNewUserVoucherAdded: Boolean(localStorage.getItem("newUserVoucher")) || false,
            }, {merge: true});
            toast.success('Order placed successful!');
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
                paymentStatus: 'unpaid',
                isWinterVoucherAdded: Boolean(localStorage.getItem("winterVoucher")) || false,
                isNewUserVoucherAdded: Boolean(localStorage.getItem("newUserVoucher")) || false,
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
                                <p>{`${newUserDiscount ? `${discount}+${newUserDiscount.toFixed(1)}` : winterDiscount ? `${discount}+${winterDiscount.toFixed(1)}` : discount}`}Tk</p>
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