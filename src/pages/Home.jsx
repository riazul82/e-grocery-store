import React from 'react';
import CategoryLinks from '../components/CategoryLinks';
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import bannarImg from '../images/bannar/img6.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="homeHeader">
                <div className="contactInfo">
                    <FiPhoneCall className="contactIcon"/>
                    <p className="contactTitle">+88 0123456789 | +88 01298765431 | 24/7</p>
                </div>
                <div className="searchBox">
                    <input type="text" className="search" placeholder="Search..." />
                    <GoSearch className="searchIcon" />
                </div>
            </div>

            <div className="homeBanner">
                <div className="homeBannerImage">
                    <img src={bannarImg} alt="bannar" />
                </div>
                <div className="homeBannerTitle">
                    {/* <h1 className="homeBannerText">Best Dairy Products<br/> Online</h1> */}
                    <h1 className="homeBannerText animate__animated animate__bounceInLeft">Explore the best</h1>
                    <h1 className="homeBannerText animate__animated animate__bounceInRight">grocery shop online</h1>
                    <button className="homeBannerButton animate__animated animate__bounceInLeft">Shop now</button>
                </div>
                
            </div>

            <div className="homeCategories">
                <p className="homeCategiriesTitle"><strong>Categories </strong></p>
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