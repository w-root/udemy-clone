import axios from "axios";

export const FetchAllCategories = () => {
    return axios.get("https://udemyclone-api.herokuapp.com/api/categories/")
}
