import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/UserDetail.css'
import { AiOutlineDisconnect, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import { GetUserProfileInformation } from '../Services/UserService'
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"
import { GetUserInstructorCourses } from '../Services/CourseService'
import Course from '../Components/Course';
import ReactStars from "react-rating-stars-component";
const UserDetail = () => {
    const { username } = useParams()
    const [profile, setProfile] = useState()
    const [courses, setCourses] = useState([])

    const GetInformations = async () => {
        try {
            const response = await GetUserProfileInformation(username)
            setProfile(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const GetUserCourses = async () => {
        try {
            const response = await GetUserInstructorCourses(username)
            console.log(response.data)
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetInformations()
        GetUserCourses()
    }, [])

    return (
        <div>
            <Container className='user-detail-page-container'>
                {profile && <Row>
                    <Col md={8}>
                        <div className='instructor-name-and-title-content mb-4'>
                            <div>
                                EĞİTMEN
                            </div>

                            <h1>
                                {`${profile.firstname} ${profile.lastname}`}
                            </h1>

                            <div>
                                {profile.title}
                            </div>
                        </div>

                        <div className='instructor-number-of-students-and-comments mb-5 d-flex'>
                            <div>
                                <div className='heading heading-number-of-students'>
                                    Toplam öğrenci sayısı

                                </div>
                                <div className='count count-students'>
                                    38.539

                                </div>
                            </div>

                            <div>
                                <div className='heading heading-comments'>
                                    Yorumlar
                                </div>
                                <div className='count count-comments'>
                                    6.217
                                </div>
                            </div>

                        </div>

                        <div className='about-me mb-5'>

                            <h3>
                                Hakkımda
                            </h3>
                            <div>
                                {profile.bio && parse(profile.bio)}
                            </div>

                        </div>

                    </Col>
                    <Col md={3}>
                        <div className='personal-image-and-social-links ms-5'>
                            <div className='personal-image'>
                                <Image src={`http://127.0.0.1:8000/` + profile.photo} roundedCircle />
                            </div>

                            <div className='personal-social-links'>
                                <div>
                                    <Link to={`${profile.website}`} className='personal-link personal-link-website'>
                                        <AiOutlineDisconnect /> <span>Web sitesi</span>
                                    </Link>
                                    <Link to={`https://twitter.com/${profile.twitter}`} className='personal-link personal-link-website'>
                                        <BsTwitter /> <span>Twitter</span>
                                    </Link>
                                    <Link to={`https://www.facebook.com/${profile.facebook}`} className='personal-link personal-link-website'>
                                        <MdFacebook /> <span>Facebook</span>
                                    </Link>
                                    <Link to={`https://www.linkedin.com/feed/${profile.linkedin}`} className='personal-link personal-link-website'>
                                        <AiFillLinkedin /> <span>Linkedin</span>
                                    </Link>
                                    <Link to={`https://www.youtube.com/${profile.youtube}`} className='personal-link personal-link-website'>
                                        <AiFillYoutube /> <span>Youtube</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>}

                <div className='my-courses'>
                    <h3>
                        Kurslarım
                    </h3>
                    <Row>
                        <Col md={9} >
                            <div className='instructor-courses'>
                                {courses &&
                                    courses.map(course => {
                                        return <div key={course.id} className='instructor-courses-card-container'>
                                            <Card>
                                                <Card.Img width={240} height={200} id="card-image" src={course.image} />
                                                <Card.Body>
                                                    <Card.Title className="fs-6 fw-bold">
                                                        <Link className="course-link" to={course.slug}>

                                                            {course.title.length > 54
                                                                ? course.title.substring(0, 54) + "..."
                                                                : course.title}
                                                        </Link>
                                                    </Card.Title>
                                                    <Card.Text id="instructor" className="text-muted mb-0">
                                                        {course.instructor}
                                                    </Card.Text>
                                                    <div className="d-flex">
                                                        <span className="course-rating">{course.rating}</span>
                                                        <ReactStars edit={false} value={course.rating} />
                                                        <span className="text-muted ms-2">({course.students.length})</span>
                                                    </div>
                                                    <div style={{ fontSize: "12px" }} className='text-muted'>
                                                        Toplam 98,5 saat 696 ders Tüm Düzeyler
                                                    </div>
                                                    <Card.Text className="fs-6 fw-bold">₺{course.price}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default UserDetail