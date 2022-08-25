import { Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import CourseDetail from "../Pages/CourseDetail";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<CourseDetail />} />
        </Routes>
    )
}

export default Routers