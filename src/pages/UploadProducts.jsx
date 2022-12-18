import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AddProductForm from '../components/AddProductForm';

const UploadProducts = () => {

    return (
        <div className="dashboardDetails">
            <AdminSidebar />

            <div className="detailsInfo">
                <div className="dashboardTitle">
                    <h2>Upload Products</h2>
                </div>

                <div className="dashboardContent">
                    <AddProductForm />
                </div>
            </div>
        </div>
    );
}

export default UploadProducts;