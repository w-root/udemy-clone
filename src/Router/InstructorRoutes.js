import React from 'react'
import { Routes, Route } from "react-router-dom";
import Instructor from "../Pages/Instructor";
import CreateCoursePage from "../Pages/CreateCoursePage.js";
import BasicInformation from "../Pages/InstructorProfile/BasicInformation";
import EditPhoto from "../Pages/InstructorProfile/EditPhoto";
import Privacy from "../Pages/InstructorProfile/Privacy";

const InstructorRoutes = () => {
    return (
        <Routes>
            <Route path="/instructor/courses" element={<Instructor />} />
            <Route path="/instructor/course/create" element={<CreateCoursePage />} />
            <Route path="/instructor/profile/basic-information" element={<BasicInformation />} />
            <Route path="/instructor/profile/photo" element={<EditPhoto />} />
            <Route path="/instructor/profile/privacy" element={<Privacy />} />
        </Routes>
    )
}

export default InstructorRoutes