import { Routes, Route } from "react-router-dom";
import React from 'react'
import Instructor from "../Pages/Instructor";
import Goals from "../Components/CourseCreationComponents/Goals";
import CourseStructure from "../Components/CourseCreationComponents/CourseStructure";
import Setup from "../Components/CourseCreationComponents/Setup";
import Film from "../Components/CourseCreationComponents/Film";
import Curriculum from "../Components/CourseCreationComponents/Curriculum";
import Captions from "../Components/CourseCreationComponents/Captions";
import Basics from "../Components/CourseCreationComponents/Basics";
import Pricing from "../Components/CourseCreationComponents/Pricing";
import Promotions from "../Components/CourseCreationComponents/Promotions";
import CreationCourseSideBar from "../Components/CourseCreationComponents/CreationCourseSideBar";
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom"



const InstructorPageRoutes = () => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname.includes("create") ?
                    <div>
                        <Navbar bg="dark" className='p-3' expand="lg" >
                            <Nav id='navbar-buttons' className='ms-auto'>
                                <NavLink className='navlink-login' to={"/"}>
                                    Önizleme
                                </NavLink>
                            </Nav>
                        </Navbar >
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <CreationCourseSideBar></CreationCourseSideBar>
                                </Col>
                                <Col md={9}>
                                    <Routes>
                                        <Route path="/instructor/course/create/goals" element={<Goals />} />
                                        <Route path="/instructor/course/create/course-structure" element={<CourseStructure />} />
                                        <Route path="/instructor/course/create/setup" element={<Setup />} />
                                        <Route path="/instructor/course/create/film" element={<Film />} />
                                        <Route path="/instructor/course/create/curriculum" element={<Curriculum />} />
                                        <Route path="/instructor/course/create/captions" element={<Captions />} />
                                        <Route path="/instructor/course/create/basics" element={<Basics />} />
                                        <Route path="/instructor/course/create/pricing" element={<Pricing />} />
                                        <Route path="/instructor/course/create/promotions" element={<Promotions />} />
                                    </Routes>
                                </Col>
                            </Row>
                        </Container>
                    </div> :
                    <Routes>
                        <Route path="/instructor/courses" element={<Instructor />} />
                    </Routes>
            }
        </div>
    )
}
export default InstructorPageRoutes