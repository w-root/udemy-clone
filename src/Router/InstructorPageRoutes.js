import { Routes, Route } from "react-router-dom";
import React from 'react'
import Instructor from "../Pages/Instructor";
import Goals from "../Components/CourseManageComponents/Goals";
import CourseStructure from "../Components/CourseManageComponents/CourseStructure";
import Setup from "../Components/CourseManageComponents/Setup";
import Film from "../Components/CourseManageComponents/Film";
import Curriculum from "../Components/CourseManageComponents/Curriculum";
import Captions from "../Components/CourseManageComponents/Captions";
import Basics from "../Components/CourseManageComponents/Basics";
import Pricing from "../Components/CourseManageComponents/Pricing";
import Promotions from "../Components/CourseManageComponents/Promotions";
import CourseManageSideBar from "../Components/CourseManageComponents/CourseManageSideBar";
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom"
import CreateCoursePage from "../Pages/CreateCoursePage.js";
import { FiChevronLeft } from 'react-icons/fi'
const InstructorPageRoutes = () => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname.includes("manage") ?
                    <div>
                        <Navbar bg="dark" className='p-3' expand="lg" >
                            <Nav id='navbar-buttons' className='me-auto'>
                                <NavLink style={{ textDecoration: "none", color: "#f7f9fa" }} to={"/instructor/courses"}>
                                    <FiChevronLeft />
                                    <span>
                                        Kurslara geri dön
                                    </span>
                                </NavLink>
                                <div className="d-flex mx-4">
                                    <div className="px-3" style={{ backgroundColor: "#6a6f73", color: "#f7f9fa" }}>
                                        TASLAK
                                    </div>
                                    <span className="mx-3" style={{ color: "#f7f9fa" }}>
                                        0 dak uzunluğunda video içeriği yüklendi
                                    </span>
                                </div>
                            </Nav>
                            <Nav id='navbar-buttons' className='ms-auto'>
                                <NavLink className='navlink-login' to={"/"}>
                                    Önizleme
                                </NavLink>
                            </Nav>

                        </Navbar >
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <CourseManageSideBar></CourseManageSideBar>
                                </Col>
                                <Col md={9}>
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
                                </Col>
                            </Row>
                        </Container>
                    </div> :
                    <Routes>
                        <Route path="/instructor/courses" element={<Instructor />} />
                        <Route path="/instructor/course/create" element={<CreateCoursePage />} />
                    </Routes>
            }
        </div>
    )
}
export default InstructorPageRoutes