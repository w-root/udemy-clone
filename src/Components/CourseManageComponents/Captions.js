import React from 'react'
import '../../css/CourseManageComponents.css'

const Captions = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header d-flex justify-content-between'>
                <div className='d-flex '>
                    <div>
                        <h2 className='fs-4 fw-bold me-3'>Altyazılar</h2>
                    </div>

                    <div>
                        <button className='teaching-center-button mt-0 me-4'>
                            Türkçe
                        </button>
                    </div>

                    <div>
                        <p style={{ fontFamily: "sans-serif" }}>
                            0/0 yayınlanmış altyazılı ders
                        </p>
                    </div>
                </div>
                <div>
                    <button className='teaching-center-button mt-0'>
                        Devre Dışı Bırak
                    </button>
                </div>
            </div>

            <div className='app-component-main-content'>
                <div className='me-5'>
                    <p className='mb-4'>
                        İçeriği takip etmeye, anlamaya ve hatırlamaya yardımcı olduğundan her seviyeden
                        dil yeterliliğine sahip öğrenciler altyazılara büyük değer vermektedir.
                        Ayrıca içeriğin işitme engeli veya duyma güçlüğü yaşayan kişiler tarafından erişilebilir olmasını sağlamak için altyazılar
                        çok önemlidir. <a className='component-link' href='!#'>
                            Daha fazla bilgi edinin.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Captions