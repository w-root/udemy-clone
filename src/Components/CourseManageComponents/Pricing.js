import React from 'react'
import '../../css/CourseManageComponents.css'

const Pricing = () => {
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

                <form>
                    <div className='d-flex '>
                        <select className='basic-answer-input form-control '>
                            <option>TRY</option>
                            <option>USD</option>
                        </select>

                        <select className='basic-answer-input form-control '>
                            <option>Seç</option>
                            <option>Ücretsiz</option>
                            <option>169₺</option>
                            <option>229₺</option>
                            <option>249₺</option>
                            <option>269₺</option>
                            <option>279₺</option>
                        </select>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='course-create-update-button my-5'>
                            Kaydet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Pricing