import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import bannarImg from '../assets/images/bannar/img1.jpg';

const CartProduct = () => {
    return (
        <div className="cartProduct">
            <div className="cartProductImageBox">
                <img src={bannarImg} alt="product" />
            </div>
            <div className="cartProductDetails">
                <p className="cartProductName">Fresh Strawberry</p>
                <p className="cartProductQuantity">1kg * 2</p>
                <p className="cartProductPrice">120Tk</p>
            </div>
            <div className="productRemoveBtnBox">
                <button className="productRemoveBtn">
                    <RiDeleteBin6Line className="productRemoveIcon"/>
                </button>
            </div>
            <div className="quantityController">
                <button className="btnMinus"><HiMinus className="ctrlIcon" /></button>
                <span>1</span>
                <button className="btnPlus"><HiPlus className="ctrlIcon" /></button>
            </div>
        </div>
    );
}

export default CartProduct;