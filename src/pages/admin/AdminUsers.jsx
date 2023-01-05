import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminUsersList from '../../components/admin/AdminUsersList';

import useAdminUsersList from '../../hooks/useAdminUsersList';

const AdminUsers = () => {
    const usersList = useAdminUsersList();

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Dashboard</h2>
                    </div>

                    <AdminUsersList usersList={usersList} />
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminUsers;