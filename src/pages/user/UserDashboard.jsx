import React from 'react';

// components
import AppLayout from '../../layouts/AppLayout';
import ProfileSidebar from '../../components/user/ProfileSidebar';
import MyOrdersList from '../../components/user/MyOrdersList';

import useUserOrdersList from '../../hooks/useUserOrdersList';

const UserDashboard = () => {
    const ordersList = useUserOrdersList();

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <ProfileSidebar />
                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Dashboard</h2>
                    </div>

                    <div className="dashboardCards">
                        <div className="dahsboardCard">
                            <p className="cardCounter">{ordersList.length < 10 ? `0${ordersList.length}` : ordersList.length}</p>
                            <p className="cardText">Total Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">{ordersList.length < 10 ? `0${ordersList.length}` : ordersList.length}</p>
                            <p className="cardText">Pending Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">00</p>
                            <p className="cardText">Shipped Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">{ordersList.length < 10 ? `0${ordersList.length}` : ordersList.length}</p>
                            <p className="cardText">Payment Deu</p>
                        </div>
                    </div>

                    {ordersList && (ordersList.length > 0) && <MyOrdersList ordersList={ordersList} />}
                </div>
            </div>
        </AppLayout>
    );
}

export default UserDashboard;