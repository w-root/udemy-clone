import React from 'react'
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AuthProtectedRoute = ({ Page }) => {
    const auth = Cookies.get("sessionid")

    return auth === undefined ? Page : <Navigate to="/" />
}

export default AuthProtectedRoute