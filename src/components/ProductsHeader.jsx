import React from 'react';
import { GoSearch } from 'react-icons/go';

const ProductsHeader = () => {
    return (
        <div className="productsHeader">
            <div className="searchBar">
                <div className="productSearchIconBox">
                    <GoSearch className="productSearchIcon" />
                </div>
                
                <input type="text" placeholder="Search..." />
            </div>

            <div className="productCountBox">
                <p className="productCount">200/200 items</p>
            </div>
        </div>
    );
}

export default ProductsHeader
