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
                    let userObj = {
                        id: currentUser.uid,
                        name: 'Unknown',
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