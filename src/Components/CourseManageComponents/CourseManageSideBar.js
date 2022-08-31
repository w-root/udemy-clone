import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../../css/CourseManageSideBar.css'

const CourseManageSideBar = () => {
    return (
        <div className='side-bar'>
            <ul className='list-unstyled'>
                <li className='side-nav-section'>
                    <div className='side-nav-section-header'>
                        Kursunuzu planlayın
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/goals"}>
                                <span> <BsCircle />  </span>
                                <span>Hedef öğrenciler</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/course-structure"}>
                                <span> <BsCircle />  </span>
                                <span>Kurs yapısı</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/setup"}>
                                <span> <BsCircle />  </span>
                                <span>Kurulum ve test videosu</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className='side-nav-section'>
                    <div className='side-nav-section-header'>
                        İçeriğinizi oluşturun
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/film"}>
                                <span> <BsCircle />  </span>
                                <span>Çekim ve düzenleme</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/curriculum"}>
                                <span> <BsCircle />  </span>
                                <span>Müfredat</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/captions"}>
                                <span> <BsCircle />  </span>
                                <span>Altyazı (isteğe bağlı)</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className='side-nav-section'>
                    <div className='side-nav-section-header'>
                        Kursunuzu yayınlayın
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/basics"}>
                                <span> <BsCircle />  </span>
                                <span>Kurs açılış sayfası</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/pricing"}>
                                <span> <BsCircle />  </span>
                                <span>Fiyatlandırma</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={"/instructor/course/create/promotions"}>
                                <span> <BsCircle />  </span>
                                <span>Promosyonlar</span>
                            </Link>
                        </li>

                    </ul>
                </li>
            </ul>

        </div>

    )
}

export default CourseManageSideBar