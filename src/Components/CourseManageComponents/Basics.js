import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import '../../css/CourseManageComponents.css'
import { useFormik } from 'formik';
import { FetchCourseDetailById, UpdateCourse } from '../../Services/CourseService'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FetchAllCategories } from '../../Services/CategoryService';
import { useParams } from "react-router-dom";

const Basics = () => {
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [course, setCourse] = useState({})

    const GetCourse = async () => {
        try {
            const response = await FetchCourseDetailById(id)
            await setCourse(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const GetAllCategories = async () => {
        try {
            const response = await FetchAllCategories()
            setCategories(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetAllCategories()
        GetCourse()
    }, [])

    const formik = useFormik({
        initialValues: {
            title: '',
            subtitle: '',
            description: ''
        },
        onSubmit: async (values) => {
            FormValidate(course, values)
            try {
                const response = await UpdateCourse(course)
            } catch (error) {
                console.log(error)
            }
        },
    });
    const FormValidate = (course, values) => {
        for (let key in values) {
            if (values[key] != "") {
                course[key] = values[key]
            }
        }
    }
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Kurs açılış sayfası</h2>
            </div>
            <div className='app-component-main-content'>
                {course && <form onSubmit={formik.handleSubmit} className='w-100' >
                    <div className='basic-answer-input-group'>
                        <label className='form-control-label' htmlFor='title'>
                            Kurs başlığı
                        </label>
                        <input onChange={formik.handleChange}
                            defaultValue={course.title || ''}
                            className='basic-answer-input form-control' id='title' name='title' type="text" />
                    </div>

                    <div className='basic-answer-input-group'>
                        <label className='form-control-label' htmlFor='subtitle'>
                            Kurs altbaşlığı
                        </label>
                        <input onChange={formik.handleChange}
                            defaultValue={course.subtitle || ''}
                            className='basic-answer-input form-control' id='subtitle' name='subtitle' type="text" />
                    </div>

                    <div className='basic-answer-input-group'>
                        <label className='form-control-label' htmlFor='description'>
                            Kurs Açıklaması
                        </label>
                        <div className='editor'>
                            <CKEditor
                                id='description'
                                name='description'
                                className='basic-answer-input form-control'
                                editor={ClassicEditor}
                                data={course.description || ''}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    course.description = data
                                }}
                            />
                        </div>
                    </div>

                    <div className='basic-answer-input-group d-flex my-4'>
                        <select defaultValue={"default"} className='basic-answer-input form-control me-3'>
                            <option value={"default"} >Türkçe</option>
                            <option>İngilizce</option>
                        </select>

                        <select defaultValue={"default"} className='basic-answer-input form-control me-3'>
                            <option value={"default"} disabled>--Düzey Seçin--</option>
                            <option>Başlangıç Düzeyi</option>
                            <option>Orta Düzey</option>
                            <option>Uzman Düzeyi</option>
                            <option>Tüm Düzeyler</option>
                        </select >

                        <select onChange={formik.handleChange}
                            name='category' id='category'
                            defaultValue={"default"}
                            className='basic-answer-input form-control'>
                            <option value={"default"} disabled>--Kategori Seçin--</option>
                            {categories.map(c => {
                                return <option key={c.id} value={c.name}>{c.name}</option>
                            })}
                        </select>

                    </div>

                    <div className='my-5'>
                        <label className='form-control-label' htmlFor='subtitle'>
                            Kursunuzda temel olarak ne öğretiliyor?
                        </label>
                        <input className='basic-answer-input form-control w-50' type="text" />
                    </div>

                    <div className='my-5'>
                        <div>
                            <label className='form-control-label' htmlFor='subtitle'>
                                Kurs Görüntüsü
                            </label>
                        </div>
                        <div >
                            <Row>
                                <Col md={6}>
                                    <Image className='course-basics-image' src='https://s.udemycdn.com/course/750x422/placeholder.jpg' />
                                </Col>
                                <Col md={6}>
                                    <p>
                                        Kurs görüntünüzü buraya yükleyin.
                                        Görüntünün kabul edilmesi için kurs görüntüsü kalite
                                        standartlarımızı karşılaması gerekir. Önemli yönergeler:
                                        750x422 piksel; .jpg, .jpeg,. gif veya .png. Ayrıca görüntü, metin içermemelidir.
                                    </p>
                                    <input onChange={formik.handleChange}
                                        defaultValue={course.image || ''} name='image' id='image' className='basic-answer-input form-control fw-bold' type="file" /></Col>
                            </Row>
                        </div>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='course-update-button'>
                            Kaydet
                        </button>
                    </div>
                </form>}

            </div>
        </div>
    )
}

export default Basics