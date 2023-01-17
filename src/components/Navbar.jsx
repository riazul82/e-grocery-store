import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

// context
import { LoginContext } from '../context/LoginContextProvider';
import { CartContext } from '../context/CartContextProvider';

// icons
import { BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

const Navbar = () => {
    const { currentAdmin } = useContext(LoginContext);
    const { cartItems } = useContext(CartContext);

    const [activeToggle, setActiveToggle] = useState(false);

    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="brandName link">eBazar</Link>
                </div>

                <div className={`navLinks ${activeToggle && 'activeNavLinks'}`}>
                    <NavLink to="/" className="link navLink">Home</NavLink>
                    <NavLink to="/products" className="link navLink">Products</NavLink>
                    <NavLink to="/about" className="link navLink">About Us</NavLink>
                    <NavLink to="/contact" className="link navLink">Contact</NavLink>
                </div>
                
                <div className="navIconLinks">
                    <Link to="/cart" className="link iconLink">
                        <AiOutlineShoppingCart className="navIcon"/>
                        <div className="cartCounter" style={(cartItems.length > 0) ? {display: 'flex'} : {display: 'none'}}>
                            <span>{cartItems.length}</span>
                        </div>
                    </Link>
                    {currentAdmin && <Link to="/admin/dashboard" className="link iconLink"><MdOutlineDashboardCustomize className="navIcon"/></Link>}
                    {!currentAdmin && <Link to="/user/profile" className="link iconLink"><BiUser className="navIcon"/></Link>}
                    <div className={`toggleBar iconLink ${activeToggle && 'activeToggler'}`} onClick={() => setActiveToggle(!activeToggle)}><span className="toggler"></span></div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;