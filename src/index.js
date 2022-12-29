import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context provider
import CartContextProvider from './context/CartContextProvider';
import LoginContextProvider from './context/LoginContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import UserDetailsProvider from './context/UserDetailsProvider';
import UserOrdersContextProvider from './context/UserOrdersContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <UserDetailsProvider>
            <UserOrdersContextProvider>
              <App />
            </UserOrdersContextProvider>
          </UserDetailsProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);