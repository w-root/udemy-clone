import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../css/Home.css'
import logoub from '../Images/logo-ub.svg'
import Courses from '../Components/Courses';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div className='main-content'>
            <Container>
                <div className="component-jumbotron mb-5">
                    <div className="component-jumbotron-card">
                        <h2 className="component-jumbotron-card-title">Udemy'de yeni misiniz? Çok şanslısınız.</h2>
                        <p className="fs-6">Kurslar şimdi yalnızca ₺69,99'den başlayan fiyatlarla! Sona ermeden önce yeni öğrencilere özel fırsattan yararlanın.
                        </p>
                    </div>
                </div>
            </Container >

            <Courses> </Courses>
            <Categories></Categories>

            <Container>
                <div className='component-presentation'>
                    <Row >
                        <Col>
                            <div className='card-image text-end'>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                        <Col  >
                            <div className='non-student-cta'>
                                <h2 className='non-student-cta-heading'>Eğitmen olun</h2>
                                <p className='non-student-cta-text'>
                                    Dünyanın dört bir yanından eğitmenler Udemy'de milyonlarca
                                    öğrenciye eğitim veriyor. Sevdiğiniz şeyleri öğretmeniz için gereken araçları ve yetkinlikleri sağlıyoruz.
                                </p>
                                <button className='btn-design-black link'>
                                    Hemen eğitim vermeye başlayın
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className='non-student-cta ms-auto' >
                                <Image width={282} height={48} src={logoub} className='non-student-cta-image' />
                                <p className='non-student-cta-text'>
                                    Ekibiniz için popüler 17.000+ Udemy kursuna sınırsız erişim elde edin.
                                    İşletme, teknoloji, tasarım ve daha birçok konuda eğitim alın ve yetkinliklerinizi geliştirin.
                                </p>
                                <button className='btn-design-black link'>
                                    Udemy business ürününü edinin
                                </button>
                            </div>
                        </Col>
                        <Col>
                            <div className='card-image '>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <div className='card-image text-end'>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                        <Col >
                            <div className='non-student-cta'>
                                <h2 className='non-student-cta-heading'>Eğitimle hayatınızı dönüştürün</h2>
                                <p className='non-student-cta-text'>
                                    Dünya genelindeki öğrenciler yeni kariyerlere başlıyor,
                                    alanlarında kendilerini geliştiriyor ve hayatlarını zenginleştiriyor.
                                </p>
                                <button className='btn-design-black link'>
                                    Nasıl olduğunu öğrenin
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}
export default Home