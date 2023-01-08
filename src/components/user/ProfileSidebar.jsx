import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContextProvider';
import { CartContext } from '../../context/CartContextProvider';

// firebase
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

// icons
import { BiUser } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { CgList } from 'react-icons/cg';
import { MdOutlineExitToApp } from 'react-icons/md';
import { MdOutlineSwitchAccount } from 'react-icons/md';

const ProfileSidebar = () => {
    const loginContext = useContext(LoginContext);
    const cartContext = useContext(CartContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            loginContext.dispatch({type: 'LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleRedirectAdmin = async () => {
        try {
            await signOut(auth);
            loginContext.dispatch({type: 'LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            navigate('/admin/login');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <Link to="/user/profile" className="link sidebarLink">
                    <BiUser className="sidebarIcon"/>
                    <p>My Profile</p>
                </Link>
                <Link to="/user/update-profile" className="link sidebarLink">
                    <RiUserSettingsLine className="sidebarIcon"/>
                    <p>Update Profile</p>
                </Link>
                <Link to="/user/dashboard" className="link sidebarLink">
                    <RxDashboard className="sidebarIcon"/>
                    <p>Dashboard</p>
                </Link>
                <Link to="/user/orders" className="link sidebarLink">
                    <CgList className="sidebarIcon"/>
                    <p>My Orders</p>
                </Link>
                <div className="sidebarLink" onClick={handleRedirectAdmin}>
                    <MdOutlineSwitchAccount className="sidebarIcon"/>
                    <p>Switch to Admin</p>
                </div>
                <div className="sidebarLink" onClick={handleLogout}>
                    <MdOutlineExitToApp className="sidebarIcon"/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSidebar;