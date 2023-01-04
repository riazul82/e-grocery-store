import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminUsersList from '../../components/admin/AdminUsersList';

const AdminUsers = () => {
    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Dashboard</h2>
                    </div>

                    <AdminUsersList />

                    {/* {orderList && (orderList.length > 0) && <MyOrdersTable orderList={orders} />} */}
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminUsers;