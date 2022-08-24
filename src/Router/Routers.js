import { Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Routers