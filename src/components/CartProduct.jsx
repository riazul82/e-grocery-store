import React, { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { CartContext } from '../context/CartContextProvider';

const CartProduct = ({ cartItem }) => {
    const { dispatch } = useContext(CartContext);

    const handleRemove = () => {
        dispatch({type: 'REMOVE_PRODUCT', payload: cartItem});
    }

    const handleIncrement = () => {
        dispatch({type: 'CONTROL_QUANTITY', payload: {...cartItem, cartQuantity: cartItem.cartQuantity + 1}});
    }

    const handleDecrement = () => {
        if (cartItem.cartQuantity > 1) {
            dispatch({type: 'CONTROL_QUANTITY', payload: {...cartItem, cartQuantity: cartItem.cartQuantity - 1}});
        }
    }

    return (
        <div className="cartProduct">
            <div className="cartProductImageBox">
                <img src={cartItem.imgUrl} alt="product" />
            </div>
            <div className="cartProductDetails">
                <p className="cartProductName">{cartItem.name}</p>
                <p className="cartProductQuantity">{`${cartItem.weight} ${cartItem.unit} * ${cartItem.cartQuantity}`}</p>
                <p className="cartProductPrice">{cartItem.price * cartItem.cartQuantity}Tk</p>
            </div>
            <div className="productRemoveBtnBox" onClick={handleRemove}>
                <button className="productRemoveBtn">
                    <RiDeleteBin6Line className="productRemoveIcon"/>
                </button>
            </div>
            <div className="quantityController">
                <button className="btnMinus" onClick={handleDecrement}><HiMinus className="ctrlIcon" /></button>
                <span>{cartItem.cartQuantity}</span>
                <button className="btnPlus" onClick={handleIncrement}><HiPlus className="ctrlIcon" /></button>
            </div>
        </div>
    );
}

export default CartProduct;