import axios from "axios";
import Cookies from "js-cookie";

export const UserSignup = (user) => {
    return axios.post("https://udemyclone-api.herokuapp.com/rest_auth/registration", user)
}

export const UserSignin = (user) => {
    return axios.post("https://udemyclone-api.herokuapp.com/rest_auth/login/", user)
}

export const UserLogout = () => {
    return axios.delete("https://udemyclone-api.herokuapp.com/api/logout",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const GetUserProfileInformation = (username) => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/user-profiles/" + username,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateUserProfile = (profile) => {
    return axios.put("https://udemyclone-api.herokuapp.com/api/user-profiles/" + profile.id + "/", profile,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateUserProfilePhoto = (formData) => {
    return axios.put("https://udemyclone-api.herokuapp.com/api/profile-photo", formData,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}`, 'Content-Type': 'multipart/form-data' } })
}
