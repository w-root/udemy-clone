import React from 'react'
import '../../css/CourseManageComponents.css'
const Goals = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Hedef Öğrenciler</h2>
            </div>

            <div className='app-component-main-content'>

                <div className='goals-form-subtitle'>
                    Aşağıdaki açıklamalar,
                    <span>
                        <a className='component-link' href='!#'>Kurs Açılış Sayfasında</a>
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
                            <a className='component-link' href='!#'>
                                öğrenim hedefi veya sonuç
                            </a>
                        </span>
                        girmelisiniz.
                    </div>

                    <div className='d-flex ' >
                        <form className='w-100' >
                            <div className='answer-input-group' >
                                <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Proje yöneticilerinin rollerini ve sorumluluklarını tanımlayın" />
                            </div>
                            <div className='answer-input-group' >
                                <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Proje zaman çizelgelerini ve bütçeleri hesaplayın" />
                            </div>
                            <div className='answer-input-group' >
                                <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Proje risklerini tanımlayın ve yönetin" />
                            </div>
                            <div className='answer-input-group' >
                                <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Konsept aşamasından tamamlanana kadar bir projeyi yönetmek için bir örnek olay çalışması tamamlayın" />
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

                        <div className='answer-input-group' >
                            <input className='learn-goal-input form-control' type="text" placeholder="Örnek: Programlama deneyimi gerekmez. Bilmeniz gereken her şeyi öğreneceksiniz" />
                        </div>
                    </div>

                    <div className='my-5'>
                        <h2 className='fs-6 fw-bold'>
                            Bu kurs kime yönelik?

                        </h2>

                        <p>
                            Kurs içeriğinizi değerli bulacak <span><a className='component-link' href='!#'>hedef öğrenciler</a></span> için net bir açıklama girin. <br />
                            Bu, doğru öğrencileri kursunuza çekmenize yardımcı olur.
                        </p>

                        <div className='answer-input-group' >
                            <input className='learn-goal-input form-control' type="text" placeholder="Örneğin: Veri bilimine meraklı, başlangıç düzeyindeki Python geliştiricileri" />
                        </div>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='course-create-update-button'>
                            Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals