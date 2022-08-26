import axios from "axios";

export const FetchAllCourses = () => {
    return axios.get("http://127.0.0.1:8000/api/courses/")
}

export const FetchCourseDetail = (slug) => {
    return axios.get("http://127.0.0.1:8000/api/courses/" + slug + "/")
}

export const FetchHomePageTabs = () => {
    return axios.get("http://127.0.0.1:8000/api/tabs/")
}