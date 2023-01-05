import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginContext } from './context/LoginContextProvider';
import { CartContext } from './context/CartContextProvider';
import './App.scss';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

// auth
import Login from './auth/Login';
import Signup from './auth/Signup';
import AdminLogin from './auth/AdminLogin';
import CreateAdmin from './auth/CreateAdmin';

// user profile
import Profile from './pages/user/Profile';
import UpdateProfile from './pages/user/UpdateProfile';
import UserDashboard from './pages/user/UserDashboard';
import MyOrders from './pages/user/MyOrders';
import OrderDetails from './pages/user/OrderDetails';

// shopping cart
import Cart from './pages/cart/Cart';
import Checkout from './pages/cart/Checkout';
import Payment from './pages/cart/Payment';
import Review from './pages/cart/Review';
import EmptyCart from './pages/cart/EmptyCart';

// admin dashboard
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import UploadProducts from './pages/admin/UploadProducts';
import AdminProductDetails from './pages/admin/AdminProductDetails';
import AdminOrders from './pages/admin/AdminOrders';
import AdminOrderDetails from './pages/admin/AdminOrderDetails';
import AdminUsers from './pages/admin/AdminUsers';
import AdminUserDetails from './pages/admin/AdminUserDetails';
import AdminProfile from './pages/admin/AdminProfile';
import AdminUpdateProfile from './pages/admin/AdminUpdateProfile';

import ScrollToTop from './effects/ScrollToTop';

const App = () => {
  const { currentUser, currentAdmin } = useContext(LoginContext);
  const { cartItems, checkoutFormFilled, orderConfirmed } = useContext(CartContext);

  // protect user login require routes
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/user/login" replace />
  }

  // protect admin login require routes
  const RequireAdminAuth = ({children}) => {
    return currentAdmin ? (children) : <Navigate to="/admin/login" replace />
  }

  const RequireCart = ({children}) => {
    return cartItems.length >= 1 ? (children) : <Navigate to="/empty-cart" replace />
  }

  const RequirePayment = ({children}) => {
    return checkoutFormFilled ? (children) : <Navigate to="/checkout" replace />
  }

  const RequireCartReview = ({children}) => {
    return orderConfirmed ? (children) : <Navigate to="/payment" replace />
  }

  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<RequireCart><Cart/></RequireCart>} />
          <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>} />
          <Route path="/payment" element={<RequirePayment><Payment/></RequirePayment>} />
          <Route path="/review" element={<RequireCartReview><Review/></RequireCartReview>} />
          <Route path="/empty-cart" element={<EmptyCart/>} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/create" element={<CreateAdmin />} />

          <Route path="/user/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/user/update-profile" element={<RequireAuth><UpdateProfile /></RequireAuth>} />
          <Route path="/user/dashboard" element={<RequireAuth><UserDashboard /></RequireAuth>} />
          <Route path="/user/orders" element={<RequireAuth><MyOrders /></RequireAuth>} />
          <Route path="/user/orders/:id" element={<RequireAuth><OrderDetails /></RequireAuth>} />
          
          <Route path="/admin/dashboard" element={<RequireAdminAuth><AdminDashboard /></RequireAdminAuth>} />
          <Route path="/admin/users" element={<RequireAdminAuth><AdminUsers /></RequireAdminAuth>} />
          <Route path="/admin/users/:id" element={<RequireAdminAuth><AdminUserDetails /></RequireAdminAuth>} />
          <Route path="/admin/products" element={<RequireAdminAuth><AdminProducts /></RequireAdminAuth>} />
          <Route path="/admin/products/:id" element={<RequireAdminAuth><AdminProductDetails /></RequireAdminAuth>} />
          <Route path="/admin/products/upload" element={<RequireAdminAuth><UploadProducts /></RequireAdminAuth>} />
          <Route path="/admin/orders" element={<RequireAdminAuth><AdminOrders /></RequireAdminAuth>} />
          <Route path="/admin/orders/:id" element={<RequireAdminAuth><AdminOrderDetails /></RequireAdminAuth>} />
          <Route path="/admin/profile" element={<RequireAdminAuth><AdminProfile /></RequireAdminAuth>} />
          <Route path="/admin/update-profile" element={<RequireAdminAuth><AdminUpdateProfile /></RequireAdminAuth>} />
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;