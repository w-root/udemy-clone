import React, { useEffect } from 'react'
import { Image, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbTool } from 'react-icons/tb'
import logo from '../Images/logo-udemy-inverted.svg'
import '../css/Instructor.css'
import { MdOutlineOndemandVideo, MdOutlineMessage } from 'react-icons/md'
import { IoMdStats } from 'react-icons/io'
import { BiHelpCircle } from 'react-icons/bi'
import $ from 'jquery';

const InstructorPagesNavbarSidebar = () => {
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
                    <NavLink className='navlink-login' to={"/"}>
                        Logout
                    </NavLink>
                </Nav>
            </Navbar >
            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-body">
                    <ul className='instructor-help-list'>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
                                <Image src={logo} sizes={32} height={66} width={100} />
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
                                <MdOutlineOndemandVideo size={28} color='white' />
                                <span>Kurslar</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
                                <MdOutlineMessage size={28} color='white' />
                                <span>İletişim</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
                                <IoMdStats size={28} color='white' />
                                <span>Performans</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
                                <BiHelpCircle size={28} color='white' />
                                <span>Araçlar</span>
                            </a>
                        </li>
                        <li className='instructor-help-list-item'>
                            <a href='!#'>
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