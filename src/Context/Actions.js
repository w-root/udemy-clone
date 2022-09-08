import Cookies from 'js-cookie'
import { GetUserProfileInformation } from '../Services/UserService'
import { FetchAllCategories } from '../Services/CategoryService'
import { FetchAllCourses, FetchHomePageTabs } from '../Services/CourseService'

export const GetInformations = async (setProfile) => {
    try {
        const response = await GetUserProfileInformation(Cookies.get("username"))
        setProfile(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetAllCategories = async (setCategories) => {
    try {
        const response = await FetchAllCategories()
        setCategories(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetAllCourses = async (setCourses) => {
    try {
        const response = await FetchAllCourses()
        setCourses(response.data)
    } catch (error) {
        console.log(error)
    }
}
export const GetAllTabs = async (setTabs) => {
    try {
        const response = await FetchHomePageTabs()
        setTabs(response.data)
    } catch (error) {
        console.log(error)
    }
}