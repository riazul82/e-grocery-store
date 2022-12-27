import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContextProvider from './context/CartContextProvider';
import LoginContextProvider from './context/LoginContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import UserDetailsProvider from './context/UserDetailsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <UserDetailsProvider>
            <App />
          </UserDetailsProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);