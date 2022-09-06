import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
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

const UserDetail = () => {
    const { username } = useParams()
    const [profile, setProfile] = useState()

    const GetInformations = async () => {
        try {
            const response = await GetUserProfileInformation(username)
            console.log(response.data)
            setProfile(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetInformations()
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

                <div>


                    <h3>
                        Kurslarım
                    </h3>

                    <div>

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default UserDetail