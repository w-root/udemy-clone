import { Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import CourseDetail from "../Pages/CourseDetail";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<CourseDetail />} />
            <Route path="/join/login" element={<Login />} />
            <Route path="/join/signup" element={<Signup />} />
        </Routes>
    )
}

export default Routers