import Cookies from 'js-cookie'
import { GetUserProfileInformation } from '../Services/UserService'
import { FetchAllCategories } from '../Services/CategoryService'
import { FetchAllCourses, FetchHomePageTabs } from '../Services/CourseService'
import { toast } from 'react-toastify';

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

export const addToCart = (cart, course) => {
    if (cart.find(item => item.id === course.id)) {
        toast.error('Kurs zaten sepete eklendi.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            hideProgressBar: true,
            theme: 'colored'
        })
    } else {
        cart.push(course)
        toast.success('Sepete Eklendi.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            hideProgressBar: true,
            theme: 'colored'
        })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}