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

const CourseManageRoutes = () => {
    return (
        <Routes>
            <Route path="/instructor/course/:id/manage/goals" element={<Goals />} />
            <Route path="/instructor/course/:id/manage/course-structure" element={<CourseStructure />} />
            <Route path="/instructor/course/:id/manage/setup" element={<Setup />} />
            <Route path="/instructor/course/:id/manage/film" element={<Film />} />
            <Route path="/instructor/course/:id/manage/curriculum" element={<Curriculum />} />
            <Route path="/instructor/course/:id/manage/captions" element={<Captions />} />
            <Route path="/instructor/course/:id/manage/basics" element={<Basics />} />
            <Route path="/instructor/course/:id/manage/pricing" element={<Pricing />} />
            <Route path="/instructor/course/:id/manage/promotions" element={<Promotions />} />
        </Routes>
    )
}
export default CourseManageRoutes