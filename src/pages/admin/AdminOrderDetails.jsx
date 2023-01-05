import React from 'react';
import { useLocation } from 'react-router-dom';

// components
import AppLayout from '../../layouts/AppLayout';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminOrderDetails = () => {
    const location = useLocation();
    const orderDetails = location.state;

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />
                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Order Details</h2>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Order Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Order Id</span><span>{orderDetails.orderId}</span></p>
                            <p><span>Order Date</span><span>{orderDetails.time}</span></p>
                            <p><span>Order Status</span><span>{orderDetails.status}</span></p>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Shipping Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Email</span><span>{orderDetails.shippingInfo.email}</span></p>
                            <p><span>Phone</span><span>{orderDetails.shippingInfo.phone}</span></p>
                            <p>
                                <span>Address</span>
                                <span>
                                    {orderDetails.shippingInfo.address.street},&nbsp;
                                    {orderDetails.shippingInfo.address.city}-{orderDetails.shippingInfo.address.postcode},&nbsp; 
                                    {orderDetails.shippingInfo.address.division},&nbsp;
                                    {orderDetails.shippingInfo.address.country}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Product Items</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            {orderDetails.orderItems.map((elem, index) => {
                                return (
                                    <div className="orderItem" key={index}>
                                        <div className="orderItemDetails">
                                            <p><span>Name</span><span>{elem.name}</span></p>
                                            <p><span>Category</span><span>{elem.category}</span></p>
                                            <p><span>Price</span><span>{parseInt(elem.price - ((elem.price * elem.discount) / 100))} Tk</span></p>
                                            <p><span>Discount</span><span>{elem.discount}%</span></p>
                                            <p><span>Weight</span><span>{`${elem.weight}${elem.unit} * ${elem.cartQuantity}`}</span></p>
                                            <p><span>Total Price</span><span>{parseInt(elem.price - ((elem.price * elem.discount) / 100)) * elem.cartQuantity} Tk</span></p>
                                        </div>
                                        <div className="orderItemImage">
                                            <img src={elem.imgUrl} alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Amount Details</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Sub Total</span><span>{orderDetails.subTotal} Tk</span></p>
                            <p><span>Discount</span><span>{orderDetails.discount} Tk</span></p>
                            <p><span>Shipping Cost</span><span>{orderDetails.shippingCost} Tk</span></p>
                            <p><span>Total Amount</span><span>{orderDetails.totalCost} Tk</span></p>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Payment Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Method</span><span>COD</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminOrderDetails;