import React, { useEffect } from 'react'
import '../css/Instructor.css'
import { MdOutlineOndemandVideo, MdOutlineMessage, MdInsights, MdHelpCenter } from 'react-icons/md'
import { IoMdStats } from 'react-icons/io'
import { BiHelpCircle } from 'react-icons/bi'
import { TbTool } from 'react-icons/tb'
import { GiTeacher } from 'react-icons/gi'
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../Images/logo-udemy-inverted.svg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Instructor = () => {
    useEffect(() => {
        $(".offcanvas").unbind().mouseenter(function () {
            $(this).animate({ "margin-left": '250' });
            console.log("asd")
        }).mouseleave(function () {
            $(this).animate({ "margin-left": '0' });
            console.log("2ww")
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

            <div className='component-course-create'>
                <Container className='instructor-dashboard-resource'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            Kurs Oluşturma Adımına Geç
                        </div>
                        <div>
                            <Link to={"/instructor/course/create/goals"} className='create-course-button'>
                                Kursunuzu Olşuturun

                            </Link>
                        </div>
                    </div>
                </Container>
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
                            <a href='!#'>Şimdi Başla</a>
                        </Col>
                    </Row>

                    <Row className='justify-content-between' >
                        <Col md={6} className='instructor-dashboard-resource'>
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
                                    <a href='!#'>Şimdi Başla</a>
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
                                    <a href='!#'>Şimdi Başla</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

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
                            <a href='!#'>Şimdi Başla</a>
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