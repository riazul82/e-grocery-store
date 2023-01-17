import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import AppLayout from '../layouts/AppLayout';
import Title from '../components/Title';
import CategoryLinks from '../components/home/CategoryLinks';
import SubProducts from '../components/products/SubProducts';

// icons
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { ProductsContext } from '../context/ProductsContextProvider';

// image
import bannarImg from '../assets/images/project/bannar.jpg';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    const {products, top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads} = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // search when 'Enter' key press
        document.onkeydown = (e) => {
            if(e.keyCode === 13 && searchText !== '') {
                navigate('/products', {state: searchText});
            }
        }
    }, [searchText, navigate]);

    // handle search input
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    // shop-now btn click actions
    const handleBtnClick = () => {
        navigate('/products');
    }

    return (
        <AppLayout>
            {/* <div className="home">
                <div className="homeHeader">
                    <div className="contactInfo">
                        <FiPhoneCall className="contactIcon"/>
                        <p className="contactTitle">+88 0123456789 | +88 01298765431 | 24/7</p>
                    </div>
                    <div className="searchBox">
                        <input type="text" value={searchText} onChange={handleSearch} className="search" placeholder="Search..." />
                        <Link to="/products" state={searchText} className="homeSearchIcon link">
                            <GoSearch className="searchIcon" />
                        </Link>
                    </div>
                </div>

                <div className="homeBanner">
                    <div className="homeBannerImage">
                        <img src={ bannarImg } alt="bannar" />
                    </div>
                    <div className="homeBannerTitle">
                        <h1 className="homeBannerText animate__animated animate__bounceInLeft">Explore the best</h1>
                        <h1 className="homeBannerText animate__animated animate__bounceInRight">grocery shop online</h1>
                        <button onClick={handleBtnClick} className="homeBannerButton animate__animated animate__bounceInLeft">Shop now</button>
                    </div>
                </div>

                <CallToAction />

                <div className="homeCategories">
                    <Title title="categories" desc="Choose from the best product collections" />
                    <div className="categoryContent">
                        <CategoryLinks path="/products" classBox="categoryAllBox" title="All Products" quantity={products ? products.length : '00'} />
                        <CategoryLinks path="/products/vegetables" classBox="vegetableBox" title="Vegetables" quantity={vegetables ? vegetables.length : '00'} />
                        <CategoryLinks path="/products/fruits" classBox="fruitBox" title="Fruits" quantity={fruits ? fruits.length : '00'} />
                        <CategoryLinks path="/products/meat-fish" classBox="meatFishBox" title="Meat & Fish" quantity={meatFish ? meatFish.length : '00'} />
                        <CategoryLinks path="/products/eggs" classBox="eggBox" title="Eggs" quantity={eggs ? eggs.length : '00'} />
                        <CategoryLinks path="/products/tea-coffe" classBox="teaCoffeBox" title="Tea & Coffe" quantity={teaCoffe ? teaCoffe.length : '00'} />
                        <CategoryLinks path="/products/spices" classBox="spiceBox" title="Spices" quantity={spices ? spices.length : '00'} />
                        <CategoryLinks path="/products/dry-fruits" classBox="dryFruitBox" title="Dry Fruits" quantity={dryFruits ? dryFruits.length : '00'} />
                        <CategoryLinks path="/products/biscuit-cake" classBox="biscuitCakeBox" title="Biscuits & Cakes" quantity={biscuitCake ? biscuitCake.length : '00'} />
                        <CategoryLinks path="/products/jam-jellie" classBox="jamJellieBox" title="Jams & Jellies" quantity={jamJellie ? jamJellie.length : '00'} />
                        <CategoryLinks path="/products/breads" classBox="breadBox" title="Breads" quantity={breads ? breads.length : '00'} />
                    </div>
                </div>

                <div className="allProducts" style={{marginTop: '8rem'}}>
                    <Title title="Best Products" desc="Fresh and organic product collections" />
                    <div style={{marginTop: '5rem'}}></div>
                    <SubProducts title="Top Products" link="top" items={top} />
                    <SubProducts title="Recent Products" link="recent" items={recent} />
                    <SubProducts title="Popular now" link="popular" items={popular} />
                </div>
            </div> */}
        </AppLayout>
    );
}

export default Home;