import React, { useEffect, useState } from 'react'
import '../../css/CourseManageComponents.css'
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { FetchCourseDetailById, UpdateCourse } from '../../Services/CourseService'
import { toast } from 'react-toastify';

const Goals = () => {
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
            whatyouwilllearn1: '',
            whatyouwilllearn2: '',
            whatyouwilllearn3: '',
            whatyouwilllearn4: ''
        },
        onSubmit: async (values) => {
            course.whatYouWillLearn = {
                "data": []
            }
            for (let key in values) {
                course.whatYouWillLearn["data"].push(values[key])
            }
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
                <h2 className='fs-4 fw-bold'>Hedef Öğrenciler</h2>
            </div>

            <div className='app-component-main-content'>

                <div className='goals-form-subtitle'>
                    Aşağıdaki açıklamalar,
                    <span>
                        <a className='component-link' href='/#'>Kurs Açılış Sayfasında</a>
                    </span> görünür olacak ve kursunuzun performansına doğrudan etki edecektir.
                    Bu açıklamalar öğrencilerin, kursun onlara uygun olup olmadığına karar vermelerine yardımcı olur.
                </div>

                <div>
                    <h2 className='fs-6 fw-bold mb-1' >
                        Öğrenciler, kursunuzda ne öğrenecek?
                    </h2>
                    <div className='mb-3'>
                        Öğrencilerin, kursunuzu tamamladıktan sonra başarabilecekleri en az 4
                        <span>
                            <a className='component-link' href='/#'>
                                öğrenim hedefi veya sonuç
                            </a>
                        </span>
                        girmelisiniz.
                    </div>

                    <div className='d-flex ' >
                        <form className='w-100' >
                            <div className='goals-answer-input-group' >
                                <input className='learn-goal-input form-control' onChange={formik.handleChange} name='whatyouwilllearn1' id='whatyouwilllearn1'
                                    type="text" placeholder="Örnek: Proje yöneticilerinin rollerini ve sorumluluklarını tanımlayın" />
                            </div>
                            <div className='goals-answer-input-group' >
                                <input className='learn-goal-input form-control' onChange={formik.handleChange} name='whatyouwilllearn2' id='whatyouwilllearn2'
                                    type="text" placeholder="Örnek: Proje zaman çizelgelerini ve bütçeleri hesaplayın" />
                            </div>
                            <div className='goals-answer-input-group' >
                                <input className='learn-goal-input form-control' onChange={formik.handleChange} name='whatyouwilllearn3' id='whatyouwilllearn3'
                                    type="text" placeholder="Örnek: Proje risklerini tanımlayın ve yönetin" />
                            </div>
                            <div className='goals-answer-input-group' >
                                <input className='learn-goal-input form-control' onChange={formik.handleChange} name='whatyouwilllearn4' id='whatyouwilllearn4'
                                    type="text" placeholder="Örnek: Konsept aşamasından tamamlanana kadar bir projeyi yönetmek için bir örnek olay çalışması tamamlayın" />
                            </div>
                        </form>
                    </div>

                    <div className='my-4 pe-5' >
                        <h2 className='fs-6 fw-bold'>
                            Kursunuzu almak için gereksinimler veya ön koşullar nelerdir?
                        </h2>

                        <p>
                            Öğrencilerin kursunuzu almadan önce sahip olması gereken yetkinlikleri, deneyimleri, araçları veya ekipmanları listeleyin.
                            <br />
                            Hiçbir gereksinim yoksa bunu, yeni başlayanlar için bariyeri düşürmeye yönelik bir fırsat olarak kullanın.
                        </p>

                        <div className='goals-answer-input-group' >
                            <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Programlama deneyimi gerekmez. Bilmeniz gereken her şeyi öğreneceksiniz" />
                        </div>
                    </div>

                    <div className='my-5'>
                        <h2 className='fs-6 fw-bold'>
                            Bu kurs kime yönelik?

                        </h2>

                        <p>
                            Kurs içeriğinizi değerli bulacak <span><a className='component-link' href='/#'>hedef öğrenciler</a></span> için net bir açıklama girin. <br />
                            Bu, doğru öğrencileri kursunuza çekmenize yardımcı olur.
                        </p>

                        <div className='goals-answer-input-group' >
                            <input className='learn-goal-input form-control' type="text" placeholder="Örneğin: Veri bilimine meraklı, başlangıç düzeyindeki Python geliştiricileri" />
                        </div>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' onClick={formik.handleSubmit} className='course-update-button'>
                            Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals