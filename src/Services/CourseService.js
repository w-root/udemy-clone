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

export const CreateCourse = (course) => {
    return axios.post("http://127.0.0.1:8000/api/courses/", course,
        { headers: { "Sessionid": `${Cookies.get("sessionid")}` } })
}