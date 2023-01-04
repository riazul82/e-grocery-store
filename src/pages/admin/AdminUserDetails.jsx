import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AppLayout from '../../layouts/AppLayout';

const AdminUserDetails = () => {
    const location = useLocation();
    const userDetails = location.state;

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />

                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>User Details</h2>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Profile Image</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Basic Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Order Id</span><span>{userDetails.userId}</span></p>
                            <p><span>Role</span><span>{userDetails.role}</span></p>
                            <p><span>Joined Date</span><span>{userDetails.joinedDate}</span></p>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>Personal Info</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Name</span><span>{userDetails.name ? userDetails.name : '--:--'}</span></p>
                            <p><span>Email</span><span>{userDetails.email}</span></p>
                            <p><span>Phone</span><span>{userDetails.phone ? userDetails.phone : '--:--'}</span></p>
                            <p><span>Gender</span><span>{userDetails.gender ? userDetails.gender : '--:--'}</span></p>
                        </div>
                    </div>

                    <div className="dashboardDetailsBox">
                        <div className="dashboardDetailsHeader">
                            <p>User Address</p>
                        </div>

                        <div className="dashboardDetailsInfo">
                            <p><span>Street</span><span>{userDetails.address ? userDetails.address.street : '--:--'}</span></p>
                            <p><span>City</span><span>{userDetails.address ? userDetails.address.city : '--:--'}</span></p>
                            <p><span>Division</span><span>{userDetails.address ? userDetails.address.division : '--:--'}</span></p>
                            <p><span>Postcode</span><span>{userDetails.address ? userDetails.address.postcode : '--:--'}</span></p>
                            <p><span>Country</span><span>{userDetails.address ? userDetails.address.country : '--:--'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminUserDetails;