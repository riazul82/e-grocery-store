import React, { useContext, useEffect, useState } from 'react';
import { UserOrderContext } from '../../context/UserOrdersContextProvider';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import MyOrdersTable from '../../components/profile/MyOrdersTable';

const MyOrders = () => {
    const orderList = useContext(UserOrderContext);
    const [orders, setOrders] = useState(orderList);

    useEffect(() => {
        setOrders(orderList);
    }, [orderList]);

    return (
        <>
        <Navbar />
        <div className="userDetails">
            <ProfileSidebar />
            <div className="detailsInfo">
                <div className="myOrders">
                    <h2>My Orders</h2>
                </div>

                {orders.length === 0 ? 
                <p style={{marginTop: '1rem', fontSize: '1.1rem'}}>No order item found!</p> :
                <MyOrdersTable orderList={orders} />}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default MyOrders;