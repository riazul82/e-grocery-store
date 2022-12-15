import React from 'react';
import CategoryLinks from '../components/CategoryLinks';
import { GoSearch } from 'react-icons/go';
// import { AiOutlineSend } from 'react-icons/ai';

const Home = () => {
    return (
        <div className="home">
            <div className="homeHeader">
                <div className="homeTitle">
                    <p className="homeText">Explore the best grocery shop online</p>
                </div>
                <div className="searchBox">
                    <input type="text" className="search" placeholder="Search..." />
                    <GoSearch className="searchIcon" />
                    {/* <AiOutlineSend className="searchIcon" /> */}
                </div>
            </div>

            <div className="homeCategories">
                <p><strong>Categories: </strong></p>
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
    );
}

export default Home;