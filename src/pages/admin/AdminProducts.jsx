import React from 'react';
import { Link } from 'react-router-dom';

import AdminSidebar from '../../components/admin/AdminSidebar';
import AppLayout from '../../layouts/AppLayout';

import AdminProductsList from '../../components/admin/AdminProductsList';
import useAdminProductsList from '../../hooks/useAdminProductsList';

const AdminProducts = () => {
    const productsList = useAdminProductsList();

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Products</h2>
                    </div>

                    <div className="dashboardContent">
                        <div className="uploadProductBtnWrap">
                            <Link to="/admin/products/upload" className="link AddNewProductBtn">Add New Product</Link>
                        </div>

                        <AdminProductsList productsList={productsList} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminProducts;