import React, { useEffect, useState } from 'react'
import { BsCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../../css/CourseManageSideBar.css'
import { useLocation } from "react-router-dom"

const CourseManageSideBar = () => {
    const [courseId, setCourseId] = useState(0)
    const location = useLocation();

    useEffect(() => {
        setCourseId(location.pathname.split("/")[3])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='side-bar'>
            <ul className='list-unstyled'>
                <li className='side-nav-section'>
                    <div className='side-nav-section-header fw-bold'>
                        Kursunuzu planlayın
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/goals`}>
                                <span> <BsCircle />  </span>
                                <span>Hedef öğrenciler</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/course-structure`}>
                                <span> <BsCircle />  </span>
                                <span>Kurs yapısı</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/setup`}>
                                <span> <BsCircle />  </span>
                                <span>Kurulum ve test videosu</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className='side-nav-section'>
                    <div className='side-nav-section-header fw-bold'>
                        İçeriğinizi oluşturun
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/film`}>
                                <span> <BsCircle />  </span>
                                <span>Çekim ve düzenleme</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/curriculum`}>
                                <span> <BsCircle />  </span>
                                <span>Müfredat</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/captions`}>
                                <span> <BsCircle />  </span>
                                <span>Altyazı (isteğe bağlı)</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className='side-nav-section'>
                    <div className='side-nav-section-header fw-bold'>
                        Kursunuzu yayınlayın
                    </div>
                    <ul className='list-unstyled'>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/basics`}>
                                <span> <BsCircle />  </span>
                                <span>Kurs açılış sayfası</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/pricing`}>
                                <span> <BsCircle />  </span>
                                <span>Fiyatlandırma</span>
                            </Link>
                        </li>
                        <li className='side-nav-item'>
                            <Link to={`/instructor/course/${courseId}/manage/promotions`}>
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