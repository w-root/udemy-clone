import axios from "axios";

export const UserSignup = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/registration", user)
}

export const UserSignin = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/login/", user)
}

