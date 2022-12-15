import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { CgList } from 'react-icons/cg';
import { MdOutlineExitToApp } from 'react-icons/md';
import MyProfile from '../components/MyProfile';
import UpdateProfile from '../components/UpdateProfile';
import Dashboard from '../components/Dashboard';
import Orders from '../components/Orders';

const Profile = () => {
    const [listItem, setListItem] = useState('profile');

    return (
        <div className="userDetails">
            <div className="sidebar">
                <div className="sidebarItem" onClick={() => setListItem('profile')}>
                    <BiUser className="sidebarIcon"/>
                    <p>My Profile</p>
                </div>
                <div className="sidebarItem" onClick={() => setListItem('update-profile')}>
                    <RiUserSettingsLine className="sidebarIcon"/>
                    <p>Update Profile</p>
                </div>
                <div className="sidebarItem" onClick={() => setListItem('dashboard')}>
                    <RxDashboard className="sidebarIcon"/>
                    <p>Dashboard</p>
                </div>
                <div className="sidebarItem" onClick={() => setListItem('orders')}>
                    <CgList className="sidebarIcon"/>
                    <p>My Orders</p>
                </div>
                <div className="sidebarItem" onClick={() => setListItem('logout')}>
                    <MdOutlineExitToApp className="sidebarIcon"/>
                    <p>Log out</p>
                </div>
            </div>

            <div className="detailsInfo">
                {
                    listItem === 'profile' ? <MyProfile /> : 
                    listItem === 'update-profile' ? <UpdateProfile /> :
                    listItem === 'dashboard' ? <Dashboard /> :
                    listItem === 'orders' ? <Orders /> :
                    <MyProfile />
                }
            </div>
        </div>
    );
}

export default Profile;