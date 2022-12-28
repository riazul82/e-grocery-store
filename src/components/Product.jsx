import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

// icons
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

const Product = ({ data }) => {
    const { cartItems, dispatch } = useContext(CartContext);

    // check if cartItem is already exist in shopping cart
    let cartItem = cartItems.find((elem) => elem.id === data.id);
    let btnFlag = null;

    if (cartItem !== undefined) {
        btnFlag = 'active';
    }

    const handleAddToCart = () => {
        dispatch({type: 'ADD_PRODUCT', payload: data});
    }

    const handleIncrement = () => {
        dispatch({type: 'CONTROL_QUANTITY', payload: {...data, cartQuantity: cartItem.cartQuantity + 1}});
    }

    const handleDecrement = () => {
        if (cartItem.cartQuantity <= 1) {
            dispatch({type: 'REMOVE_PRODUCT', payload: cartItem});
        } else {
            dispatch({type: 'CONTROL_QUANTITY', payload: {...data, cartQuantity: cartItem.cartQuantity - 1}});
        }
    }

    return (
        <div className="product">
            <div className="productCardTop">
                <div className="productCardImage">
                    <img src={data.imgUrl} alt="product" />
                </div>
            </div>
            <div className="productCardBottom">
                <div className="productInfo">
                    <p className="productName">{data.name}</p>
                    <p className="productQuantity">{`${data.weight} ${data.unit}`}</p>
                    <p className="productPrice">{data.discount === '0' ? `${data.price} Tk` : <><del style={{color: '#888'}}>{data.price} Tk</del><ins style={{marginLeft: '0.4rem'}}>{parseInt(data.price - (data.price * data.discount) / 100)} Tk</ins></>}</p>
                </div>
                <button className={`addToCartBtn ${btnFlag}`} onClick={handleAddToCart}>{btnFlag === 'active' ? 'Added' : 'Add to Cart'}</button>
                <div className={`quantityControl ${btnFlag}`}>
                    <button className="btnMinus" onClick={handleDecrement}><HiMinus className="btnIcon" /></button>
                    <span>{`${(cartItem !== undefined) ? cartItem.cartQuantity : 0}`}</span>
                    <button className="btnPlus" onClick={handleIncrement}><HiPlus className="btnIcon" /></button>
                </div>
            </div>
        </div>
    );
}

export default Product;