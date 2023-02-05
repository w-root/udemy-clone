import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/UserDetail.css'
import { AiOutlineDisconnect, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GetUserProfileInformation } from '../Services/UserService'
import { useParams } from "react-router-dom";
import parse from "html-react-parser"
import { GetUserInstructorCourses } from '../Services/CourseService'
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
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetInformations()
        GetUserCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                <Image height={200} width={200} src={`https://qirynyq.pythonanywhere.com` + profile.photo} roundedCircle />
                            </div>

                            <div className='personal-social-links'>
                                <div>
                                    <a href={profile.website} className='personal-link personal-link-website'>
                                        <AiOutlineDisconnect /> <span>Web sitesi</span>
                                    </a>
                                    <a href={`https://twitter.com/${profile.twitter}`} className='personal-link personal-link-website'>
                                        <BsTwitter /> <span>Twitter</span>
                                    </a>
                                    <a href={`https://www.facebook.com/${profile.facebook}`} className='personal-link personal-link-website'>
                                        <MdFacebook /> <span>Facebook</span>
                                    </a>
                                    <a href={`https://www.linkedin.com/in/${profile.linkedin}`} className='personal-link personal-link-website'>
                                        <AiFillLinkedin /> <span>Linkedin</span>
                                    </a>
                                    <a href={`https://www.youtube.com/${profile.youtube}`} className='personal-link personal-link-website'>
                                        <AiFillYoutube /> <span>Youtube</span>
                                    </a>
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