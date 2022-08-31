import React from 'react'
import '../../css/CourseManageComponents.css'

const Curriculum = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Müfredat</h2>
            </div>

            <div className='app-component-main-content'>
                <div className='me-5'>
                    <p className='mb-4'>
                        Bölümler, dersler ve pratik faaliyetleri (sınavlar, kodlama egzersizleri ve ödevler) oluşturarak kursunuzu hazırlamaya başlayın.
                        <br />
                        Kursunuzu ücretsiz yayınlamak istiyorsanız video içeriğinizin toplam uzunluğu 2 saati aşmamalıdır.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Curriculum