import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Footer from '../../components/Footer';
import AdminUsersList from '../../components/admin/AdminUsersList';

const AdminUsers = () => {
    return (
        <>
        <div className="dashboardDetails">
            <AdminSidebar />

            <div className="detailsInfo">
                <div className="dashboardTitle">
                    <h2>Dashboard</h2>
                </div>

                <AdminUsersList />

                {/* {orderList && (orderList.length > 0) && <MyOrdersTable orderList={orders} />} */}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default AdminUsers;