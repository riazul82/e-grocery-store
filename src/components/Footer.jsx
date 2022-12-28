import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

// images
import payPal from '../assets/images/payment/paypal.png';
import visa from '../assets/images/payment/visa.png';
import stripe from '../assets/images/payment/stripe.png';

const Footer = () => {
    return (
        <>
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerBox fBox1">
                    <div className="logo">
                        <Link to="/" className="brandName link">eBazar</Link>
                    </div>
                    <div className="fDesc">
                        <p>Lorem ipsum dolor sit amet consecters adipisicing elit dolores excepturi quas a quaerat consectetur veritatis.</p>
                    </div>
                    <div className="fLinks">
                        <a href="#link" className="fLink"><FaFacebookF className="fIcon"/></a>
                        <a href="#link" className="fLink"><BsInstagram className="fIcon"/></a>
                        <a href="#link" className="fLink"><FaLinkedinIn className="fIcon"/></a>
                        <a href="#link" className="fLink"><FiTwitter className="fIcon"/></a>
                    </div>
                </div>
                <div className="footerBox fBox2">
                    <p className="fBoxTitle">Menu</p>
                    <Link to="/" className="navLink link">Home</Link>
                    <Link to="/products" className="navLink link">Products</Link>
                    <Link to="/about" className="navLink link">About</Link>
                    <Link to="/user/profile" className="navLink link">Profile</Link>
                    <Link to="/contact" className="navLink link">Contact</Link>
                </div>
                <div className="footerBox fBox3">
                    <p className="fBoxTitle">Products</p>
                    <Link to="/products/top" className="navLink link">Top Products</Link>
                    <Link to="/products/recent" className="navLink link">Recent Products</Link>
                    <Link to="/products/popular" className="navLink link">Popular Products</Link>
                    <Link to="/products/vegetables" className="navLink link">Vegetables</Link>
                    <Link to="/products/fruits" className="navLink link">Fruits</Link>
                </div>
                <div className="footerBox fBox4">
                    <p className="fBoxTitle">Quick Links</p>
                    <Link to="/user/profile" className="navLink link">User Account</Link>
                    <Link to="/" className="navLink link">Become An Affilate</Link>
                    <Link to="/" className="navLink link">New Offer</Link>
                    <Link to="/" className="navLink link">Recent Blogs</Link>
                    <Link to="/" className="navLink link">Help</Link>
                </div>

                <div className="footerBox fBox5">
                    <p className="fBoxTitle">Payment Methods</p>
                    <div className="paymentImageWrap">
                        <div className="imgBox">
                            <img src={payPal} alt="payment" />
                        </div>
                        <div className="imgBox">
                            <img src={visa} alt="payment" />
                        </div>
                        <div className="imgBox">
                            <img src={stripe} alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyrightBox">
            <p>Created by <a href="https://github.com/riazul82" target="_blank" rel="noreferrer">riazul82</a> | &copy;2022 all rights reserved</p>
        </div>
        </>
    );
}

export default Footer;