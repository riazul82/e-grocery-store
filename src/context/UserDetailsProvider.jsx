import React, { createContext, useState, useContext, useEffect } from 'react';
import { LoginContext } from './LoginContextProvider';
import { doc, onSnapshot } from "firebase/firestore";
import { fs } from "../firebase";

export const UserDetailsContext = createContext();

const UserDetailsProvider = ({ children }) => {
    const { currentUser } = useContext(LoginContext);
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')) || currentUser);

    useEffect(() => {
        const getUserData = async () => {
            if (currentUser) {
                onSnapshot(doc(fs, "users", currentUser.uid), (doc) => {
                    setUserDetails({...doc.data(), id: currentUser.uid});
                    localStorage.setItem('userDetails', JSON.stringify(doc.data()));
                });
            }
        }

        getUserData();
    }, [currentUser, currentUser.uid]);

    return (
        <UserDetailsContext.Provider value={userDetails}>
            { children }
        </UserDetailsContext.Provider>
    );
}

export default UserDetailsProvider;