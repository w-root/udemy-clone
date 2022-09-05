import axios from "axios";
import Cookies from "js-cookie";

export const UserSignup = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/registration", user)
}

export const UserSignin = (user) => {
    return axios.post("http://127.0.0.1:8000/rest_auth/login/", user)
}

export const UserLogout = () => {
    return axios.delete("http://127.0.0.1:8000/api/logout",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const GetUserProfileInformation = () => {
    return axios.get("http://127.0.0.1:8000/api/user-profiles/" + `${Cookies.get("username")}`,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateUserProfile = (profile) => {
    return axios.put("http://127.0.0.1:8000/api/user-profiles/" + profile.id + "/", profile,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateUserProfilePhoto = (formData) => {
    return axios.put("http://127.0.0.1:8000/api/profile-photo", formData,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}`, 'Content-Type': 'multipart/form-data' } })
}
