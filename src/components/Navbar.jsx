import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="brandName">eMart</Link>
                </div>
                <div className="navLinks">
                    <NavLink to="/" className="navLink">Home</NavLink>
                    <NavLink to="/products" className="navLink">Products</NavLink>
                    <NavLink to="/about" className="navLink">About Us</NavLink>
                    <NavLink to="/contact" className="navLink">Contact</NavLink>
                </div>
                
                <div className="navIconLinks">
                    <Link className="iconLink"><AiOutlineShoppingCart className="navIcon"/></Link>
                    <Link to="/profile" className="iconLink"><BiUser className="navIcon"/></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;