import React, { createContext, useEffect, useReducer } from 'react';

export const CartContext = createContext();

const INITIAL_STATE = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalItems: 0,
    subTotal: 0,
    shippingCost: 0,
    discount: 0,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            let item = state.cartItems.find((elem) => {
                return elem.id === action.payload.id;
            });

            if (item) {
                return state;
            }

            return {...state, cartItems: state.cartItems.push({...action.payload, cartQuantity: 1})};
        
        case 'REMOVE_PRODUCT':
            let cartItems = state.cartItems.filter((elem) => {
                return elem.id !== action.payload.id;
            });

            return {...state, cartItems: [...cartItems]}

        case 'CONTROL_QUANTITY':
            let updatedItems = state.cartItems.map((elem) => {
                if (elem.id === action.payload.id) {
                    elem = action.payload;
                }
                return elem;
            });

            return {...state, cartItems: [...updatedItems]};
            
        default:
            return state;
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    })

    return (
        <CartContext.Provider value={{cartItems: state.cartItems, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;