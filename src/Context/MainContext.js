import React, { createContext, useEffect, useState, useContext } from 'react'
import { GetAllCategories, GetAllCourses, GetAllTabs, GetInformations, addToCart } from './Actions'

const GlobalContext = createContext()

export const MainProvider = ({ children }) => {
    const [profile, setProfile] = useState()
    const [categories, setCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [tabs, setTabs] = useState([])

    const [cart] = useState([])

    useEffect(() => {
        GetInformations(setProfile)
        GetAllCategories(setCategories)
        GetAllCourses(setCourses)
        GetAllTabs(setTabs)
        if (localStorage.getItem("cart") == null) {
            localStorage.setItem("cart", JSON.stringify(cart))

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = {
        profile,
        categories,
        courses,
        tabs,
        cart,
        addToCart
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export { GlobalContext, useContext }