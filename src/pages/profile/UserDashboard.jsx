import React, { useContext, useEffect, useState } from 'react';
import { UserOrderContext } from '../../context/UserOrdersContextProvider';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import MyOrdersTable from '../../components/profile/MyOrdersTable';

const UserDashboard = () => {
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
                    <h2>Dashboard</h2>
                </div>

                <div className="dashboardCards">
                    <div className="dahsboardCard">
                        <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p>
                        <p className="cardText">Total Orders</p>
                    </div>
                    <div className="dahsboardCard">
                        <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p>
                        <p className="cardText">Pending Orders</p>
                    </div>
                    <div className="dahsboardCard">
                        <p className="cardCounter">00</p>
                        <p className="cardText">Shipped Orders</p>
                    </div>
                    <div className="dahsboardCard">
                        <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p>
                        <p className="cardText">Payment Deu</p>
                    </div>
                </div>

                {orderList && (orderList.length > 0) && <MyOrdersTable orderList={orders} />}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default UserDashboard;