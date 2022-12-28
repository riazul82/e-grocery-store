import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import Product from './Product';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const CategoryProducts = ({ title, items }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="subProducts">
            <div className="subProductsHeader">
                <p className="title">{title}</p>
                <div className="viewAllLink">
                    <Link to="/products" className="link viewAll">All Products</Link>
                    <RxDoubleArrowRight className="arrow" />
                </div>
            </div>
            <div className="subProductsWrap">
                {items && items.map((item) => {
                    return <Product key={item.id} data={item} />
                })}
            </div>
        </div>
    );
}

export default CategoryProducts;