import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { GoSearch } from 'react-icons/go';
import SubProducts from '../components/SubProducts';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { ProductsContext } from '../context/ProductsContextProvider';


const Products = () => {
    const {products, top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads} = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');
    const [searchTimer, setSearchTimer] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const location = useLocation();
    window.scrollTo(0, 0);

    useEffect(() => {
        if (location.state !== null) {
            setSearchText(location.state);
            document.getElementById('searchInput').value = location.state;
            location.state = null;
        }

        const items = searchText !== '' && products && products.filter((item) => {
            const mainText = ''.concat(item.name, item.category, item.type, item.weight, item.unit).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            const srchText = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            
            if (mainText.includes(srchText)) {
                return true;
            } else {
                return false;
            }
        });

        if (items) {
            setFilteredItems(items);
        }

    }, [searchText, products, location.state, location]);

    const handleSearch = (e) => {
        clearTimeout(searchTimer);

        setSearchTimer(
            setTimeout(() => {
                setSearchText(e.target.value);
            }, 900)
        );
    }

    return (
        <>
            <Navbar />
            <div className="allProducts">
                <div className="productsHeader">
                    <div className="searchBar">
                        <div className="productSearchIconBox">
                            <GoSearch className="productSearchIcon" />
                        </div>
                        <input type="text" onChange={handleSearch} id="searchInput" placeholder="Search..." />
                    </div>
                    <div className="productCountBox">
                        <p className="productCount">{searchText !== '' ? filteredItems.length : products ? products.length : 0}/{products ? products.length : 0} items</p>
                    </div>
                </div>

                <div className="filteredItems" style={(searchText === '') ? {display: 'none'} : {display: 'block'}}>
                    <p className="filteredItemsTitle">Search result for <span>"{searchText}"</span></p>
                    {
                        filteredItems.length ?
                        <div className="filteredItemsWrap">
                            {
                                filteredItems.map((item) => {
                                    return <Product key={item.id} data={item} />
                                })
                            }
                        </div> :
                        <p className="notFoundTxt">No items found!</p>
                    }
                </div>

                <div className="productItems" style={(searchText === '') ? {display: 'block'} : {display: 'none'}}>
                    <SubProducts title="Top Products" link="top" items={top} />
                    <SubProducts title="Recent Products" link="recent" items={recent} />
                    <SubProducts title="Popular now" link="popular" items={popular} />
                    <SubProducts title="Vegetables" link="vegetables" items={vegetables} />
                    <SubProducts title="Fruits" link="fruits" items={fruits} />
                    <SubProducts title="Meat & Fish" link="meat-fish" items={meatFish} />
                    <SubProducts title="Eggs" link="eggs" items={eggs} />
                    <SubProducts title="Tea & Coffe" link="tea-coffe" items={teaCoffe} />
                    <SubProducts title="Spices" link="spices" items={spices} />
                    <SubProducts title="Dry fruits" link="dry-fruits" items={dryFruits} />
                    <SubProducts title="Jams & Jellies" link="jam-jellie" items={jamJellie} />
                    <SubProducts title="Biscuits & Cakes" link="biscuit-cake" items={biscuitCake} />
                    <SubProducts title="Breads" link="breads" items={breads} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;