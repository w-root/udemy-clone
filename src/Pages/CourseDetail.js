import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "../css/CourseDetail.css";
import { MdLanguage, MdOutlineOndemandVideo } from "react-icons/md";
import { BsPatchExclamation } from "react-icons/bs";
import { AiOutlineFile, AiOutlineLike, AiOutlineDislike, AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import { RiSmartphoneLine } from "react-icons/ri";
import { GiTargetPrize } from "react-icons/gi";
import ReactStars from "react-rating-stars-component";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CourseDetail = () => {
    return (
        <div className="course-detail-page">
            <div style={{ backgroundColor: "#1c1d1f" }}>
                <Container>
                    <div className="course-detail-inner-main-container">
                        <h1 className="fs-2 text-white fw-bold mt-3">
                            (40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)
                        </h1>
                        <div className="text-white fs-5 mb-3">
                            (40+ Saat) - Python ve Programlama Öğrenin. Django , Web
                            Geliştirme , Veri Analizi (Pandas , Numpy), Selenium
                        </div>
                        <div className="mb-2">
                            <div className="course-rating-point-students">
                                <span className="course-rating">4,2</span>
                                <ReactStars edit={false} value={2} />
                                <span className="course-point">(40.700 puan)</span>
                                <span className="course-students">129.882 öğrenci</span>
                            </div>
                        </div>
                        <div className="mb-2 text-white">
                            Oluşturan <span style={{
                                fontSize: "14px",
                                textDecoration: "underline",
                                color: "#CEC0FC",
                                marginLeft: "0.4rem"
                            }}>Mustafa Murat Coşkun</span>
                        </div>
                        <div className="text-white">
                            <BsPatchExclamation size={16} /> <span className="ms-1 me-3">Son güncelleme tarihi: 11/2020</span>
                            <MdLanguage size={16} /> <span className="mx-1">Türkçe</span>
                        </div>
                    </div>
                    <div className="course-sidebar">
                        <div className='course-introduction'>
                            <div className="course-preview-section h-100">
                                <Image className="w-100" src="https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg"></Image>
                            </div>
                        </div>
                        <div className="course-content-section">
                            <div className="course-add-cart-section">
                                <div> <span className='fs-2 fw-bold'>₺49,99</span> </div>
                                <div>
                                    <button className="btn-add-to-cart">Sepete Ekle</button>
                                    <button className="btn-register-link">Hemen Kaydolun</button>
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
                                <Row>
                                    <Col>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            Python'ın ve Programlamanın Temellerini iyi bir şekilde öğrenmiş olacaksınız.
                                        </li>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            Python ile Örümcek Türü yazılımlar geliştirebilecek hale geleceksiniz.
                                        </li>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            Sqlite Veritabanı ile temel veritabanı işlemlerini öğrenerek, programlarınızı veritabanıyla entegre bir biçimde yazabileceksiniz.
                                        </li>

                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            Kurs boyunca oldukça fazla program yazacağımız için, kurstan sonra algoritma yeteneğinizin bir hayli geliştiğini farkedeceksiniz.
                                        </li>
                                    </Col>
                                    <Col>
                                        <li className="what-you-will-learn-list-item" >
                                            <span><AiOutlineCheck /></span>
                                            Python ile Nesne Tabanlı Programlama felsefesini öğrenerek , daha sonra Java ve C++ gibi dilleri öğrenmeye çalıştığınızda oldukça rahat edeceksiniz.
                                        </li>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            PyQt5 ile Pythonda arayüz geliştirme temellerini alarak, ileri düzey arayüzler ve uygulamalar geliştirebileceksiniz.
                                        </li>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            Pythonda modül kullanımını ve ileri düzey modülleri öğrenerek , işletim sistemi, internet sayfalarından veri alma, fotoğraf işlemleri gibi alanlarda programlar yazabileceksiniz.
                                        </li>
                                        <li className="what-you-will-learn-list-item">
                                            <span><AiOutlineCheck /></span>
                                            En önemlisi ise, artık CV'nize Python'ı ileri seviyede biliyorum yazabileceksiniz.
                                        </li>
                                    </Col>
                                </Row>
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
                            <h2>Web Geliştirme Kursumuzda Ne &Ouml;ğreniyoruz?</h2>
                            <p>Kursumuz&nbsp;<strong>sıfırdan ileri seviyeye kadar</strong>&nbsp;bir&nbsp;<strong>web geliştiricinin bilmesi gereken t&uuml;m konuların</strong>&nbsp;yer aldığı,&nbsp;<strong>piyasadaki en kapsamlı ve en g&uuml;ncel kurs</strong>&nbsp;olduğunu bilmenizi isterim.</p>
                            <p>Peki neden Web Geliştirici Kursuna<strong>&nbsp;İhtiya&ccedil; Duyalım ;</strong></p>
                            <ul>
                                <li>
                                    <p><strong>Ciddi iş potansiyeline sahip olan bu alanda kendinizi geliştirip iyi bir kariyer sahibi olabilirsiniz.</strong></p>
                                </li>
                                <li>
                                    <p><strong>Freelancer olarak &ccedil;alışıp kendi&nbsp;m&uuml;şterilerinize hizmet sunabilirsiniz.</strong></p>
                                </li>
                                <li>
                                    <p><strong>Kurumsal bir firmada iyi bir &uuml;cret karşılığında &ccedil;alışabilirsiniz.</strong></p>
                                </li>
                                <li>
                                    <p><strong>Hayal ettiğiniz projeleri ger&ccedil;ekleştirme fırsatına sahip olabilirsiniz.</strong></p>
                                </li>
                            </ul>

                            <p><strong>Kurs programı</strong>&nbsp;web geliştirici alanıyla uğraşmaya başlamış ancak&nbsp;<strong>neyi ne zaman &ouml;ğrenmesi gerektiğini bilmeyen</strong>&nbsp;ya da&nbsp;<strong>bu alanla ilgili hi&ccedil; bir fikri olmayan kişileri</strong>&nbsp;g&ouml;z &ouml;n&uuml;ne alarak&nbsp;<strong>sıfırdan&nbsp;&ouml;zenle&nbsp;hazırlanmıştır.</strong></p>

                            <p><strong>Web geliştirici</strong>&nbsp;olmak aslına bakarsak&nbsp;<strong>zor değil</strong>&nbsp;ancak kaynak sıkıntısı ger&ccedil;ekten &ccedil;oğu zaman sıkıntı oluyor ve aslında&nbsp;<strong>kolay olan</strong>&nbsp;bu s&uuml;reci ger&ccedil;ekten&nbsp;<strong>&ccedil;ok zormuş gibi&nbsp;</strong>g&ouml;steriyor.</p>

                            <p><strong>Kaynak sıkıntısı;</strong>&nbsp;aslında neyi &ouml;ğrenmemiz gerektiği , &ouml;ğrenme s&uuml;recinde<strong>&nbsp;birbirinin eşdeğeri konular ya da yazılım ara&ccedil;larının neler olduğu&nbsp;</strong>,&nbsp;<strong>en son &ccedil;ıkan teknolojiler neler gibi konuların</strong>&nbsp;bilinmediği &uuml;zerinedir. Bu gibi sıkıntılar &ouml;ğrenme s&uuml;recini uzatıp &ccedil;oğu zamanda bu işten vazge&ccedil;ilmesine neden olmaktadır.</p>

                            <p>Bize sınırsız bilgi sunan&nbsp;İnternet&nbsp;ile kaynağa ulaşma s&uuml;recimiz &ccedil;ok &ccedil;abuk ve kolay olmaktadır ancak bu başta g&uuml;zel g&ouml;z&uuml;kse de binlerce kaynak i&ccedil;inden neyi &ouml;ğrenmemiz gerektiğini se&ccedil;mek ger&ccedil;ekten zor oluyor.<strong>Dolayısıyla &ccedil;oğu zaman birbirine eşdeğer &ccedil;oğu yazılım t&uuml;rleri ya da ara&ccedil;larıyla&nbsp;boşu boşuna&nbsp;aylarca uğraşıyoruz.</strong></p>

                            <h2>&Uuml;cretsiz Hosting Hizmeti</h2>

                            <p>Web geliştirici&nbsp;olmak i&ccedil;in gereken konuları &ouml;ğrendik ancak<strong>&nbsp;sitemizi nasıl yayınlayacağız ?</strong>&nbsp;</p>

                            <ul>
                                <li>
                                    <p><strong>Satın almanız gereken hosting paketi nasıl olmalı ?&nbsp;</strong></p>
                                </li>
                                <li>
                                    <p><strong>Hangi &ouml;zelliklere sahip olmalı ?&nbsp;</strong></p>
                                </li>
                                <li>
                                    <p><strong>Dosyalarımı nasıl internet ortamında yayınlarım ?&nbsp;</strong></p>
                                </li>
                            </ul>

                            <p>Bu nedenden dolayı&nbsp;<strong>kursumuza kayıt olan her kişi</strong>&nbsp;geliştirdiği web sitelerini yayınlamak i&ccedil;in gereken&nbsp;<strong>Web Hosting</strong>&nbsp;paketine 1 yıl boyunca&nbsp;<strong>&uuml;cretsiz&nbsp;</strong>olarak sahip olacaktır. &Uuml;stelik sitenizi nasıl yayınlayacağınız&nbsp;adım adım anlatılmaktadır, bu işlem ger&ccedil;ekten &ccedil;ok basit.</p>

                            <p><strong>Komple Uygulamalı Web Geliştirme</strong>&nbsp;kursumuza katılarak&nbsp;<strong>1 yıl boyunca kullanabilecek olduğunuz&nbsp;asp.net hosting sahibi olabilirsiniz</strong>.Kursu incelemek i&ccedil;in&nbsp;<a href="https://www.udemy.com/komple-web-developer-kursu/?referralCode=5D4498D410A2750305C1" target="_blank">tıklayınız.</a></p>

                            <h2>Web Geliştirme Kursu Sonunda Neler Yapabilirim?</h2>

                            <p><strong>Kurs Sonunda ;</strong></p>

                            <ul>
                                <li>
                                    <p><strong>Her t&uuml;rl&uuml; web tasarım sitelerini</strong></p>
                                </li>
                                <li>
                                    <p><strong>Her sekt&ouml;re hitap eden statik ve dinamik&nbsp;tanıtım sitelerini</strong></p>
                                </li>
                                <li>
                                    <p><strong>Blog tarzındaki dinamik i&ccedil;erik &uuml;reten web sitelerini</strong></p>
                                </li>
                                <li>
                                    <p><strong>Sitelerinizin&nbsp;y&ouml;netim panelini</strong></p>
                                </li>
                                <li>
                                    <p><strong>En temel kuralları i&ccedil;eren bir E-ticaret sitesini</strong></p>
                                </li>
                            </ul>
                            <p>yapabiliyor olacaksınız.</p>
                            <p><strong>Zaman kaybetmeden&nbsp;</strong>komple&nbsp;web geliştirme&nbsp;kursuna dahil olup fullstack bir web geliştiricinin bilmesi gereken&nbsp;<strong>en g&uuml;ncel ve en temel</strong>&nbsp;konuları planlı bir şekilde &ouml;ğrenin...!&nbsp;Kursu incelemek i&ccedil;in&nbsp;<a href="https://www.udemy.com/komple-web-developer-kursu/?referralCode=5D4498D410A2750305C1" target="_blank">tıklayınız.</a></p>
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
                                    <a href="#" className="text-dark fs-6">Bildir</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CourseDetail;
