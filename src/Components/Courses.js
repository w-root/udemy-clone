import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css'
import Course from '../Components/Course';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import logoub from '../Images/logo-ub.svg'

const Courses = () => {
    const [courses, setCourses] = useState([
        {
            id: 1, title: "(40 + Saat) Python | Sıfırdan İleri Seviye Programlama(2020)", image: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
            instructor: "Mustafa Murat Coşkun", rating: 4.2, price: 466.99, slug: "python-sifirdan-ileri-seviye-programlama(2020)"
        }, {
            id: 12, title: "Python 3: A' dan Z' ye Programlama", image: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
            instructor: "Volkan Taşçı", rating: 4.6, price: 269.99, slug: "python3-a-dan-z-ye-programlama-"
        }, {
            id: 13, title: "Python ile Makine Öğrenmesi", image: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
            instructor: "Şadi Evren Şeker", rating: 4.4, price: 429.99, slug: "python-ile-makine-ogrenmesi-"
        }, {
            id: 14, title: "Python Programlama Eğitimi A-Z™ - (71.000+ Öğrenci)", image: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
            instructor: "Mehmet Tek", rating: 4.4, price: 249.99, slug: "python-programlama-egitimi-A-"
        }, {
            id: 15, title: "Python: Yapay Zeka için Python Programlama (1)", image: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
            instructor: "Mustafa Murat Coşkun", rating: 4.4, price: 649.99, slug: "python-yapay-zeka-icin-python-programlama-(1)"
        }
    ])

    const [tabs, setTabs] = useState([
        {
            id: 17, name: "Python", textTitle: "Python ile kariyer olanaklarınızı artırın", textContent: "İster makine öğrenimi, ister finans alanında çalışıyor olun, ister web geliştirme veya veri bilimi alanında kariyer yapıyor olun, Python öğrenebileceğiniz en önemli becerilerden biridir. Python'un basit sözdizimi özellikle masaüstü, web ve iş uygulamaları için uygundur."
        },
        {
            id: 16, name: "Excel", textTitle: "Excel ile verileri analiz edin ve görselleştirin", textContent: "Çalıştığınız sektör ne olursa olsun Microsoft Office Excel, verileri düzenlemek ve göstermek için çok değerli bir çalışma tablosu programıdır. Excel, büyük bilgi gruplarını toplamanıza ve analiz etmenize yardımcı olacak işlevler, formüller ve pivot tabloları sunar."
        },
        {
            id: 15, name: "Web Geliştirme", textTitle: "Web Geliştirme ile web siteleri ve uygulamalar oluşturun", textContent: "Web geliştirme dünyası, internetin kendisi kadar geniştir. Sosyal ve meslek hayatlarımızın büyük bir kısmı internette yayınlanır. Bu da, giderek daha çok güvendiğimiz web sitelerini ve uygulamaları oluşturma, yönetme ve hata ayıklama amacıyla yeni sektörlere yol açar."
        },
        {
            id: 14, name: "Javascript", textTitle: "JavaScript ile yazılım geliştirme yetkinliklerinizi ileriye taşıyın", textContent: "JavaScript, dünyadaki en yaygın programlama dillerinden biridir. Bunun başlıca nedeni, interaktif web uygulamalarının temelini oluşturmasıdır. Üstelik JavaScript, görsel işlem gerçekleştiren bir kod yazma olanağı sunmasıyla yeni başlayanlar için harika bir dildir. Çünkü bu, programcı olarak yeni deneyim kazanırken heyecan duyar."
        },
        {
            id: 13, name: "Veri Bilimi", textTitle: "Veri Bilimi ile veriye dayalı kararlara öncülük edin", textContent: "Veri bilimi her yerdedir. Daha iyi veri bilimi uygulamaları, şirketlerin gereksiz maliyetleri azaltmalarını, bilgi işlemi otomatikleştirmelerini ve pazarları analiz etmelerini sağlıyor. Temel olarak veri bilimi, rekabetçi bir küresel ortamda ilerlemenin anahtarıdır."
        },
        {
            id: 12, name: "AWS Sertifikasyonu", textTitle: "AWS Sertifikası ile bulut bilgi işlem alanında uzmanlaşın", textContent: "Amazon Web Services sürekli gelişen bir bulut ekosistemi olduğundan, yeni AWS hizmetlerine ve özelliklerine ayak uydurmak çok önemli olabilir. Bu nedenle bir AWS sertifikası almak harika bir BT kariyer hamlesidir. Gelecekteki işverenlerin gözünde, siz bir AWS yetkilisisiniz."
        },
    ])
    return (
        <Container >
            <div className="component-header">
                <div className="component-title">
                    Kapsamlı kurs seçkisi
                </div>
                <div className="component-subtext fs-5">
                    Her ay yayınlanan yeni kurslarla 204.000+ online video kurs arasından seçiminizi yapın
                </div>
            </div>

            <div className="component-courses-section">
                <section>
                    <Tabs
                        defaultActiveKey="Python"
                        id="uncontrolled-tab-example"
                        className="mb-3 border-0"  >
                        {tabs.map(t => {
                            return <Tab key={t.id} eventKey={t.name} title={t.name} >
                                <Col className='ms-3'>
                                    <Row md={12} className='mb-5'>
                                        <div className="fs-4 fw-bold mb-2">
                                            {t.textTitle}
                                        </div>
                                        <div style={{ maxWidth: "50rem" }} className="fs-6">
                                            {t.textContent}
                                        </div>
                                    </Row>
                                    <Row md={5} xs={1}>
                                        {courses.map(c => {
                                            return <Course key={c.id} course={c} />
                                        })}
                                    </Row>
                                </Col>
                            </Tab>
                        })}
                    </Tabs>
                </section>
            </div>
        </Container>
    )
}

export default Courses