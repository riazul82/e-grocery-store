import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link">2. Details</Link>
                    <Link to="/payment" className="cartLink link">3. Payment</Link>
                    <Link to="/profile" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="redLine" style={{width: '0%'}}></div>
                </div>

                <div className="cartContent">
                    <div className="cartProducts">
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div className="cartDetails">
                        <div className="cartTotalPriceBox">
                            <div className="cartPriceBox subTotalBox">
                                <p>Sub total: </p>
                                <p>120.00$</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Shipping Cost: </p>
                                <p>60.00$</p>
                            </div>
                            <div className="cartPriceBox shippingCostBox">
                                <p>Discuont: </p>
                                <p>80.00$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Cart;