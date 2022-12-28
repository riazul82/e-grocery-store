import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

import { CartContext } from '../context/CartContextProvider';

const Checkout = () => {
    const { subTotal, shippingCost, discount, newUserDiscount, winterDiscount, totalCost, dispatch } = useContext(CartContext);
    const [voucherCode, setVoucherCode] = useState(
        localStorage.getItem("voucherCode") || ''
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('userDetails')) ||
        {
            id: '',
            name: '',
            email: '',
            phone: '',
            address: {
                street: '',
                division: '',
                city: '',
                postcode: '',
                country: 'Bangladesh'
            }
        }
    );

    const navigate = useNavigate();

    const [disableFlag, setDisableFlag] = useState(
        Boolean(localStorage.getItem("winterVoucher")) || 
        Boolean(localStorage.getItem("newUserVoucher")) || false
    );

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

    const handleChange = (e) => {
        let name = e.target.name;

        if (name === 'street' || name === 'city' || name ==='division' || name ==='postcode') {
            setUser({...user, address: {
                ...user.address,
                [name]: e.target.value
            }})
        } else {
            setUser({...user, [name]: e.target.value});
        }

        localStorage.setItem('checkoutFormFilled', true);

        // check if any checkout from field empty or not
        for (let key in user) {
            if (user[key] === 'address') {
                for (let key in user.address) {
                    if (user.address[key] === '') {
                        localStorage.setItem('checkoutFormFilled', false);
                    }
                }
            } else {
                if (user[key] === '') {
                    localStorage.setItem('checkoutFormFilled', false);
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('checkoutUserDetails', JSON.stringify(user));
        navigate('/payment');
    }

    return (
        <>
            <Navbar />
            <div className="cart">
            <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link active">2. Details</Link>
                    <Link to="/payment" className="cartLink link">3. Payment</Link>
                    <Link to="/review" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="redLine" style={{width: '35%'}}></div>
                </div>

                <div className="cartContent">
                    <form className="checkoutForm" onSubmit={handleSubmit}>
                        <div className="inputField">
                            <label htmlFor="name">Full name</label>
                            <input type="text" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Full name" required />
                        </div>

                        <div className="inputField">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={user.email} onChange={handleChange} placeholder="Email" disabled />
                        </div>

                        <div className="inputField">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone" id="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
                        </div>

                        <div className="addressInput">
                            <p>Address:</p>
                            
                            <div className="addressInputField">
                                <div className="inputField">              
                                    <label htmlFor="street">Street</label>
                                    <input type="text" name="street" id="street" value={user.address.street} onChange={handleChange} placeholder="Street address" required />                                        
                                </div>

                                <div className="inputField">
                                    <label htmlFor="division">Division</label>
                                    <input type="text" name="division" id="division" value={user.address.division} onChange={handleChange} placeholder="Division" required />                                        
                                </div>

                                <div className="inputField">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city" value={user.address.city} onChange={handleChange} placeholder="City" required />                                        
                                </div>

                                <div className="inputField">
                                    <label htmlFor="postcode">ZIP/Postcode</label>
                                    <input type="number" name="postcode" id="postcode" value={user.address.postcode} onChange={handleChange} placeholder="ZIP/Postcode" required />                                        
                                </div>
                                
                                <div className="inputField">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" value={user.address.country} placeholder="Country" disabled />                                        
                                </div>
                            </div>
                        </div>

                        <div className="buttonField">
                            <button type="submit" className="checkoutSubmitBtn">Checkout</button>
                        </div>
                    </form>

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

export default Checkout;