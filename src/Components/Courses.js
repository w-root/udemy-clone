import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css'
import Course from '../Components/Course';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import logoub from '../Images/logo-ub.svg'
import { FetchAllCourses, FetchHomePageTabs } from '../Services/CourseService';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [tabs, setTabs] = useState([])

    const getAllCourses = async () => {
        try {
            const response = await FetchAllCourses()
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getAllTabs = async () => {
        try {
            const response = await FetchHomePageTabs()
            setTabs(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCourses()
        getAllTabs()
    }, [])

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