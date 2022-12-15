import React, { createContext, useEffect, useReducer } from 'react';

export const LoginContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {currentUser: action.payload}
        case 'LOGOUT':
            return {currentUser: null}
        default:
            return state;
    }
}

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null
}

const LoginContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <LoginContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;