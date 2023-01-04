import { useEffect, useState } from 'react';

// firebase
import { fs } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

const useAdminUsersList = () => {
    const [usersList, setUsersList] = useState([]);

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
    
    return usersList;
}

export default useAdminUsersList;