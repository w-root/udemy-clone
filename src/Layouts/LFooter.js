import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Footer.css'
import logo from '../Images/logo-udemy-inverted.svg'
const LFooter = () => {
    return (
        <footer className='mt-4'>

            <Col className='p-5'>
                <Row className='links-and-language-selector'>
                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='asd'>
                                Udemy Business
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Udemy'de Eğitim Verin
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Uygulamayı Edinin
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Hakkmızıda
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                İletişim
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a >
                                Kariyer
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Blog
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Yardım ve Destek
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                İş Ortaklığı
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Yatırımcılar
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a >
                                Koşullar
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Gizlilik Politikası
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Çerez Ayarları
                            </a>
                        </li>
                        <li className='list-item'>
                            <a >
                                Site Haritası
                            </a>
                        </li>
                        <li className='list-item'>
                            <a>
                                Erişilebilirlik Beyanı
                            </a>
                        </li>
                    </ul>

                </Row>

                <div className='logo d-flex justify-content-between'>
                    <div className='image'>
                        <a>
                            <Image width={91} src={logo}>

                            </Image>
                        </a>
                    </div>
                    <div className='copyright'>
                        © 2022 Udemy, Inc
                    </div>
                </div>
            </Col>


        </footer>
    )
}

export default LFooter