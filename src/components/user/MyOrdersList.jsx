import React from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const MyOrdersList = ({ ordersList }) => {
    const navigate = useNavigate();

    const handleViewDetails = (orderDetails) => {
        navigate(`/user/orders/${orderDetails.orderId}`, {state: orderDetails});
    }

    return (
        <table className="dashboardList">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Date</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    ordersList.map((elem) => {
                        return (
                            <tr className="myOrdersTableItem" key={elem.orderId}>
                                <td>{`#${elem.orderId.slice(0, 6)}`}</td>
                                <td>{elem.time.split(' ').slice(1, 4).join(' ')}</td>
                                <td>{elem.totalCost} Tk</td>
                                <td>
                                    <span className={`status ${elem.status}`}>{elem.status}</span>
                                </td>
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

export default MyOrdersList;