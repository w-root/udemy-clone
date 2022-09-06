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

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<CourseDetail />} />
            <Route path="/join/login" element={<Login />} />
            <Route path="/join/signup" element={<Signup />} />
            <Route path="/my-courses/learning" element={<LearningContent />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/user/:username" element={<UserDetail />} />
        </Routes>
    )
}

export default PageRoutes