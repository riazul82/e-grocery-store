import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import AppLayout from '../../layouts/AppLayout';
import CartAmountDetails from '../../components/cart/CartAmountDetails';

// context
import { CartContext } from '../../context/CartContextProvider';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { subTotal, shippingCost, discount, totalCost, dispatch } = useContext(CartContext);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('checkoutUserDetails')) ||
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

    // handle checkout input change
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
    }

    const handleRedirectPayment = () => {
        toast.error('Please checkout first!');
    }

    // submit checkout form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'CHECKOUT_FORM_FILLED'});
        localStorage.setItem("checkoutUserDetails", JSON.stringify(user));
        localStorage.setItem("checkoutFormFilled", true);
        navigate('/payment');
    }

    return (
        <AppLayout>
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link active">2. Details</Link>
                    <div onClick={handleRedirectPayment} className="cartLink">3. Payment</div>
                    <div className="cartLink">4. Review</div>
                    <div className="darkLine"></div>
                    <div className="greenLine" style={{width: '35%'}}></div>
                </div>

                <div className="cartContent">
                    <form className="cartLeftContent checkoutForm" onSubmit={handleSubmit}>
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

                    <div className="cartRightContent cartAmountDetails">
                        <CartAmountDetails subTotal={subTotal} shippingCost={shippingCost} discount={discount} totalCost={totalCost} />
                    </div>
                </div>
            </div>
            
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
        </AppLayout>
    );
}

export default Checkout;