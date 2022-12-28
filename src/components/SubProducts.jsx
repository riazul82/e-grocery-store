import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { RxDoubleArrowRight } from 'react-icons/rx';

const SubProducts = ({ title, link, items }) => {
    return (
        <div className="subProducts">
            <div className="subProductsHeader">
                <p className="title">{title}</p>
                <div className="viewAllLink">
                    <Link to={`/products/${link}`} className="link viewAll">View all</Link>
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

export default SubProducts;