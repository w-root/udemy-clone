import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/LearningContent.css'
import Form from 'react-bootstrap/Form';
import ReactStars from "react-rating-stars-component";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GetCurrentUserStudentCourses } from '../Services/CourseService';

const LearningContent = () => {
    const [courses, setCourses] = useState([])

    const GetUserCourses = async () => {
        try {
            const response = await GetCurrentUserStudentCourses()
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetUserCourses()
    }, [])

    return (
        <div className='my-courses-app'>
            <div className='bg-dark'>
                <Container className='my-courses-content-header'>
                    <div className='py-5 d-flex'>
                        <h3>
                            Öğrenim İçeriğim
                        </h3>
                    </div>
                </Container>
            </div>
            <Container className='my-courses-page-main-content'>
                <div>
                    <div className='my-3'>
                        <Form className='d-flex border-1 justify-content-between'  >
                            <div>
                                <Form.Select style={{ border: "1px solid black", fontSize: "14px" }}
                                    className="bg-white rounded-0 p-2 fw-bold shadow-none">
                                    <option>Yakın zamanda erişilen</option>
                                    <option>Yakın zamanda kayıt yapılan</option>
                                    <option>Başlık: A-Z</option>
                                    <option>Başlık: Z-A</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Select style={{ border: "1px solid black", fontSize: "14px" }}
                                    className="bg-white rounded-0 p-2 fw-bold shadow-none">
                                    <option>Kategoriler</option>
                                    <option>Tüm Kategoriler</option>
                                    <option>Favoriler</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Select style={{ border: "1px solid black", fontSize: "14px" }}
                                    className="bg-white rounded-0 p-2 fw-bold shadow-none">
                                    <option>Kurs izleme oranı</option>
                                    <option>Devam ediyor</option>
                                    <option>Henüz Başlamadı</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Select style={{ border: "1px solid black", fontSize: "14px" }}
                                    className="bg-white rounded-0 p-2 fw-bold shadow-none">
                                    <option>Eğitmen</option>
                                </Form.Select>
                            </div>
                            <div className='d-flex'  >
                                <Form.Control
                                    style={{ border: "1px solid black" }}
                                    className='bg-white rounded-0 p-2  shadow-none'
                                    type="search"
                                    placeholder="Kurslarınızı arayın"
                                    aria-label="Search"
                                    id='searchinput'
                                />
                                <Button className="rounded-0"
                                    variant="dark"> <AiOutlineSearch></AiOutlineSearch> </Button>
                            </div>
                        </Form>
                    </div>

                    <div className='d-flex flex-wrap'>
                        {courses && courses.map(c => {
                            return <Card key={c.id} className='me-2' style={{ width: '15rem' }}>
                                <div className='position-relative'>
                                    <Card.Img className='course-img-top' width={230} height={245} variant="top" src={c.image} />
                                    <button className='dropdown-trigger-button'>
                                        <HiOutlineDotsVertical />
                                    </button>
                                </div>
                                <Card.Body>
                                    <Card.Title className='course-title-url'>
                                        {c.title.length > 54
                                            ? c.title.substring(0, 54) + "..."
                                            : c.title}</Card.Title>
                                    <Card.Text className='course-instructor-name text-muted mb-1'>
                                        {c.instructor}
                                    </Card.Text>
                                    <ProgressBar style={{ height: "2px", width: "240px" }} className="border-0 rounded-0 me-3 " variant="dark" now={100} label={60} visuallyHidden />
                                    <div className='d-flex justify-content-between mt-2'>
                                        <p>%100 tamamlandı</p>
                                        <ReactStars size={16} edit={false} value={4.4} />
                                    </div>
                                </Card.Body>
                            </Card>
                        })}

                        {courses.length === 0 &&
                            <div style={{ marginTop: "7rem", marginBottom: "7rem" }} className='mx-auto  text-center'>
                                <div className='fw-bold fs-5'>
                                    204.000 kurstan daha fazlasına erişim elde ederek hemen <br /> öğrenmeye başlayın.
                                </div>
                                <div>
                                    Bir kursa kaydolduğunuzda kurs burada görünür. <a style={{ color: "#5624d0" }} href='/#'>Hemen göz atın.</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default LearningContent