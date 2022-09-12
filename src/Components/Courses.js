import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/Home.css'
import Course from '../Components/Course';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GlobalContext, useContext } from '../Context/MainContext'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Courses = () => {
    const { courses, tabs } = useContext(GlobalContext)

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
                                    <Row md={12} xs={1}>
                                        <Carousel responsive={responsive}>
                                            {courses.map(c => {
                                                return <div className='mx-2' key={c.id}>
                                                    <Course course={c}></Course>
                                                </div>
                                            })}
                                        </Carousel>
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