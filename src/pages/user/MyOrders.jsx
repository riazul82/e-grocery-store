import React from 'react';

// components
import AppLayout from '../../layouts/AppLayout';
import ProfileSidebar from '../../components/user/ProfileSidebar';
import MyOrdersList from '../../components/user/MyOrdersList';

import useOrderDetails from '../../hooks/useOrderDetails';

const MyOrders = () => {
    const orderList = useOrderDetails();

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <ProfileSidebar />
                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>My Orders</h2>
                    </div>

                    {orderList && orderList.length > 0 ? <MyOrdersList /> :
                    <p style={{marginTop: '0.8rem', color: '#fff', fontSize: '1.1rem'}}>No order item found!</p>}
                </div>
            </div>
        </AppLayout>
    );
}

export default MyOrders;