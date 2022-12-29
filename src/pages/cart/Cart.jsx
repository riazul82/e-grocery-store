import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartProduct from '../../components/cart/CartProduct';

// context
import { CartContext } from '../../context/CartContextProvider';
import { UserDetailsContext } from '../../context/UserDetailsProvider';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { cartItems, subTotal, shippingCost, discount, newUserDiscount, winterDiscount, totalCost, NEW_USER_VOUCHER, WINTER_VOUCHER, dispatch } = useContext(CartContext);
    const userDetails = useContext(UserDetailsContext);

    // states
    const [voucherCode, setVoucherCode] = useState(
        localStorage.getItem("voucherCode") || ''
    );
    
    // track active voucher
    const [disableFlag, setDisableFlag] = useState(
        JSON.parse(localStorage.getItem("winterVoucher")) || 
        JSON.parse(localStorage.getItem("newUserVoucher")) || false
    );

    useEffect(() => {
        // if purchase amount < 500, then remove voucher
        if (JSON.parse(localStorage.getItem("newUserVoucher")) && subTotal + shippingCost < 500) {
            dispatch({type: 'REMOVE_DISCOUNT'});
            localStorage.removeItem("voucherCode");
            setDisableFlag(false);
            setVoucherCode('');
        }
        
        setDisableFlag(JSON.parse(localStorage.getItem("winterVoucher")) || JSON.parse(localStorage.getItem("newUserVoucher")) || false);

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
            setVoucherCode('');
        } else if (voucherCode === NEW_USER_VOUCHER && totalCost < 500) {
            toast.error('Error! Purchase above Rs.500!');
        } else if (voucherCode === NEW_USER_VOUCHER && userDetails.isNewUserVoucherUsed) {
            toast.error('You have already used this voucher!');
        } else if (voucherCode === NEW_USER_VOUCHER) {
            dispatch({type: 'NEWUSER_DISCOUNT'});
            localStorage.setItem("voucherCode", voucherCode);
            setTimeout(() => {
                toast.success('NEW USER DISCOUNT ADDED!');
            }, 200);
        } else if (voucherCode === WINTER_VOUCHER && userDetails.isWinterVoucherUsed) {
            toast.error('You have already used this voucher!');
        } else if (voucherCode === WINTER_VOUCHER) {
            dispatch({type: 'WINTER_DISCOUNT'});
            localStorage.setItem("voucherCode", voucherCode);
            setTimeout(() => {
                toast.success('WINTER DISCOUNT ADDED!');
            }, 200);
        } else {
            toast.error('Invalid Voucher Code!');
            setVoucherCode('');
        }
    }

    return (
        <>
            <Navbar />
            {console.log('disable_flag: ', disableFlag)}
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link">2. Details</Link>
                    <Link to="/checkout" className="cartLink link">3. Payment</Link>
                    <Link to="/checkout" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="redLine" style={{width: '0%'}}></div>
                </div>

                <div className="cartContent">
                    <div className="cartProducts">
                        {cartItems && cartItems.map((item) => {
                            return <CartProduct key={item.id} cartItem={item} />
                        })}
                    </div>

                    <div className="cartDetails">
                        <div className="cartTotalPriceBox">
                            <div className="cartPriceBox subTotalBox">
                                <p>Sub total</p>
                                <p>{subTotal}Tk</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Shipping Cost</p>
                                <p>{shippingCost}Tk</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Discuont</p>
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

export default Cart;