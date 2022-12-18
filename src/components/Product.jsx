import React from 'react';
import bannarImg4 from '../assets/images/categories/grapes.svg';

const Product = () => {
    return (
        <div className="product">
            <div className="productCardTop">
                <div className="productCardImage">
                    <img src={bannarImg4} alt="product" />
                </div>
            </div>
            <div className="productCardBottom">
                <div className="productInfo">
                    <p className="productName">Fresh Cabbage</p>
                    <p className="productQuantity">1 kg</p>
                    <p className="productPrice">120 Tk</p>
                </div>
                <button className="addToCartBtn">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;