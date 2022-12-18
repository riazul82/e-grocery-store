import React from 'react';
import Product from '../components/Product';

const SubProducts = () => {
    let arr = [];

    for (let i = 1; i <= 8; i ++) {
        arr.push(i);
    }

    return (
        <div className="subProducts">
            <p className="subProductsHeader">Top products</p>
            <div className="subProductsWrap">
                {
                    arr.map(() => {
                        return <Product/>
                    })
                }
            </div>
            
        </div>
    );
}

export default SubProducts;