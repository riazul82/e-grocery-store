import React from 'react';

import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminOrdersList from '../../components/admin/AdminOrdersList';
import AppLayout from '../../layouts/AppLayout';

import useAdminOrdersList from '../../hooks/useAdminOrdersList';

const AdminOrders = () => {
    const ordersList = useAdminOrdersList();

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Orders</h2>
                    </div>

                    <AdminOrdersList ordersList={ordersList} />
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminOrders;