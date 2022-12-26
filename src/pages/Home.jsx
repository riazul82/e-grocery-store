import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoryLinks from '../components/CategoryLinks';
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import VoucherCard from '../components/VoucherCard';
import SubProducts from '../components/SubProducts';
import bannarImg from '../assets/images/bannar/img1.jpg';
import { ProductsContext } from '../context/ProductsContextProvider';
import Footer from '../components/Footer';
import Title from '../components/Title';

const Home = () => {
    const {top, recent, popular} = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        document.onkeydown = (e) => {
            if(e.keyCode === 13 && searchText !== '') {
                navigate('/products', {state: searchText});
            }
        }
    }, [searchText, navigate]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

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
                        <button className="homeBannerButton animate__animated animate__bounceInLeft">Shop now</button>
                    </div>
                </div>

                <div className="homeCategories">
                    <Title title="categories" desc="Choose from the best product collections" />
                    <div className="categoryContent">
                        <CategoryLinks path="/products" classBox="categoryAllBox" title="All Products" quantity="200" />
                        <CategoryLinks path="/products/vegetables" classBox="vegetableBox" title="Vegetables" quantity="60" />
                        <CategoryLinks path="/products/fruits" classBox="fruitBox" title="Fruits" quantity="60" />
                        <CategoryLinks path="/products/meat-fish" classBox="meatFishBox" title="Meat & Fish" quantity="60" />
                        <CategoryLinks path="/products/eggs" classBox="eggBox" title="Eggs" quantity="60" />
                        <CategoryLinks path="/products/tea-coffe" classBox="teaCoffeBox" title="Tea & Coffe" quantity="60" />
                        <CategoryLinks path="/products/spices" classBox="spiceBox" title="Spices" quantity="60" />
                        <CategoryLinks path="/products/dry-fruits" classBox="dryFruitBox" title="Dry Fruits" quantity="60" />
                        <CategoryLinks path="/products/biscuit-cake" classBox="biscuitCakeBox" title="Biscuits & Cakes" quantity="60" />
                        <CategoryLinks path="/products/jam-jellie" classBox="jamJellieBox" title="Jams & Jellies" quantity="60" />
                        <CategoryLinks path="/products/breads" classBox="breadBox" title="Breads" quantity="60" />
                    </div>
                </div>

                <div className="voucherCards">
                    <Title title="Latest Offers" desc="Choose the best product collections" />
                    <div className="voucherCardsContent">
                        <VoucherCard />
                        <VoucherCard />
                    </div>
                </div>

                <div className="allProducts" style={{marginTop: '8rem'}}>
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