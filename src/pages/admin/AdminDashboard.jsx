import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminDashboard = () => {
    return (
        <div className="dashboardDetails">
            <AdminSidebar />

            <div className="detailsInfo">
                <div className="dashboardTitle">
                    <h2>Dashboard</h2>
                </div>

                <div className="dashboardContent">
                    <p>Hello!</p>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;