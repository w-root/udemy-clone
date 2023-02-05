import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "../css/CourseDetail.css";
import { MdLanguage, MdOutlineOndemandVideo } from "react-icons/md";
import { BsPatchExclamation } from "react-icons/bs";
import { AiOutlineFile, AiOutlineLike, AiOutlineDislike, AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import { RiFolderDownloadLine, RiSmartphoneLine } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import { GiTargetPrize } from "react-icons/gi";
import ReactStars from "react-rating-stars-component";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FetchCourseDetail } from "../Services/CourseService";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser"
import { GlobalContext, useContext } from '../Context/MainContext'
import Cookies from "js-cookie";

const CourseDetail = () => {
    const { slug } = useParams()
    const [course, setCourse] = useState(null)
    const cart = JSON.parse(localStorage.getItem("cart"))
    const { addToCart } = useContext(GlobalContext)

    const GetCourseDetail = async () => {
        try {
            const response = await FetchCourseDetail(slug)
            await setCourse(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetCourseDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {course && <div className="course-detail-page">
                <div style={{ backgroundColor: "#1c1d1f" }}>
                    <Container>
                        <div className="course-detail-inner-main-container">
                            <h1 className="fs-2 text-white fw-bold mt-3">
                                {course.title}
                            </h1>
                            <div className="text-white fs-5 mb-3">
                                {course.subtitle}
                            </div>
                            <div className="mb-2">
                                <div className="course-rating-point-students">
                                    <span className="course-rating">{course.rating}</span>
                                    <ReactStars edit={false} value={course.rating} />
                                    <span className="course-point">(40.700 puan)</span>
                                    <span className="course-students">{course.students.length} öğrenci</span>
                                </div>
                            </div>
                            <div className="mb-2 text-white">
                                Oluşturan <span style={{
                                    fontSize: "14px",
                                    marginLeft: "0.4rem"
                                }}>
                                    <Link style={{ color: "#CEC0FC", }} to={`/user/${course.instructor}`}>
                                        {course.instructor}</Link>
                                </span>
                            </div>
                            <div className="text-white">
                                <BsPatchExclamation size={16} /> <span className="ms-1 me-3">Son güncelleme tarihi: {course.updatedDate}</span>
                                <MdLanguage size={16} /> <span className="mx-1">Türkçe</span>
                            </div>
                        </div>
                        <div className="course-sidebar">
                            <div className='course-introduction'>
                                <div className="course-preview-section h-100">
                                    <Image width={240} height={200} className="w-100" src={course.image}></Image>
                                </div>
                            </div>
                            <div className="course-content-section">
                                <div className="course-add-cart-section">
                                    <div> <span className='fs-2 fw-bold'>₺{course.price}</span> </div>
                                    <div>
                                        {course.students.find(i => i === Cookies.get("username")) ?
                                            <button className="btn-add-to-cart">
                                                Kursa git
                                            </button> :
                                            <div>
                                                {Cookies.get("sessionid") ?
                                                    <button onClick={() => addToCart(cart, course)} className="btn-add-to-cart">
                                                        Sepete Ekle
                                                    </button> :
                                                    <button className="btn-add-to-cart">
                                                        Giriş yapmalısınız
                                                    </button>
                                                }
                                                <button className="btn-register-course-link">
                                                    <Link onClick={() => addToCart(cart, course)} className="text-dark text-decoration-none" to={"/cart/checkout"}>
                                                        Hemen Kaydolun
                                                    </Link>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="mb-4 text-center" style={{ fontSize: "12px" }}>30 Gün İçinde Para İade Garantisi</div>
                                <div>
                                    <h6 className="fw-bold">Bu kursun içeriği:</h6>
                                    <ul className="course-content-list list-unstyled">
                                        <li className="course-content-list-item">
                                            <MdOutlineOndemandVideo />
                                            <span>42 saat uzunluğunda hazır video içeriği</span>
                                        </li>
                                        <li className="course-content-list-item">
                                            <AiOutlineFile />
                                            <span>79 makale</span>
                                        </li>
                                        <li className="course-content-list-item">
                                            <RiFolderDownloadLine />
                                            <span>68 indirilebilir kaynak</span>
                                        </li>
                                        <li className="course-content-list-item">
                                            <CgInfinity />
                                            <span>Ömür boyu tam erişim</span>
                                        </li>
                                        <li className="course-content-list-item">
                                            <RiSmartphoneLine />
                                            <span>Mobil ve TV'den erişim</span>
                                        </li>
                                        <li className="course-content-list-item">
                                            <GiTargetPrize />
                                            <span>Bitirme sertifikası</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="course-content-buttons">
                                    <button className="course-content-button">Paylaş</button>
                                    <button className="course-content-button mx-3" >Bu kursu hediye et</button>
                                    <button className="course-content-button">Kupon Uygula</button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="course-detail-section">
                        <div className="component-what-you-will-learn" >
                            <div>
                                <h2 className="fs-4 fw-bold">
                                    Öğrenecekleriniz
                                </h2>
                            </div>
                            <div>
                                <ul className="what-you-will-learn-list">
                                    {course.whatYouWillLearn != null ?
                                        course.whatYouWillLearn.data.map(i => {
                                            return <li key={i} className="what-you-will-learn-list-item" >
                                                <span><AiOutlineCheck /></span>
                                                {i}
                                            </li>
                                        }) : null}

                                </ul>
                            </div>
                        </div>
                        <div className="component-course-content">
                            <h2 className="fs-4 fw-bold mb-3" >Kurs içeriği</h2>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Giriş</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Windows Program Kurulumları</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Python'da Temel Veri Tipleri</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Terminale Çıktı Göndermek</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="component-course-description my-5">
                            <h3 className="fs-4 fw-bold mb-3">Açıklama</h3>
                            <div className="course-description fs-6">
                                {course.description && parse(course.description)}
                            </div>
                        </div>

                        <div className="component-student-feedback mb-5">
                            <h2 className="fs-4 fw-bold">Öğrenci Geri Bildirimi</h2>
                            <Row md={12} className="course-students-rating-and-stars">
                                <Col md={2} className="text-center">
                                    <h1 style={{ fontSize: "64px", fontWeight: "bold", color: "#b4690e" }}>4.5</h1>
                                    <ReactStars size={22} edit={false} value={4.4} />
                                    <span style={{ fontWeight: "bold", color: "#b4690e" }} >Kurs Puanı</span>
                                </Col>
                                <Col md={10}>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar style={{ height: "8px", width: "75%" }} className="border-0 rounded-0 me-3 " variant="dark" now={57} label={60} visuallyHidden />
                                        <ReactStars size={20} edit={false} value={5} />
                                        <span className="course-stars-percent-value"> %57 </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar style={{ height: "8px", width: "75%" }} className="border-0 rounded-0 me-3 " variant="dark" now={32} label={60} visuallyHidden />
                                        <ReactStars size={20} edit={false} value={4} />
                                        <span className="course-stars-percent-value"> %32 </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar style={{ height: "8px", width: "75%" }} className="border-0 rounded-0 me-3 " variant="dark" now={9} label={60} visuallyHidden />
                                        <ReactStars size={20} edit={false} value={3} />
                                        <span className="course-stars-percent-value"> %9 </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar style={{ height: "8px", width: "75%" }} className="border-0 rounded-0 me-3 " variant="dark" now={1} label={60} visuallyHidden />
                                        <ReactStars size={20} edit={false} value={2} />
                                        <span className="course-stars-percent-value"> %1 </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar style={{ height: "8px", width: "75%" }} className="border-0 rounded-0 me-3 " variant="dark" now={1} label={60} visuallyHidden />
                                        <ReactStars size={20} edit={false} value={1} />
                                        <span className="course-stars-percent-value"> %1 </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="component-course-comments">
                            <h2 className="fs-3 fw-bold">
                                Yorumlar
                            </h2>
                            <Form className='d-flex border-1 my-4'  >
                                <div className='d-flex'  >
                                    <Form.Control
                                        style={{ width: "456px" }}
                                        className='bg-white rounded-0 p-2  shadow-none'
                                        type="search"
                                        placeholder="Yorumlarda ara"
                                        aria-label="Search"
                                        id='searchinput'
                                    />
                                    <Button className="rounded-0"
                                        variant="dark"> <AiOutlineSearch></AiOutlineSearch> </Button>
                                </div>
                                <div>
                                    <Form.Select style={{ width: "180px" }} className="bg-white ms-4 rounded-0 p-2 shadow-none">
                                        <option>Tüm Puanlar</option>
                                        <option>5 Yıldız</option>
                                        <option>4 Yıldız</option>
                                        <option>3 Yıldız</option>
                                        <option>2 Yıldız</option>
                                        <option>1 Yıldız</option>
                                    </Form.Select>
                                </div>
                            </Form>
                            <div className="d-flex mt-3">
                                <div className="user-avatar">
                                    <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4"
                                        width={48} alt="Avatar" />
                                </div>
                                <div className="ms-4" >
                                    <div className="username-and-comment">
                                        <div className="username">
                                            <h4 className="fs-6">
                                                Test User
                                            </h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <ReactStars size={22} edit={false} value={4.4} />
                                            <span className="ms-2">bir ay önce</span>
                                        </div>
                                        <div className="mt-1">
                                            Türkçe kaynak olarak çok iyi bir anlatıma sahip. Teşekkür ederim :)
                                        </div>
                                    </div>
                                    <div className="feedback-buttons">
                                        <div className="mb-3" > <span style={{ fontSize: "12px" }}>Bu yorum faydalı mıydı?</span></div>
                                        <button className="btn-feedback">
                                            <AiOutlineLike size={20} />
                                        </button>
                                        <button className="btn-feedback">
                                            <AiOutlineDislike size={20} />
                                        </button>
                                        <a href="/#" className="text-dark fs-6">Bildir</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </Container>
            </div>}
        </div>
    );
};

export default CourseDetail;
