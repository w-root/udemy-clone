import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import '../css/Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='component-cart'>
            <Container>
                <div className='component-cart-header'>
                    <h1>
                        Alışveriş sepeti
                    </h1>
                </div>
                <div className='component-cart-main-content'>
                    <Row>
                        <Col md={8}>
                            <div className='cart-items'>
                                <Card className='cart-item' >
                                    <Card.Img className='rounded-0'
                                        variant="top" src="http://127.0.0.1:8000/media/course_images/2022/08/1746350_90f5_3.jpg" />
                                    <Card.Body className='ms-1'>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Eğitmen
                                        </Card.Text>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="course-rating">4</span>
                                            <ReactStars edit={false} value={4} />
                                            <span className="text-muted ms-2" style={{ fontSize: "12px" }}>(25.485)</span>
                                        </div>
                                        <Card.Text className='course-total-hours'>
                                            Toplam 28,5 saat • 244 ders • Tüm Düzeyler
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='me-auto d-flex p-3 text-end'>
                                        <div className='d-flex flex-column'>
                                            <a href='#'>
                                                Kaldır
                                            </a>
                                            <a href='#'>
                                                İstek Listesine Taşı
                                            </a>
                                        </div>

                                        <div className='ms-5'>
                                            ₺429,99
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='checkout-pane'>
                                <div className='total-price'>
                                    <div className='fs-5'>
                                        Toplam :
                                    </div>
                                    <h1 className='fw-bold'>
                                        ₺429,99
                                    </h1>
                                    <Link to={"/cart/checkout"}>
                                        <button className='shopping-cart-checkout'>
                                            Ödeme Bilgileri
                                        </button>
                                    </Link>
                                </div>
                                <hr />
                                <div className='fw-bold'>
                                    Promosyonlar

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Cart