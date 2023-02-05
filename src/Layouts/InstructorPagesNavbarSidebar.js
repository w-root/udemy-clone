import React, { useEffect } from 'react'
import { Image, } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbTool } from 'react-icons/tb'
import logo from '../Images/logo-udemy-inverted.svg'
import '../css/Instructor.css'
import { MdOutlineOndemandVideo, MdOutlineMessage } from 'react-icons/md'
import { IoMdStats } from 'react-icons/io'
import { BiHelpCircle } from 'react-icons/bi'
import $ from 'jquery';
import { GlobalContext, useContext } from '../Context/MainContext';

const InstructorPagesNavbarSidebar = () => {
    const { profile } = useContext(GlobalContext)

    useEffect(() => {
        $(".offcanvas").unbind().mouseenter(function () {
            $(this).animate({ "margin-left": '250' });
        }).mouseleave(function () {
            $(this).animate({ "margin-left": '0' });
        })
    }, [])
    return (
        <div>
            <Navbar bg="white" className='p-3  bg-body rounded' expand="lg" >

                <Nav id='navbar-buttons' className='ms-auto'>
                    <NavLink className='nav-link me-4' to={"/"}>
                        Öğrenci
                    </NavLink>

                    <div className="btn-group dropstart">
                        <button className="user-avatar dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {profile && <Image src={"https://qirynyq.pythonanywhere.com" + profile.photo} height={48} width={48} roundedCircle alt="Avatar" />}

                        </button>
                        <ul className="dropdown-menu" >
                            <li>
                                <div className='d-flex p-2'>
                                    <div>
                                        {profile && <Image src={"https://qirynyq.pythonanywhere.com" + profile.photo} height={48} width={48} roundedCircle alt="Avatar" />}

                                    </div>
                                    <div className='ms-2'>
                                        <div>
                                            {profile && profile.user}
                                        </div>
                                        <div>
                                            your-email-adress
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

                        </ul>
                    </div>
                </Nav>
            </Navbar >
            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-body">
                    <ul className='instructor-help-list'>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <Image src={logo} sizes={32} height={66} width={100} />
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <MdOutlineOndemandVideo size={28} color='white' />
                                <span>Kurslar</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <MdOutlineMessage size={28} color='white' />
                                <span>İletişim</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <IoMdStats size={28} color='white' />
                                <span>Performans</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <BiHelpCircle size={28} color='white' />
                                <span>Araçlar</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='/instructor/courses#'>
                                <TbTool size={28} color='white' />
                                <span>Kaynaklar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InstructorPagesNavbarSidebar