import React, { useEffect, useState } from 'react'
import logo from '../Images/logo-udemy.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import '../css/Navi.css';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import { UserLogout } from '../Services/UserService';
import { GlobalContext, useContext } from '../Context/MainContext';

const LNavbar = () => {
    const { profile } = useContext(GlobalContext)
    const logout = async () => {
        try {
            const response = await UserLogout()
            Cookies.remove("sessionid")
            Cookies.remove("username")
            window.location.href = "/join/login"
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
                                <NavLink className='nav-link' to={"/my-courses/learning"}>
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
                        <div className='ms-5' >
                            <div className="btn-group dropstart">
                                <button className="user-avatar dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {profile && <Image src={`http://127.0.0.1:8000/` + profile.photo} className="rounded-circle shadow-4"
                                        width={48} height={48} alt="Avatar" />
                                    }
                                </button>
                                <ul className="dropdown-menu" >
                                    <li>
                                        <div className='d-flex p-2'>
                                            <div>
                                                {profile && <Image src={`http://127.0.0.1:8000/` + profile.photo} className="rounded-circle shadow-4"
                                                    height={48} width={48} alt="Avatar" />
                                                }
                                            </div>
                                            <div className='ms-2'>
                                                <div>
                                                    <Link className="text-decoration-none text-dark" to={"/instructor/profile/privacy"}>{Cookies.get("username")}</Link>
                                                </div>
                                                <div>
                                                    your-mail-adress
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    <li><Link className="dropdown-item" to={"/my-courses/learning"}>Öğrenim İçeriğim</Link></li>
                                    <li><Link className="dropdown-item" to={"/instructor/courses"}>Eğitmen kontrol paneli</Link></li>
                                    <hr />
                                    <li><Link className="dropdown-item" to={"/instructor/profile/privacy"}>Profili düzenle</Link></li>
                                    <hr />
                                    <li><Link className="dropdown-item" to={"/"}>Yardım</Link></li>
                                    <li><button className="dropdown-item" onClick={logout}>Oturumu Kapat</button></li>
                                </ul>
                            </div>
                        </div>
                }
            </Nav>
        </Navbar >
    )
}

export default LNavbar