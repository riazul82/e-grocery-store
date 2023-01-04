import React from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';
import useAdminUsersList from '../../hooks/useAdminUsersList';

const AdminUsersList = () => {
    const navigate = useNavigate();

    const usersList = useAdminUsersList();

    const handleViewDetails = (userDetails) => {
        navigate(`/admin/users/${userDetails.userId}`, {state: userDetails});
    }

    return (
        <table className="dashboardList">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersList.map((elem) => {
                        return (
                            <tr className="ordersTableItem" key={elem.userId}>
                                <td>{`#${elem.userId.slice(0, 6)}`}</td>
                                <td>{elem.name ? elem.name : '--:--'}</td>
                                <td>{elem.email}</td>
                                <td>{elem.role}</td>
                                <td className="listDetailsBtn" onClick={() => handleViewDetails(elem)}>
                                    <span>view details</span>
                                    <RxDoubleArrowRight className="arrow" />
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default AdminUsersList;