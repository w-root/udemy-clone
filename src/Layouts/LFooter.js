import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import '../css/Footer.css'
import logo from '../Images/logo-udemy-inverted.svg'

const LFooter = () => {
    return (
        <footer>
            <Col className='p-5'>
                <Row className='links-and-language-selector'>
                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                                Udemy Business
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Udemy'de Eğitim Verin
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Uygulamayı Edinin
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Hakkmızıda
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                İletişim
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                                Kariyer
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Blog
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Yardım ve Destek
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                İş Ortaklığı
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Yatırımcılar
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                                Koşullar
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Gizlilik Politikası
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Çerez Ayarları
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Site Haritası
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Erişilebilirlik Beyanı
                            </a>
                        </li>
                    </ul>
                </Row>
                <div className='logo d-flex justify-content-between mt-5'>
                    <div className='image'>
                        <a href='/#'>
                            <Image width={91} src={logo} />
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