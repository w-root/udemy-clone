import React from 'react'
import '../css/CreateCoursePage.css'
import { NavLink } from 'react-router-dom';
import { Image, } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useFormik } from 'formik';
import { CreateCourse } from '../Services/CourseService'
import { GlobalContext, useContext } from '../Context/MainContext'
import { toast } from 'react-toastify';

const CreateCoursePage = () => {
    const { categories } = useContext(GlobalContext)

    const formik = useFormik({
        initialValues: {
            title: '',
            category: 0
        },
        onSubmit: async (values) => {
            try {
                await CreateCourse(values)
                window.location.href = "/instructor/courses"
            } catch (error) {
                toast.error('Hata oluştu ! ' + error.request.response, {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            }
        },
    });
    return (
        <div >
            <Navbar bg="white" className='minimal-header' expand="lg" >
                <Nav className='minimal-header-image p-4'>
                    <NavLink to={"/"}>
                        <Image width={91} src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' />
                    </NavLink>
                </Nav>
                <Nav id='navbar-buttons'>
                    <NavLink className='navlink-login' to={"/"}>
                        Çıkış Yap
                    </NavLink>
                </Nav>
            </Navbar >

            <div style={{ height: "750px" }} >
                <form onSubmit={formik.handleSubmit}>

                    <div className='course-form'>
                        <h2>
                            Çalışma başlığının ne olacağını düşündünüz mü?
                        </h2>
                        <p>
                            Şu anda aklınıza uygun bir başlık gelmiyorsa sorun değil. Daha sonra değiştirebilirsiniz.
                        </p>
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            placeholder='Örn: Sıfırdan Photoshop CS6 Öğrenin'
                            style={{ width: "34rem" }} className='course-title-answer form-control mb-5' name='title' id='title' type="text" />
                    </div>
                    <div className='course-form'>
                        <h2>
                            Paylaşacağınız bilgiler için en uygun kategori nedir?
                        </h2>
                        <p>
                            Doğru kategoriden emin değilseniz daha sonra değiştirebilirsiniz.
                        </p>
                        <select onChange={formik.handleChange}
                            name='category' id='category'
                            defaultValue={"default"}
                            style={{ width: "34rem" }}
                            className='basic-answer-input form-control'>

                            <option value={"default"} disabled>--Kategori Seçin--</option>
                            {categories.map(c => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='full-page-footer'>

                        <button className='course-button course-cancel-button'>
                            İptal Et
                        </button>
                        <button type='submit' className='course-button course-create-button'>
                            Kurs Oluşturun
                        </button>

                    </div>
                </form>
            </div>


        </div>
    )
}

export default CreateCoursePage