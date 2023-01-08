import React from 'react';

// components
import AppLayout from '../../layouts/AppLayout';
import ProfileSidebar from '../../components/user/ProfileSidebar';
import MyOrdersList from '../../components/user/MyOrdersList';

import useUserOrdersList from '../../hooks/useUserOrdersList';

const UserDashboard = () => {
    const ordersList = useUserOrdersList();

    let totalOrders = 0;
    let pendingOrders = 0;
    let shippedOrders = 0;
    let paymentDeu = 0;

    for (let i = 0; i < ordersList.length; i ++) {
        if (ordersList[i].status !== 'canceled') {
            totalOrders ++;
        }

        if (ordersList[i].status === 'pending') {
            pendingOrders ++;
        }

        if (ordersList[i].status === 'delivered') {
            shippedOrders ++;
        }

        if (ordersList[i].status !== 'delivered' && ordersList[i].status !== 'canceled') {
            paymentDeu ++;
        }
    }

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
                            <p className="cardCounter">{totalOrders < 10 ? `0${totalOrders}` : totalOrders}</p>
                            <p className="cardText">Total Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">{pendingOrders < 10 ? `0${pendingOrders}` : pendingOrders}</p>
                            <p className="cardText">Pending Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">{shippedOrders < 10 ? `0${shippedOrders}` : shippedOrders}</p>
                            <p className="cardText">Shipped Orders</p>
                        </div>
                        <div className="dahsboardCard">
                            <p className="cardCounter">{paymentDeu < 10 ? `0${paymentDeu}` : paymentDeu}</p>
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