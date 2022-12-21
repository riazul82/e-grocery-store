import React from 'react';
import { Link } from 'react-router-dom';
import { RxDoubleArrowRight } from 'react-icons/rx';
import Product from '../components/Product';

const SubProducts = ({ title, items }) => {
    return (
        <div className="subProducts">
            <div className="subProductsHeader">
                <p className="title">{title}</p>
                <div className="viewAllLink">
                    <Link to="/products" className="link viewAll">View all</Link>
                    <RxDoubleArrowRight className="arrow" />
                </div>
            </div>
            <div className="subProductsWrap">
                {
                    items && items.map((item) => {
                        return <Product key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    );
}

export default SubProducts;