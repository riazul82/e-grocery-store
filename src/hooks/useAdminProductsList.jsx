import { useState, useEffect } from 'react';

// firebase
import { fs } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

const useAdminProductsList = () => {
    let [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const q = query(collection(fs, "products"));
        onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({productId: doc.id, ...doc.data()});
            });
            setProductsList(products);
        });
    }, []);

    return productsList;
}

export default useAdminProductsList;