import { useContext, useState, useEffect } from 'react';
import { UserDetailsContext } from '../context/UserDetailsProvider';

// firebase
import { fs } from '../firebase';
import { doc, onSnapshot } from "firebase/firestore";

const useOrderDetails = () => {
    const userDetails = useContext(UserDetailsContext);
    let [orderList, setOrderList] = useState([]);

    useEffect(() => {
        userDetails && userDetails.orderList && userDetails.orderList.forEach((elemId) => {
            onSnapshot(doc(fs, "orders", elemId), (doc) => {
                setOrderList((prev) => [...prev, {orderId: elemId, ...doc.data()}]);
            });
        });
    }, [userDetails]);

    orderList = [...new Set(orderList.map((elem) => JSON.stringify(elem)))].map((elem) => JSON.parse(elem));

    return orderList;
}

export default useOrderDetails;