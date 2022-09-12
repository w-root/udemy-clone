import React from 'react'
import { useLocation } from "react-router-dom"
import InstructorRoutes from "./InstructorRoutes";
import CourseManagePageNavbarSidebar from "../Layouts/CourseManagePageNavbarSidebar";

const InstructorPageRoutes = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname.includes("manage") ?
                <div>
                    <CourseManagePageNavbarSidebar></CourseManagePageNavbarSidebar>
                </div>
                :
                <div>
                    <InstructorRoutes></InstructorRoutes>
                </div>
            }
        </div>
    )
}
export default InstructorPageRoutes