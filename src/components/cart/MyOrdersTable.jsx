import React from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const MyOrdersTable = ({ orderList }) => {

    const navigate = useNavigate();

    const handleViewDetails = (orderDetails) => {
        navigate(`/user/orders/${orderDetails.orderId}`, {state: orderDetails});
    }

    return (
        <table id="ordersTable">
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
                    orderList.map((elem) => {
                        return (
                            <tr className="myOrdersTableItem" key={elem.orderId}>
                                <td>{`#${elem.orderId.slice(0, 6)}`}</td>
                                <td>{elem.time.split(' ').slice(1, 4).join(' ')}</td>
                                <td>{elem.totalCost} Tk</td>
                                <td>{elem.status}</td>
                                <td className="orderListDetailsBtn" onClick={() => handleViewDetails(elem)}>
                                    <span style={{}}>view details</span>
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

export default MyOrdersTable;