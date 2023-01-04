import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import AppLayout from '../../layouts/AppLayout';
import CartProduct from '../../components/cart/CartProduct';
import CartAmountDetails from '../../components/cart/CartAmountDetails';

// context
import { CartContext } from '../../context/CartContextProvider';

const Cart = () => {
    const { cartItems, subTotal, shippingCost, discount, totalCost } = useContext(CartContext);
    
    return (
        <AppLayout>
            <div className="cart">
                <div className="cartHeader">
                    <Link to="/cart" className="cartLink link active">1. Cart</Link>
                    <Link to="/checkout" className="cartLink link">2. Details</Link>
                    <Link to="/checkout" className="cartLink link">3. Payment</Link>
                    <Link to="/checkout" className="cartLink link">4. Review</Link>
                    <div className="darkLine"></div>
                    <div className="greenLine" style={{width: '0%'}}></div>
                </div>

                <div className="cartContent">
                    <div className="cartLeftContent cartProducts">
                        {cartItems && cartItems.map((item) => {
                            return <CartProduct key={item.id} cartItem={item} />
                        })}
                    </div>
                    <div className="cartRightContent cartAmountDetails">
                        <CartAmountDetails subTotal={subTotal} shippingCost={shippingCost} discount={discount} totalCost={totalCost} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Cart;