import React from 'react';
import Navbar from '../components/Navbar';
import CategoryLinks from '../components/CategoryLinks';
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import HomeBannar from '../components/HomeBannar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <div className="homeHeader">
                    <div className="contactInfo">
                        <FiPhoneCall className="contactIcon"/>
                        <p className="contactTitle">+88 0123456789 | +88 01298765431 | 24/7</p>
                    </div>
                    <div className="searchBox">
                        <input type="text" className="search" placeholder="Search..." />
                        <div className="homeSearchIcon">
                            <GoSearch className="searchIcon" />
                        </div>
                    </div>
                </div>

                <HomeBannar />

                <div className="homeCategories">
                    <p className="homeCategiriesTitle">Categories</p>
                    <div className="categoryContent">
                        <CategoryLinks path="/products" classBox="categoryAllBox" title="All Products" quantity="200" />
                        <CategoryLinks path="/products" classBox="vegetableBox" title="Vegetables" quantity="60" />
                        <CategoryLinks path="/products" classBox="fruitBox" title="Fruits" quantity="60" />
                        <CategoryLinks path="/products" classBox="meatFishBox" title="Meat & Fish" quantity="60" />
                        <CategoryLinks path="/products" classBox="eggBox" title="Eggs" quantity="60" />
                        <CategoryLinks path="/products" classBox="teaCoffeBox" title="Tea & Coffe" quantity="60" />
                        <CategoryLinks path="/products" classBox="spiceBox" title="Spices" quantity="60" />
                        <CategoryLinks path="/products" classBox="dryFruitBox" title="Dry Fruits" quantity="60" />
                        <CategoryLinks path="/products" classBox="biscuitCakeBox" title="Biscuits & Cakes" quantity="60" />
                        <CategoryLinks path="/products" classBox="jamJellieBox" title="Jams & Jellies" quantity="60" />
                        <CategoryLinks path="/products" classBox="breadBox" title="Breads" quantity="60" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;