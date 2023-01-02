import React from 'react';
import { useLocation } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminOrderDetails = () => {
    const location = useLocation();
    const orderDetails = location.state;

    return (
        <>
        <Navbar />
        <div className="userDetails">
            <AdminSidebar />
            <div className="detailsInfo">
                <div className="myOrders">
                    <h2>Order Details</h2>
                </div>

                <div className="orderInfoBox">
                    <div className="orderInfoHeader">
                        <p>Order Info</p>
                    </div>

                    <div className="orderInfo">
                        <p><span>Order Id</span><span>{orderDetails.orderId}</span></p>
                        <p><span>Order Date</span><span>{orderDetails.time}</span></p>
                        <p><span>Order Status</span><span>{orderDetails.status}</span></p>
                    </div>
                </div>

                <div className="orderInfoBox">
                    <div className="orderInfoHeader">
                        <p>Shipping Info</p>
                    </div>

                    <div className="orderInfo">
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

                <div className="orderInfoBox">
                    <div className="orderInfoHeader">
                        <p>Product Items</p>
                    </div>

                    <div className="orderInfo">
                        {
                            orderDetails.orderItems.map((elem, index) => {
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
                            })
                        }
                    </div>
                </div>

                <div className="orderInfoBox">
                    <div className="orderInfoHeader">
                        <p>Amount Details</p>
                    </div>

                    <div className="orderInfo">
                        <p><span>Sub Total</span><span>{orderDetails.subTotal} Tk</span></p>
                        
                        {orderDetails.isNewUserVoucherAdded &&
                        <p><span>Discount</span><span>{`${orderDetails.discount} + 250 Tk`}</span></p>}
                        
                        {orderDetails.isWinterVoucherAdded &&
                        <p><span>Discount</span><span>{`${orderDetails.discount} + ${(orderDetails.subTotal / 4).toFixed(1)} Tk`}</span></p>}
                        
                        {!orderDetails.isNewUserVoucherAdded && !orderDetails.isWinterVoucherAdded &&
                        <p><span>Discount</span><span>{orderDetails.discount} Tk</span></p>}
                        
                        <p><span>Shipping Cost</span><span>{orderDetails.shippingCost} Tk</span></p>
                        <p>
                            <span>Voucher Added</span>
                            <span>{(orderDetails.isNewUserVoucherAdded || orderDetails.isWinterVoucherAdded) ? 'Yes' : 'No'}</span>
                        </p>
                        <p><span>Total Amount</span><span>{orderDetails.totalCost} Tk</span></p>
                    </div>
                </div>

                <div className="orderInfoBox">
                    <div className="orderInfoHeader">
                        <p>Payment Info</p>
                    </div>

                    <div className="orderInfo">
                        <p><span>Method</span><span>COD</span></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default AdminOrderDetails;