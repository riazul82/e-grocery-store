import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { fs } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const AdminOrdersList = () => {
    const [orderList, setOrderList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const q = query(collection(fs, "orders"));
        onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push({orderId: doc.id, ...doc.data()});
            });
            setOrderList(orders);
        });
    }, []);

    const handleViewDetails = (orderDetails) => {
        navigate(`/admin/orders/${orderDetails.orderId}`, {state: orderDetails});
    }

    const handleSelectInput = (orderId, e) => {
        try {   
            const orderRef = doc(fs, 'orders', orderId);
            setDoc(orderRef, { status: e.target.value }, { merge: true });
        } catch (err) {
            console.log(err.message);
        }
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
                            <tr className="ordersTableItem" key={elem.orderId}>
                                <td>{`#${elem.orderId.slice(0, 6)}`}</td>
                                <td>{elem.time.split(' ').slice(1, 4).join(' ')}</td>
                                <td>{elem.totalCost} Tk</td>
                                <td>
                                    <select name="slctStatus" className={`${elem.status}`} id="slctOrderStatus" value={elem.status} onChange={(e) => handleSelectInput(elem.orderId, e)}>
                                        <option value="pending">pending</option>
                                        <option value="packing">packing</option>
                                        <option value="on-the-way">on the way</option>
                                        <option value="delivered">delivered</option>
                                        <option value="canceled">canceled</option>
                                    </select>
                                </td>
                                <td className="orderListDetailsBtn" onClick={() => handleViewDetails(elem)}>
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

export default AdminOrdersList;