import React, { useEffect, useState } from 'react'
import '../../css/CourseManageComponents.css'
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { FetchCourseDetailById, UpdateCourse } from '../../Services/CourseService'
import { toast } from 'react-toastify';

const Pricing = () => {
    const { id } = useParams()
    const [course, setCourse] = useState({})

    const GetCourse = async () => {
        try {
            const response = await FetchCourseDetailById(id)
            setCourse(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues: {
            price: 0
        },
        onSubmit: async (values) => {
            course.price = parseFloat(values.price)
            try {
                await UpdateCourse(course)
                toast.success('Değişiklikleriniz başarıyla kaydedildi.', {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            } catch (error) {
                toast.error('Hata oluştu ! ' + error.request.response, {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            }
        },
    });
    useEffect(() => {
        GetCourse()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Fiyatlandırma</h2>
            </div>

            <div className='app-component-main-content'>
                <div className='me-5'>
                    <h2 className='fs-6 fw-bold'>
                        Kurs Fiyat Kademesi
                    </h2>
                    <p className='my-4'>
                        Lütfen aşağıdan kursunuzun fiyat kademesini seçin ve "Kaydet" seçeneğine tıklayın.
                        Öğrencilerin diğer para birimlerinde göreceği liste fiyatı, <span><a className='component-link' href='!#'>fiyat kademesi matrisi</a></span> kullanılarak belirlenir.<br />
                        Kursunuzu ücretsiz olarak sunmak istiyorsanız video içeriğinizin toplam uzunluğu 2 saati aşmamalıdır.
                    </p>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className='d-flex'>
                        <select style={{ width: "5rem" }} className='basic-answer-input form-control fw-bold'>
                            <option>TRY</option>
                            <option>USD</option>
                        </select>

                        <select onChange={formik.handleChange}
                            name='price'
                            id='price' className='basic-answer-input form-control w-25 fw-bold ms-4'>
                            <option>Seç</option>
                            <option value="0">Ücretsiz</option>
                            <option value="169.99">169,99₺</option>
                            <option value="229.99">229,99₺</option>
                            <option value="249.99">249,99₺</option>
                            <option value="269.99">269,99₺</option>
                            <option value="279.99">279,99₺</option>
                        </select>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='course-update-button my-5'>
                            Kaydet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Pricing