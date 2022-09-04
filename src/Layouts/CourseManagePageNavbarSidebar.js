import React from 'react'
import CourseManageRoutes from '../Router/CourseManageRoutes'
import CourseManageSideBar from "../Components/CourseManageComponents/CourseManageSideBar";
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiChevronLeft } from 'react-icons/fi'

const CourseManagePageNavbarSidebar = () => {
    return (
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
            </Navbar>

            <Container>
                <Row>
                    <Col md={3}>
                        <CourseManageSideBar></CourseManageSideBar>
                    </Col>
                    <Col md={9}>
                        <CourseManageRoutes></CourseManageRoutes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CourseManagePageNavbarSidebar