import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminProducts = () => {
    return (
        <div className="dashboardDetails">
            <AdminSidebar />

            <div className="detailsInfo">
                <div className="dashboardTitle">
                    <h2>Products</h2>
                </div>

                <div className="dashboardContent">
                    <div className="productsHeader">
                        <Link to="/admin/products/upload" className="link AddNewProductBtn">Add New Product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProducts;