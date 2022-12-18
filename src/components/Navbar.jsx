import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { LoginContext } from '../context/LoginContextProvider';

const Navbar = () => {
    const { currentAdmin } = useContext(LoginContext);

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
                    { currentAdmin && <Link to="/admin/dashboard" className="link iconLink"><MdOutlineDashboardCustomize className="navIcon"/></Link>}
                    <Link to="/cart" className="link iconLink"><AiOutlineShoppingCart className="navIcon"/></Link>
                    <Link to="/user/profile" className="link iconLink"><BiUser className="navIcon"/></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;