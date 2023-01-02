import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { fs } from '../../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const AdminUsersList = () => {
    const [usersList, setUsersList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const q = query(collection(fs, "users"));
        onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push({userId: doc.id, ...doc.data()});
            });
            setUsersList(users);
        });
    }, []);

    const handleViewDetails = (userDetails) => {
        navigate(`/admin/orders/${userDetails.orderId}`, {state: userDetails});
    }

    return (
        <table id="ordersTable">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersList.map((elem) => {
                        return (
                            <tr className="ordersTableItem" key={elem.userId}>
                                {console.log(elem.userId)}
                                <td>{`#${elem.userId.slice(0, 6)}`}</td>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.role}</td>
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

export default AdminUsersList;