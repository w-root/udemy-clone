import React from 'react'
import logo from '../Images/logo-udemy.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import '../css/Navi.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import { UserLogout } from '../Services/UserService';

const LNavbar = () => {
    const logout = async () => {
        try {
            const response = await UserLogout()
            Cookies.remove("sessionid")
            window.location.href = "join/login"
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Navbar bg="white" className='shadow p-3  bg-body rounded' expand="lg" >
            <Navbar.Brand href="/">
                <Image src={logo} width={91} height={34} alt='udemy-logo' />
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
                <Nav id='navbar-search-and-links'>

                    <div className='d-flex w-100 me-4'>
                        <NavLink className='nav-link' to={""}>
                            Kategoriler
                        </NavLink>
                        <Form className='w-100' >
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
                    </div>
                    <div style={{ width: "10rem" }}>
                        <NavLink className='nav-link' to={""}>Udemy Business</NavLink>
                    </div>
                    {
                        Cookies.get("sessionid") == null ?
                            <div >
                                <NavLink className='nav-link' to={""}>
                                    Udemy'de Eğitim Verin</NavLink>
                            </div>
                            :
                            <div className='d-flex' style={{ width: "20rem" }}>
                                <NavLink className='nav-link' to={"instructor/courses"}>
                                    Eğitmen
                                </NavLink>
                                <NavLink className='nav-link' to={"my-learning-content"}>
                                    Öğrenim İçeriğim
                                </NavLink>
                            </div>
                    }
                </Nav>
            </Navbar.Collapse>
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
                        <div className='ms-5' onClick={logout}>
                            <NavLink className='navlink-login' to={"/"}>
                                Logout
                            </NavLink>
                        </div>
                }
            </Nav>
        </Navbar >
    )
}

export default LNavbar