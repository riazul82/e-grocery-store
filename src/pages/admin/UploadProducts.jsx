import React from 'react';

// components
import AdminSidebar from '../../components/admin/AdminSidebar';
import AddProductForm from '../../components/admin/AddProductForm';
import AppLayout from '../../layouts/AppLayout';

const UploadProducts = () => {
    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Upload Products</h2>
                    </div>

                    <AddProductForm />
                </div>
            </div>
        </AppLayout>
    );
}

export default UploadProducts;