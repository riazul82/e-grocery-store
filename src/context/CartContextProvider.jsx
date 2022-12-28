import React, { createContext, useEffect, useReducer } from 'react';

export const CartContext = createContext();

const INITIAL_STATE = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    winterVoucherActive: Boolean(localStorage.getItem("winterVoucher")) || false,
    newUserVoucherActive: Boolean(localStorage.getItem("newUserVoucher")) || false
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

            return {...state, cartItems: [...cartItems]};

        case 'CONTROL_QUANTITY':
            let updatedItems = state.cartItems.map((elem) => {
                if (elem.id === action.payload.id) {
                    elem = action.payload;
                }
                return elem;
            });

            return {...state, cartItems: [...updatedItems]};
        
        case 'NEWUSER_DISCOUNT':
            return {...state, newUserVoucherActive: true};

        case 'WINTER_DISCOUNT':
            return {...state, winterVoucherActive: true};

        case 'REMOVE_DISCOUNT':
            return {...state, winterVoucherActive: false, newUserVoucherActive: false};

        default:
            return state;
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    let subTotal = 0;
    let discount = 0;
    let shippingCost = 60;
    let totalCost = 0;
    let newUserDiscount = 0;
    let winterDiscount = 0;

    for (let i = 0; i < state.cartItems.length; i ++) {
        let elem = state.cartItems[i];
        subTotal += (elem.price - (elem.price * (elem.discount) / 100)) * elem.cartQuantity;
        discount += elem.price * (elem.discount) / 100;
    }

    if (state.newUserVoucherActive && shippingCost + subTotal >= 500) {
        newUserDiscount = 250;
        totalCost = shippingCost + subTotal - newUserDiscount;
    } else if (state.winterVoucherActive) {
        winterDiscount = (shippingCost + subTotal) / 4;
        totalCost = shippingCost + subTotal;
        totalCost -= winterDiscount;
    } else {
        totalCost = shippingCost + subTotal;
    }

    totalCost = totalCost.toFixed(1);
    subTotal = subTotal.toFixed(1);
    discount = discount.toFixed(1);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        if (state.newUserVoucherActive && shippingCost + subTotal >= 500) {
            localStorage.setItem("newUserVoucher", true.toString());
        } else if (state.winterVoucherActive) {
            localStorage.setItem("winterVoucher", true.toString());
        } else {
            localStorage.removeItem("winterVoucher");
            localStorage.removeItem("newUserVoucher");
        }
    });

    return (
        <CartContext.Provider value={{cartItems: state.cartItems, subTotal, shippingCost, discount, newUserDiscount, winterDiscount, totalCost, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;