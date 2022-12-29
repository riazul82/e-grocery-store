import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserDetailsContext } from './UserDetailsProvider';

import { doc, onSnapshot } from "firebase/firestore";
import { fs } from '../firebase';

export const UserOrderContext = createContext();

const UserOrdersContextProvider = ({children}) => {
    const userDetails = useContext(UserDetailsContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const tempAra = [];
        userDetails && userDetails.orderList && userDetails.orderList.forEach((elem) => {
            onSnapshot(doc(fs, "orders", elem), (doc) => {
                tempAra.push({orderId: elem, ...doc.data()});
            });
        });

        setOrderList(tempAra);
    }, [userDetails]);

    return (
        <UserOrderContext.Provider value={orderList}>
            {children}
        </UserOrderContext.Provider>
    );
}

export default UserOrdersContextProvider;