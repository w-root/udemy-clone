import React from 'react'
import { Routes, Route } from "react-router-dom";
import Instructor from "../Pages/Instructor";
import CreateCoursePage from "../Pages/CreateCoursePage.js";
import BasicInformation from "../Pages/InstructorProfile/BasicInformation";
import EditPhoto from "../Pages/InstructorProfile/EditPhoto";
import Privacy from "../Pages/InstructorProfile/Privacy";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const InstructorRoutes = () => {
    return (

        <Routes>
            <Route path="/instructor/courses" element={<ProtectedRoute Page={<Instructor />} />} />
            <Route path="/instructor/course/create" element={<ProtectedRoute Page={<CreateCoursePage />} />} />
            <Route path="/instructor/profile/basic-information" element={<ProtectedRoute Page={<BasicInformation />} />} />
            <Route path="/instructor/profile/photo" element={<ProtectedRoute Page={<EditPhoto />} />} />
            <Route path="/instructor/profile/privacy" element={<ProtectedRoute Page={<Privacy />} />} />
        </Routes>
    )
}

export default InstructorRoutes