import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { GoSearch } from 'react-icons/go';
import Product from '../components/Product';
import CategoryProducts from '../components/CategoryProducts';
import Footer from '../components/Footer';
import { ProductsContext } from '../context/ProductsContextProvider';

const Category = () => {
    const {top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads} = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');
    const [searchTimer, setSearchTimer] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const { category } = useParams();

    const currentItems = category === 'top' ?
    {item: top, title: 'Top Products'} :
    category === 'recent' ?
    {item: recent, title: 'Recent Products'} :
    category === 'popular' ?
    {item: popular, title: 'Popular now'} :
    category === 'vegetables' ?
    {item: vegetables, title: 'Vegetables'} :
    category === 'fruits' ?
    {item: fruits, title: 'Fruits'} :
    category === 'meat-fish' ?
    {item: meatFish, title: 'Meat & Fish'} :
    category === 'eggs' ?
    {item: eggs, title: 'Eggs'} :
    category === 'tea-coffe' ?
    {item: teaCoffe, title: 'Tea & Coffe'} :
    category === 'spices' ?
    {item: spices, title: 'Spices'} :
    category === 'dry-fruits' ?
    {item: dryFruits, title: 'Dry fruits'} :
    category === 'jam-jellie' ?
    {item: jamJellie, title: 'Jams & Jellies'} :
    category === 'biscuit-cake' ?
    {item: biscuitCake, title: 'Biscuits & Cakes'} :
    category === 'breads' ?
    {item: breads, title: 'Breads'} : null;

    
    useEffect(() => {
        const items = searchText !== '' && currentItems.item && currentItems.item.filter((item) => {
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

    }, [searchText, currentItems.item]);

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
                        <input type="text" onChange={handleSearch} placeholder="Search..." />
                    </div>
                    <div className="productCountBox">
                        <p className="productCount">{searchText !== '' ? filteredItems.length : currentItems.item ? currentItems.item.length : 0}/{currentItems.item ? currentItems.item.length : 0} items</p>
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
                    {
                        currentItems === null ? 
                        null :
                        <CategoryProducts title={currentItems.title} items={currentItems.item} />
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Category;