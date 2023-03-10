import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContextProvider';
import { CartContext } from '../../context/CartContextProvider';

// firebase
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

// icons
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLayoutDashboard } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { BsShop } from 'react-icons/bs';
import { BiCreditCard } from 'react-icons/bi';
import { MdOutlineExitToApp } from 'react-icons/md';
import { MdOutlineSwitchAccount } from 'react-icons/md';

const AdminSidebar = () => {
    const loginContext = useContext(LoginContext);
    const cartContext = useContext(CartContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            loginContext.dispatch({type: 'ADMIN_LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleRedirectUser = async () => {
        try {
            await signOut(auth);
            loginContext.dispatch({type: 'LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            navigate('/user/login');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <Link to="/admin/dashboard" className="link sidebarLink">
                    <TbLayoutDashboard className="sidebarIcon"/>
                    <p>Dashboard</p>
                </Link>
                <Link to="/admin/users" className="link sidebarLink">
                    <FiUsers className="sidebarIcon"/>
                    <p>Users</p>
                </Link>
                <Link to="/admin/products" className="link sidebarLink">
                    <BsShop className="sidebarIcon"/>
                    <p>Products</p>
                </Link>
                <Link to="/admin/orders" className="link sidebarLink">
                    <BiCreditCard className="sidebarIcon"/>
                    <p>Orders</p>
                </Link>
                <Link to="/admin/profile" className="link sidebarLink">
                    <MdOutlineAdminPanelSettings className="sidebarIcon"/>
                    <p>Admin Profile</p>
                </Link>
                <Link to="/admin/update-profile" className="link sidebarLink">
                    <IoSettingsOutline className="sidebarIcon"/>
                    <p>Update Profile</p>
                </Link>
                <div className="sidebarLink" onClick={handleRedirectUser}>
                    <MdOutlineSwitchAccount className="sidebarIcon"/>
                    <p>Switch to User</p>
                </div>
                <div className="link sidebarLink" onClick={handleLogout}>
                    <MdOutlineExitToApp className="sidebarIcon"/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;