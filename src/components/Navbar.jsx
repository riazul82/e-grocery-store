import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="brandName link">eBazar</Link>
                </div>

                <div className="navLinks">
                    <NavLink to="/" className="link navLink">Home</NavLink>
                    <NavLink to="/products" className="link navLink">Products</NavLink>
                    <NavLink to="/about" className="link navLink">About Us</NavLink>
                    <NavLink to="/contact" className="link navLink">Contact</NavLink>
                </div>
                
                <div className="navIconLinks">
                    <Link className="link iconLink"><AiOutlineShoppingCart className="navIcon"/></Link>
                    <Link to="/profile" className="link iconLink"><BiUser className="navIcon"/></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;