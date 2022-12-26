import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginContext } from './context/LoginContextProvider';
import './App.scss';

import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import UpdateProfile from './pages/UpdateProfile';
import AdminLogin from './auth/AdminLogin';
import CreateAdmin from './auth/CreateAdmin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import UploadProducts from './pages/admin/UploadProducts';
import Error404 from './pages/Error404';

const App = () => {
  const { currentUser, currentAdmin } = useContext(LoginContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/user/login" />
  }

  const RequireAdminAuth = ({children}) => {
    return currentAdmin ? (children) : <Navigate to="/admin/login" />
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>} />
          <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>} />
          <Route path="/payment" element={<RequireAuth><Payment/></RequireAuth>} />
          <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/user/update-profile" element={<RequireAuth><UpdateProfile /></RequireAuth>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/create" element={<CreateAdmin />} />
          <Route path="/admin/dashboard" element={<RequireAdminAuth><AdminDashboard /></RequireAdminAuth>} />
          <Route path="/admin/products" element={<RequireAdminAuth><AdminProducts /></RequireAdminAuth>} />
          <Route path="/admin/products/upload" element={<RequireAdminAuth><UploadProducts /></RequireAdminAuth>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;