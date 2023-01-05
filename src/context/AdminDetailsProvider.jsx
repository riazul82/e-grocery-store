import React, { useState, useEffect, useContext, createContext } from 'react';
import { LoginContext } from './LoginContextProvider';

// firebase
import { doc, onSnapshot } from "firebase/firestore";
import { fs } from "../firebase";

export const AdminDetailsContext = createContext();

const AdminDetailsProvider = ({ children }) => {
    const { currentAdmin } = useContext(LoginContext);
    const [adminDetails, setAdminDetails] = useState(JSON.parse(localStorage.getItem('adminDetails')) || currentAdmin);

    useEffect(() => {
        // get admin data from firestore
        const getAdminData = async () => {
            if (currentAdmin) {
                onSnapshot(doc(fs, "users", currentAdmin.uid), (doc) => {
                    let adminObj = {
                        id: currentAdmin.uid,
                        name: 'Admin',
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
                    setAdminDetails(adminObj);
                    localStorage.setItem('adminDetails', JSON.stringify(adminObj));
                });
            }    
        }
        
        getAdminData();
    }, [currentAdmin]);

    return (
        <AdminDetailsContext.Provider value={adminDetails}>
            { children }
        </AdminDetailsContext.Provider>
    );
}

export default AdminDetailsProvider;