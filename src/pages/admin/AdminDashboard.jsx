import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminOrdersList from './AdminOrdersList';
import Footer from '../../components/Footer';

const AdminDashboard = () => {
    return (
        <>
        <div className="dashboardDetails">
            <AdminSidebar />

            <div className="detailsInfo">
                <div className="dashboardTitle">
                    <h2>Dashboard</h2>
                </div>

                <div className="dashboardCards">
                    <div className="dahsboardCard">
                        {/* <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p> */}
                        <p className="cardCounter">00</p>
                        <p className="cardText">Total Users</p>
                    </div>
                    <div className="dahsboardCard">
                        {/* <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p> */}
                        <p className="cardCounter">00</p>
                        <p className="cardText">Total Orders</p>
                    </div>
                    <div className="dahsboardCard">
                        <p className="cardCounter">00</p>
                        <p className="cardText">Pending Orders</p>
                    </div>
                    <div className="dahsboardCard">
                        {/* <p className="cardCounter">{orderList.length < 10 ? `0${orderList.length}` : orderList.length}</p> */}
                        <p className="cardCounter">00</p>
                        <p className="cardText">Product Sales</p>
                    </div>
                </div>

                <AdminOrdersList />

                {/* {orderList && (orderList.length > 0) && <MyOrdersTable orderList={orders} />} */}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default AdminDashboard;