import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Page }) => {
    const auth = Cookies.get("sessionid")

    return (auth === undefined ? <Navigate to="/" /> : Page)
}
export default ProtectedRoute