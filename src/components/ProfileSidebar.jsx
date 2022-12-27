import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { LoginContext } from '../context/LoginContextProvider';

// icons
import { BiUser } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { CgList } from 'react-icons/cg';
import { MdOutlineExitToApp } from 'react-icons/md';
import { MdOutlineSwitchAccount } from 'react-icons/md';
import { signOut } from 'firebase/auth';

const ProfileSidebar = () => {
    const { dispatch } = useContext(LoginContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch({type: 'LOGOUT'});
            localStorage.removeItem('userDetails');
            localStorage.removeItem("cartItems");
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="sidebar">
            <div className="profileSidebar">
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
                <Link to="/admin/login" className="link sidebarLink">
                    <MdOutlineSwitchAccount className="sidebarIcon"/>
                    <p>Switch to Admin</p>
                </Link>
                <div className="link sidebarLink" onClick={handleLogout}>
                    <MdOutlineExitToApp className="sidebarIcon"/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSidebar;