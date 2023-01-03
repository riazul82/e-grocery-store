import React, { createContext, useEffect, useReducer } from 'react';

export const LoginContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {currentAdmin: null, currentUser: action.payload}
        case 'ADMIN_LOGIN':
            return {currentAdmin: action.payload, currentUser: null}
        case 'LOGOUT':
            document.location.reload();
            return {currentUser: null, currentAdmin: null}
        case 'ADMIN_LOGOUT':
            document.location.reload();
            return {currentUser: null, currentAdmin: null}
        default:
            return state;
    }
}

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
    currentAdmin: JSON.parse(localStorage.getItem("admin")) || null
}

const LoginContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        if (state.currentUser) {
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        }

        if (state.currentUser === null) {
            localStorage.removeItem("user");
            localStorage.removeItem("userDetails");
            localStorage.removeItem("checkoutFormFilled");
            localStorage.removeItem("orderConfirmed");
        } 

        if (state.currentAdmin) {
            localStorage.setItem("admin", JSON.stringify(state.currentAdmin));
        }

        if (state.currentAdmin === null) {
            localStorage.removeItem("admin");
        }
        
    }, [state.currentUser, state.currentAdmin]);

    return (
        <LoginContext.Provider value={{currentUser: state.currentUser, currentAdmin: state.currentAdmin, dispatch}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;