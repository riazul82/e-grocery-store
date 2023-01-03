import React from 'react';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import MyOrdersTable from '../../components/profile/MyOrdersTable';

import useOrderDetails from '../../hooks/useOrderDetails';

const MyOrders = () => {
    const orderList = useOrderDetails();

    return (
        <>
            <Navbar />
            <div className="userDetails">
                <ProfileSidebar />
                <div className="detailsInfo">
                    <div className="myOrders">
                        <h2>My Orders</h2>
                    </div>

                    {orderList && orderList.length > 0 ? <MyOrdersTable /> :
                    <p style={{marginTop: '0.8rem', color: '#fff', fontSize: '1.1rem'}}>No order item found!</p>}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyOrders;