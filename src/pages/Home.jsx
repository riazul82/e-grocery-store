import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoryLinks from '../components/CategoryLinks';
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import HomeBannar from '../components/HomeBannar';
import VoucherCard from '../components/VoucherCard';
import SubProducts from '../components/SubProducts';
import { ProductsContext } from '../context/ProductsContextProvider';
import Footer from '../components/Footer';

import vegetables from '../assets/images/icons/img1.png';
import truck from '../assets/images/icons/img2.png';
import payment from '../assets/images/icons/img3.png';
import offers from '../assets/images/icons/img4.png';
import pricing from '../assets/images/icons/img5.png';
import support from '../assets/images/icons/img6.png';
import Title from '../components/Title';

const Home = () => {
    const {top, recent, popular} = useContext(ProductsContext);

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

                <div className="callToAction">
                    <div className="callToActionWrap">
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={vegetables} alt="" />
                            </div>
                            <p className="serviceTitle">Fresh Products</p>
                        </div>
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={truck} alt="" />
                            </div>
                            <p className="serviceTitle">Fast Delevary</p>
                        </div>
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={payment} alt="" />
                            </div>
                            <p className="serviceTitle">Easy payment</p>
                        </div>
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={offers} alt="" />
                            </div>
                            <p className="serviceTitle">Random Offers</p>
                        </div>
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={pricing} alt="" />
                            </div>
                            <p className="serviceTitle">Best Pricing</p>
                        </div>
                        <div className="serviceBox">
                            <div className="imageWrap">
                                <img src={support} alt="" />
                            </div>
                            <p className="serviceTitle">24/7 Support</p>
                        </div>
                    </div>
                </div>

                <div className="homeCategories">
                    <Title title="categories" desc="Choose from the best product collections" />
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

                <div className="voucherCards">
                    <Title title="Latest Offers" desc="Choose the best product collections" />
                    <div className="voucherCardsContent">
                        <VoucherCard />
                        <VoucherCard />
                    </div>
                </div>

                <div className="allProducts">
                    <Title title="Best Products" desc="Choose the best product collections" />
                    <div style={{marginTop: '5rem'}}></div>
                    <SubProducts title="Top Products" items={top} />
                    <SubProducts title="Recent Products" items={recent} />
                    <SubProducts title="Popular now" items={popular} />
                </div>

                <div className="services">
                    <Title title="Quality Services" desc="Choose from the best product collections" />

                    <div className="serviceCards">
                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">01</p>
                                <p className="cardTitle">Fresh Products</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">02</p>
                                <p className="cardTitle">Fast Delivery</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">03</p>
                                <p className="cardTitle">Best Pricing</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">04</p>
                                <p className="cardTitle">Random Offers</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">05</p>
                                <p className="cardTitle">Easy Payment</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceCardTitle">
                                <p className="cardNo">06</p>
                                <p className="cardTitle">Customer Support</p>
                            </div>
                            <div className="serviceCardDesc">
                                <p className="descText">Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.</p>
                                <div className="readMoreLink">
                                    <Link to="/about" className="link">Read more </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;