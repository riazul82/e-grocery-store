import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import CategoryLinks from '../components/CategoryLinks';
import VoucherCard from '../components/VoucherCard';
import SubProducts from '../components/SubProducts';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

// icons
import { GoSearch } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { ProductsContext } from '../context/ProductsContextProvider';

// image
import bannarImg from '../assets/images/bannar/img1.jpg';

const serviceCardData = [
    {title: 'Fresh Products', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Fast Delivery', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Best Pricing', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Random Offers', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Easy Payment', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Customer Support', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'}
];

const voucherCardData = [
    {cardNo: '01', title: '250tk off for new registered users', code: 'NEWUSER23', endDate: 'January, 20, 2023 12:00:00', require: 'Voucher only applicable for new users and purchase more than RS.500'},
    {cardNo: '02', title: '25% off during winter season', code: 'WINTER01', endDate: 'January, 10, 2023 10:10:20', require: 'Voucher applicable for any users and only once'}
];

const Home = () => {
    const {products, top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads} = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);

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
                        <button onClick={handleBtnClick} className="homeBannerButton animate__animated animate__bounceInLeft">Shop now</button>
                    </div>
                </div>

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

                <div className="voucherCards">
                    <Title title="Latest Offers" desc="Exclusive offers for new and existing customers" />
                    <div className="voucherCardsContent">
                        {voucherCardData.map((data, index) => {
                            return <VoucherCard data={data} key={index} />
                        })}
                    </div>
                </div>

                <div className="allProducts" style={{marginTop: '8rem'}}>
                    <Title title="Best Products" desc="Fresh and organic product collections" />
                    <div style={{marginTop: '5rem'}}></div>
                    <SubProducts title="Top Products" items={top} />
                    <SubProducts title="Recent Products" items={recent} />
                    <SubProducts title="Popular now" items={popular} />
                </div>

                <div className="services">
                    <Title title="Quality Services" desc="Explore the best shopping experience" />
                    <div className="serviceCards">
                        {serviceCardData.map((data, index) => {
                            return <ServiceCard data={data} cardNo={index + 1} key={index} />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;