import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginContextProvider from './context/LoginContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);