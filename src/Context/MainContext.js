import React, { createContext, useEffect, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { GetAllCategories, GetAllCourses, GetAllTabs, GetInformations, addToCart } from './Actions'

const GlobalContext = createContext()

export const MainProvider = ({ children }) => {
    const [profile, setProfile] = useState()
    const [categories, setCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [tabs, setTabs] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        GetInformations(setProfile)
        GetAllCategories(setCategories)
        GetAllCourses(setCourses)
        GetAllTabs(setTabs)
        console.log(cart)
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