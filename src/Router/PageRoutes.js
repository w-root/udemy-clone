import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import CourseDetail from "../Pages/CourseDetail";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import LearningContent from "../Pages/LearningContent";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import UserDetail from "../Pages/UserDetail";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AuthProtectedRoute from "./ProtectedRoute/AuthProtectedRoute";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<CourseDetail />} />
            <Route path="/join/login" element={<AuthProtectedRoute Page={<Login />} />} />
            <Route path="/join/signup" element={<AuthProtectedRoute Page={<Signup />} />} />
            <Route path="/my-courses/learning" element={<ProtectedRoute Page={<LearningContent />} />} />
            <Route path="/cart" element={<ProtectedRoute Page={<Cart />} />} />
            <Route path="/cart/checkout" element={<ProtectedRoute Page={<Checkout />} />} />
            <Route path="/user/:username" element={<UserDetail />} />
        </Routes>
    )
}

export default PageRoutes