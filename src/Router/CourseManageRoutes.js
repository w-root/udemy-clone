import React from 'react'
import { Routes, Route } from "react-router-dom";
import Goals from "../Components/CourseManageComponents/Goals";
import CourseStructure from "../Components/CourseManageComponents/CourseStructure";
import Setup from "../Components/CourseManageComponents/Setup";
import Film from "../Components/CourseManageComponents/Film";
import Curriculum from "../Components/CourseManageComponents/Curriculum";
import Captions from "../Components/CourseManageComponents/Captions";
import Basics from "../Components/CourseManageComponents/Basics";
import Pricing from "../Components/CourseManageComponents/Pricing";
import Promotions from "../Components/CourseManageComponents/Promotions";
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const CourseManageRoutes = () => {
    return (
        <Routes>
            <Route path="/instructor/course/:id/manage/goals" element={<ProtectedRoute Page={<Goals />} />} />
            <Route path="/instructor/course/:id/manage/course-structure" element={<ProtectedRoute Page={<CourseStructure />} />} />
            <Route path="/instructor/course/:id/manage/setup" element={<ProtectedRoute Page={<Setup />} />} />
            <Route path="/instructor/course/:id/manage/film" element={<ProtectedRoute Page={<Film />} />} />
            <Route path="/instructor/course/:id/manage/curriculum" element={<ProtectedRoute Page={<Curriculum />} />} />
            <Route path="/instructor/course/:id/manage/captions" element={<ProtectedRoute Page={<Captions />} />} />
            <Route path="/instructor/course/:id/manage/basics" element={<ProtectedRoute Page={<Basics />} />} />
            <Route path="/instructor/course/:id/manage/pricing" element={<ProtectedRoute Page={<Pricing />} />} />
            <Route path="/instructor/course/:id/manage/promotions" element={<ProtectedRoute Page={<Promotions />} />} />
        </Routes>
    )
}
export default CourseManageRoutes