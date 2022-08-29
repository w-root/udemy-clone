import axios from "axios";
import Cookies from "js-cookie";

export const UserSignup = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/registration", user)
}

export const UserSignin = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/login/", user)
}

export const UserLogout = () => {
    console.log(Cookies.get("sessionid"))
    return axios.delete("http://127.0.0.1:8000/api/logout",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

