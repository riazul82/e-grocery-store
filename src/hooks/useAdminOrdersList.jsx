import { useState, useEffect } from 'react';

// firebase
import { fs } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

const useAdminOrdersList = () => {
    const [ordersList, setOrderList] = useState([]);

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

    return ordersList;
}

export default useAdminOrdersList;