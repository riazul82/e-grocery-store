import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AppLayout from '../../layouts/AppLayout';

const AdminProductDetails = () => {
    const location = useLocation();
    const productDetails = location.state;

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Product Details</h2>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Product Image</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <div className="detailsBoxImage">
                                <img src={productDetails.imgUrl} alt="product" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Product Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Product Id</span><span>{productDetails.productId}</span></p>
                            <p><span>Name</span><span>{productDetails.name}</span></p>
                            <p><span>Category</span><span>{productDetails.category}</span></p>
                            <p><span>Type</span><span>{productDetails.type}</span></p>
                            <p><span>Price</span><span>{productDetails.price}Tk</span></p>
                            <p><span>Weight</span><span>{`${productDetails.weight}${productDetails.unit}`}</span></p>
                            <p><span>Discount</span><span>{productDetails.discount}%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminProductDetails;