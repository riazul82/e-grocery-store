import React, { useState, useEffect, useContext, createContext } from 'react';
import { LoginContext } from './LoginContextProvider';

// firebase
import { doc, onSnapshot } from "firebase/firestore";
import { fs } from "../firebase";

export const UserDetailsContext = createContext();

const UserDetailsProvider = ({ children }) => {
    const { currentUser } = useContext(LoginContext);
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')) || currentUser);

    useEffect(() => {
        // get user data from firestore
        const getUserData = async () => {
            if (currentUser) {
                onSnapshot(doc(fs, "users", currentUser.uid), (doc) => {
                    let userObj = {
                        id: currentUser.uid,
                        name: 'User',
                        phone: '',
                        gender: '',
                        address: {
                            street: '',
                            division: '',
                            city: '',
                            postcode: '',
                            country: 'Bangladesh'
                        },
                        ...doc.data(),
                    }
                    setUserDetails(userObj);
                    localStorage.setItem('userDetails', JSON.stringify(userObj));
                });
            }    
        }
        
        getUserData();
    }, [currentUser]);

    return (
        <UserDetailsContext.Provider value={userDetails}>
            { children }
        </UserDetailsContext.Provider>
    );
}

export default UserDetailsProvider;