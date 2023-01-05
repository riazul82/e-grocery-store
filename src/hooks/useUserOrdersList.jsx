import { useContext, useState, useEffect } from 'react';
import { UserDetailsContext } from '../context/UserDetailsProvider';

// firebase
import { fs } from '../firebase';
import { doc, onSnapshot } from "firebase/firestore";

const useUserOrdersList = () => {
    const userDetails = useContext(UserDetailsContext);
    let [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        userDetails && userDetails.orderList && userDetails.orderList.forEach((elemId) => {
            onSnapshot(doc(fs, "orders", elemId), (doc) => {
                setOrdersList((prev) => [...prev, {orderId: elemId, ...doc.data()}]);
            });
        });
    }, [userDetails]);

    ordersList = [...new Set(ordersList.map((elem) => JSON.stringify(elem)))].map((elem) => JSON.parse(elem));

    return ordersList;
}

export default useUserOrdersList;