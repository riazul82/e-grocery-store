import React from 'react';
import Navbar from '../components/Navbar';
import ProductsHeader from '../components/ProductsHeader';
import SubProducts from '../components/SubProducts';

const Products = () => {
    return (
        <>
            <Navbar />
            <div className="allProducts">
                <ProductsHeader />
                <SubProducts category="top-products" />
            </div>
        </>
    );
}

export default Products;