import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Categories = () => {
    return (
        <div>
            <Container>
                <div className='component-popular-categories'>
                    <h4 className='fs-4 fw-bold mt-4 mb-3'>
                        En Popüler Kategoriler
                    </h4>
                    <section>
                        <Col>
                            <Row md={4}>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Tasarım
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Yazılım Geliştirme
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Pazarlama
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        BT ve Yazılım
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Kişisel Gelişim
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        İşletme
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Fotoğrafçılık
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Müzik
                                    </span>
                                </Card>
                            </Row>
                        </Col>
                    </section>
                </div>
            </Container>

            <div className='component-featured-topics-by-category bg-light mb-5'>
                <Container className='p-5'>
                    <h2 className='fs-4 mt-3 fw-bold'>Featured topics by category</h2>
                    <div className='categories'>

                        <div className='category'>
                            <h5 className='fw-bold'>Yazılım Geliştirme</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Python</a> <span className='student-count'> 36.030.827 öğrenci</span>  </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Web Geliştirme </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Makine Öğrenimi </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>İşletme</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Finansal Analiz </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>SQL </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>PMP </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>BT ve Yazılım</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>AWS Sertifikasyonu </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Etik Hackleme </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'> Siber Güvenlik</a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>Tasarım</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'> Photoshop</a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Grafik Tasarım </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Çizim </a> <span className='student-count'> 36.030.827 öğrenci</span> </li>
                            </ul>
                        </div>

                    </div>
                    <button className='btn-design-white'>
                        Explore More Topics
                    </button>
                </Container>
            </div>
        </div>
    )
}

export default Categories