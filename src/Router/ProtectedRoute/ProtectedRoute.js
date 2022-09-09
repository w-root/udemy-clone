import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Login from "../../Pages/Login";

const ProtectedRoute = ({ Page }) => {
    const auth = Cookies.get("sessionid")

    return Page.type.name == 'Login' || Page.type.name == 'Signup' ?
        (auth == null ? Page : <Navigate to="/" />) :
        (auth == null ? <Navigate to="/" /> : Page)
}

export default ProtectedRoute