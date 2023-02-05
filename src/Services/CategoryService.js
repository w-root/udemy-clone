import axios from "axios";

export const FetchAllCategories = () => {
    return axios.get("https://qirynyq.pythonanywhere.com/api/categories/")
}
