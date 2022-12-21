import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import ProductsHeader from '../components/ProductsHeader';
import SubProducts from '../components/SubProducts';
import { ProductsContext } from '../context/ProductsContextProvider';


const Products = () => {
    const {top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads} = useContext(ProductsContext);

    return (
        <>
            <Navbar />
            <div className="allProducts">
                <ProductsHeader />
                <SubProducts title="Top Products" items={top} />
                <SubProducts title="Recent Products" items={recent} />
                <SubProducts title="Popular now" items={popular} />
                <SubProducts title="Vegetables" items={vegetables} />
                <SubProducts title="Fruits" items={fruits} />
                <SubProducts title="Meat & Fish" items={meatFish} />
                <SubProducts title="Eggs" items={eggs} />
                <SubProducts title="Tea & Coffe" items={teaCoffe} />
                <SubProducts title="Spices" items={spices} />
                <SubProducts title="Dry fruits" items={dryFruits} />
                <SubProducts title="Jam & Jellie" items={jamJellie} />
                <SubProducts title="Biscuit & Cake" items={biscuitCake} />
                <SubProducts title="Breads" items={breads} />
            </div>
        </>
    );
}

export default Products;