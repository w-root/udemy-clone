import axios from "axios";
import Cookies from "js-cookie";

export const FetchAllCourses = () => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/courses/")
}

export const FetchCourseDetail = (slug) => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/courses/" + slug + "/")
}

export const FetchHomePageTabs = () => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/tabs/")
}

export const FetchCourseDetailById = (id) => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/courses/getbyid/" + id,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const CreateCourse = (course) => {
    return axios.post("https://udemyclone-api.herokuapp.com/api/courses/", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateCourse = (course) => {
    return axios.put("https://udemyclone-api.herokuapp.com/api/courses/" + course.slug + "/", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateCourseImage = (formData, id) => {
    return axios.put(`https://udemyclone-api.herokuapp.com/api/${id}/update-image/`, formData,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}`, 'Content-Type': 'multipart/form-data' } })
}

export const GetUserInstructorCourses = (username) => {
    return axios.get(`https://udemyclone-api.herokuapp.com/api/${username}/instructor/courses`,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const GetCurrentUserStudentCourses = () => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/student/courses",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const BuyACourse = (courses) => {
    return axios.post("https://udemyclone-api.herokuapp.com/api/student/buy-a-course", courses,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}
