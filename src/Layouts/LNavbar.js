import React, { useEffect } from 'react'
import logo from '../Images/logo-udemy.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Image, Row } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import '../css/Navi.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'


const LNavbar = () => {
    return (
        <Navbar bg="white" className='shadow p-3  bg-body rounded' expand="lg" >
            <Container fluid >
                <Navbar.Brand href="/">
                    <Image src={logo} width={91} height={34} alt='udemy-logo' />
                </Navbar.Brand>

                <Navbar.Collapse id="navbarScroll">
                    <Nav id='navbar-search-and-links'>
                        <NavLink className='nav-link' to={""}>
                            Kategoriler
                        </NavLink>
                        <Form className='w-75' >
                            <div className='bg-light d-flex py-1 border border-1 border-dark rounded-pill'  >
                                <Button
                                    className='rounded-pill' variant="light"> <AiOutlineSearch></AiOutlineSearch> </Button>
                                <Form.Control
                                    style={{ borderTopRightRadius: "50rem", borderBottomRightRadius: "50rem" }}
                                    height={46}
                                    className='border-0 bg-light pt-2 pb-2 shadow-none'
                                    type="search"
                                    placeholder="Dilediğiniz Şeyi Arayın"
                                    aria-label="Search"
                                    id='searchinput'
                                />
                            </div>
                        </Form>
                        <NavLink className='nav-link' to={""}>Udemy Business</NavLink>
                        <NavLink className='nav-link' to={""}>
                            Udemy'de Eğitim Verin</NavLink>
                    </Nav>

                    <Nav id='navbar-buttons'>
                        {
                            Cookies.get("sessionid") == null ? <div>
                                <NavLink className='navlink-login' to={"join/login"}>
                                    Oturum Aç
                                </NavLink>
                                <NavLink className='navlink-register' to={"join/signup"} >
                                    Kaydol
                                </NavLink>
                            </div> :
                                <div >
                                    <NavLink className='navlink-login' to={"/"}>
                                        Logout
                                    </NavLink>

                                </div>


                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default LNavbar