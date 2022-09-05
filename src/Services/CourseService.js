import axios from "axios";
import Cookies from "js-cookie";

export const FetchAllCourses = () => {
    return axios.get("http://127.0.0.1:8000/api/courses/")
}

export const FetchCourseDetail = (slug) => {
    return axios.get("http://127.0.0.1:8000/api/courses/" + slug + "/")
}

export const FetchHomePageTabs = () => {
    return axios.get("http://127.0.0.1:8000/api/tabs/")
}

export const FetchCourseDetailById = (id) => {
    return axios.get("http://127.0.0.1:8000/api/courses/getbyid/" + id,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const CreateCourse = (course) => {
    return axios.post("http://127.0.0.1:8000/api/courses/", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateCourse = (course) => {
    return axios.put("http://127.0.0.1:8000/api/courses/" + course.slug + "/", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const UpdateCourseImage = (formData, id) => {
    return axios.put(`http://127.0.0.1:8000/api/${id}/update-image/`, formData,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}`, 'Content-Type': 'multipart/form-data' } })
}

export const GetCurrentUserInstructorCourses = () => {
    return axios.get("http://127.0.0.1:8000/api/instructor/courses",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const GetCurrentUserStudentCourses = () => {
    return axios.get("http://127.0.0.1:8000/api/student/courses",
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}

export const BuyACourse = (course) => {
    return axios.post("http://127.0.0.1:8000/api/student/buy-a-course", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}
