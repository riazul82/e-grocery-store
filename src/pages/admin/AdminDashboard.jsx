import React from 'react';

import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminOrdersList from '../../components/admin/AdminOrdersList';
import AppLayout from '../../layouts/AppLayout';

import useAdminUsersList from '../../hooks/useAdminUsersList';
import useAdminOrdersList from '../../hooks/useAdminOrdersList';

const AdminDashboard = () => {
    const ordersList = useAdminOrdersList();
    const usersList = useAdminUsersList();

    let totalUsers = usersList.length;
    let totalOrders = 0;
    let pendingOrders = 0;
    let shippedOrders = 0;

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
    }


    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Dashboard</h2>
                    </div>

                    <div className="dashboardCards">
                        <div className="dahsboardCard">
                            <p className="cardCounter">{totalUsers < 10 ? `0${totalUsers}` : totalUsers}</p>
                            <p className="cardText">Total Users</p>
                        </div>
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
                    </div>

                    <AdminOrdersList ordersList={ordersList} />
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminDashboard;