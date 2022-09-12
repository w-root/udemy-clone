import React, { useEffect, useState } from 'react'
import '../css/Instructor.css'
import { MdOutlineOndemandVideo, MdOutlineMessage, MdInsights, MdHelpCenter } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap'
import { GetUserInstructorCourses } from '../Services/CourseService'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineSearch } from "react-icons/ai";
import InstructorPagesNavbarSidebar from '../Layouts/InstructorPagesNavbarSidebar'
import Cookies from 'js-cookie';

const Instructor = () => {
    const [courses, setCourses] = useState([])

    const GetUserCourses = async () => {
        try {
            const response = await GetUserInstructorCourses(Cookies.get("username"))
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetUserCourses()
    }, [])

    return (
        <div>
            <InstructorPagesNavbarSidebar></InstructorPagesNavbarSidebar>
            <div className='component-course-create'>
                {courses.length && <Container >
                    <h3 >
                        Kurslar
                    </h3>
                    <div className='course-search-and-create-course'>
                        <div>
                            <Form className='d-flex border-1 '  >
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
                                <div>
                                    <Form.Select style={{ border: "1px solid black" }} className="bg-white ms-4 rounded-0 p-2 shadow-none">
                                        <option>En yeni</option>
                                        <option>En eski</option>
                                        <option>A-Z</option>
                                        <option>Z-A</option>
                                        <option>Önce yayınlananlar</option>
                                        <option>Önce yayınlanmayanlar</option>
                                    </Form.Select>
                                </div>
                            </Form>
                        </div>
                        <Link to={"/instructor/course/create/"} style={{ width: "8rem" }} className='create-course-button '>
                            Yeni Kurs
                        </Link>
                    </div>
                </Container>}

                {courses.length > 0 ?
                    courses.map(c => {
                        return <div key={c.id}>
                            <Container className='user-instructor-courses'>
                                <div>
                                    <Image width={118} height={118} src={c.image || 'https://s.udemycdn.com/course/200_H/placeholder.jpg'} />
                                </div>
                                <div className='d-flex flex-column justify-content-between p-3'>
                                    <h6 className='fw-bold fs-6'>{c.title}</h6>
                                    <span style={{ fontSize: "12px" }}> Herkese Açık </span>
                                </div>
                                <div className='ms-auto me-5 my-auto'>
                                    <Link className='btn-update-course' to={`/instructor/course/${c.id}/manage/goals`} >Kursunuzu Düzenleyin</Link>
                                </div>
                            </Container>
                        </div>
                    }) :
                    <Container className='instructor-dashboard-resource'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                Kurs Oluşturma Adımına Geç
                            </div>
                            <div>
                                <Link to={"/instructor/course/create/"} className='create-course-button'>
                                    Kursunuzu Olşuturun

                                </Link>
                            </div>
                        </div>
                    </Container>
                }
            </div>
            <div >
                <Container >
                    <h2 className='fs-6' style={{ margin: "6.4rem auto", textAlign: "center" }}>Deneyimlerinize dayanarak, bu kaynakların yararlı olacağını düşünüyoruz.</h2>
                    <Row className='instructor-dashboard-resource'>
                        <Col className='text-center' md={6}>
                            <Image src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg" height={210} />
                        </Col>
                        <Col md={6}>
                            <h2 className='fs-4'>İlgi Çekici Bir Kurs Oluşturun
                            </h2>
                            <p>İster yıllardır, ister ilk defa eğitim veriyor olun, ilgi çekici bir kurs oluşturabilirsiniz. Nereden başlarsanız başlayın, bir üst seviyeye çıkmanıza yardımcı olacak kaynakları ve en iyi uygulamaları sizin için bir araya getirdik.

                            </p>
                            <a href='!#' className='instructor-page-link'>Şimdi Başla</a>
                        </Col>
                    </Row>
                    <div className='instructor-dashboard-resource-row' >
                        <Col md={6} className='instructor-dashboard-resource me-4'>
                            <Row>
                                <Col md={5} >
                                    <Image src="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg" height={210} />
                                </Col>
                                <Col md={7} >
                                    <h2 className='fs-4'>Bir Video İle Başlayın
                                    </h2>
                                    <p>
                                        Kaliteli video içeriğine sahip dersler, kursunuzu farklılaştırabilir. Temel bilgileri öğrenmek için kaynaklarımızı kullanın.
                                    </p>
                                    <a href='!#' className='instructor-page-link'>Şimdi Başla</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6} className='instructor-dashboard-resource'>
                            <Row>
                                <Col className='' md={5} >
                                    <Image src="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg" height={210} />
                                </Col>
                                <Col md={7} >
                                    <h2 className='fs-4'>
                                        Hedef Kitlenizi Oluşturun
                                    </h2>
                                    <p>
                                        Hedef kitlenizi oluşturarak kursunuzu başarıya hazırlayın.
                                    </p>
                                    <a href='!#' className='instructor-page-link'>Şimdi Başla</a>
                                </Col>
                            </Row>
                        </Col>
                    </div>

                    <Row className='instructor-dashboard-resource'>
                        <Col className='text-center' md={6}>
                            <Image src="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg" height={210} />
                        </Col>
                        <Col md={6}>
                            <h2 className='fs-4'>Yeni Eğitmen Yarışması'na Katılın!

                            </h2>
                            <p>
                                İlk kursunuzu daha hızlı yayınlamanıza yardımcı olması için tasarlanan özel ipuçlarından ve kaynaklardan yararlanın! İlk kursunu zamanında yayınlayan uygun eğitmenler ödül olarak özel bir bonus kazanır. Hemen başlayın!
                            </p>
                            <a href='!#' className='instructor-page-link'>Şimdi Başla</a>
                        </Col>
                    </Row>

                    <div className='my-5'>
                        <div className='my-5'>
                            <h3 className='fs-6 fw-normal text-center'>Sorularınız mı var? En popüler eğitmen kaynaklarımıza göz atın</h3>
                        </div>

                        <div className='d-flex p-5 text-center' >
                            <a href='!#' className='resource-unit'>
                                <div className='resource-unit-image'>
                                    <MdOutlineOndemandVideo size={48} color="black" />
                                </div>
                                <div className='resource-unit-title'> Test Videosu</div>
                                <div className='resource-unit-description'>
                                    Bize örnek bir video gönderin ve uzmanlardan geri bildirim alın.
                                </div>
                            </a>

                            <a href='!#' className='resource-unit'>
                                <div className='resource-unit-image'>
                                    <MdOutlineMessage size={48} color="black" />
                                </div>
                                <div className='resource-unit-title'> Eğitmen Topluluğu</div>
                                <div className='resource-unit-description'>
                                    Deneyimli eğitmenlerle bağlantı kurun. Sorular sorun, tartışmalar arayın ve daha fazlasını gerçekleştirin.
                                </div>
                            </a>

                            <a href='!#' className='resource-unit'>
                                <div className='resource-unit-image'>
                                    <GiTeacher size={48} color="black" />
                                </div>
                                <div className='resource-unit-title'> Teaching Center</div>
                                <div className='resource-unit-description'>
                                    Udemy'de eğitim vermeyle ilgili en iyi uygulamaları öğrenin.</div>
                            </a>

                            <a href='!#' className='resource-unit'>
                                <div className='resource-unit-image'>
                                    <MdInsights size={48} color="black" />
                                </div>
                                <div className='resource-unit-title'> Platform İçgörüleri</div>
                                <div className='resource-unit-description'>
                                    Platformda sunulan kursları ve talebi keşfederek doğru kurs konusunu seçtiğinizden emin olun.</div>
                            </a>

                            <a href='!#' className='resource-unit'>
                                <div className='resource-unit-image'>
                                    <MdHelpCenter size={48} color="black" />
                                </div>
                                <div className='resource-unit-title'> Yardım ve Destek</div>
                                <div className='resource-unit-description'>
                                    Yardım Merkezimizi ziyaret edin veya destek ekibimizle iletişim kurun.</div>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Instructor