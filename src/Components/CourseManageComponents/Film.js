import React from 'react'
import { Image } from 'react-bootstrap'
import '../../css/CourseManageComponents.css'

const Film = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Kurs Yapısı</h2>
            </div>
            <div className='course-structure-page-content-only-header-panel'>
                <div className='course-structure-content-header-panel-left'>
                    <h2 className='fs-4 fw-bold mb-4' style={{ lineHeight: "28.8px" }}>
                        Bilgi birikiminizi paylaşmaya hazırsınız.
                    </h2>
                    <div style={{ fontSize: "19px", lineHeight: "26.6px" }}>
                        Artık hazırsınız! Kursunuzu yapılandırdınız ve kılavuzlarımızdan yararlandınız.
                        Şimdi gerçek bir çekime hazırsınız. Her şeyin istediğiniz gibi olması için kendinize
                        zaman tanıyın ve düzenleme sırasında ince ayarlar yapın.
                    </div>
                </div>
                <div className='course-structure-content-header-panel-right'>
                    <Image src='https://s.udemycdn.com/instructor/manage/video-help.jpg' />
                    <h3 style={{ fontSize: "19px" }}>Yalnız değilsini</h3>

                    <div className='fs-6 lh-2'>
                        Diğer Udemy eğitmenleriyle sohbet edin ve prodüksiyon konusunda yardım alın
                    </div>
                    <button className='teaching-center-button'>Topluluğa Katılın</button>
                </div>
            </div>
            <div className='app-component-main-content'>
                <div className='me-5'>
                    <h2 className='fs-4 fw-bold'>İpuçları</h2>

                    <h3 className='fs-6 fw-bold mt-4'>Ara verin ve sık sık gözden geçirin</h3>
                    <p className='mb-4'>
                        Yeni gürültüler gibi değişiklikler olup olmadığını sık sık kontrol edin. Kendi enerji seviyenizin farkında olun. Çekim yapmak sizi yorabilir ve yorgunluğunuz ekrana yansıyabilir.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Bağ kurun.</h3>
                    <p className='mb-4'>
                        Öğrenciler eğitmenlerini tanımak ister. Çoğunlukla ekran kaydından oluşan bir kurs için bile giriş bölümünde kendinizi çekin. Dilerseniz her bölümün tanıtımı için de kendinizi çekebilirsiniz!
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Kamera karşısında uzmanlaşmak zaman alır.</h3>
                    <p className='mb-4'>
                        Kamerayla göz teması kurun ve net bir şekilde konuşun. Doğru şekilde yapmak için istediğiniz kadar tekrar çekin.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Düzenlemeyi başarıyla gerçekleştirmek için kendinizi hazırlayın.</h3>
                    <p className='mb-4'>
                        Düzenleme sırasında uzun duraklamaları, hataları veya "ııı" seslerini videodan çıkarabilirsiniz. Bu boşlukları doldurmak için daha sonra ekleyebileceğiniz birkaç ekstra etkinlik veya görüntü çekin.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Ses işaretleri oluşturun.</h3>
                    <p className='mb-4'>
                        Düzenleme sırasında sesin aniden yükseldiği yerleri kolayca bulmak için çekime her başladığınızda ellerinizi çırpın. Çekim gününü verimli bir şekilde geçirmek için kılavuzlarımızı kullanın.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Ekran kayıtları için masaüstünüzü temizleyin.</h3>
                    <p className='mb-4'>
                        İlgili olmayan dosyaları ve klasörleri masaüstünüzden kaldırın ve gerekli sekmeleri önceden açın. Ekranda görünen metnin en az 24 punto olduğundan emin olun ve bir alanı vurgulamak için yakınlaştırma işlevini kullanın.
                    </p>

                </div>
                <div className='my-5'>
                    <h2 className='fs-4 fw-bold my-4'>Gereksinimler</h2>
                    <ul>
                        <li className='mb-2'>
                            En az 720p (veya mümkünse 1080p) çözünürlükte videolar oluşturmak için HD olarak çekim yapın ve dışa aktarın
                        </li>
                        <li className='mb-2'>
                            Ses, hem sol hem sağ kanaldan gelmeli ve videonuzla senkronize olmalıdır
                        </li>
                        <li className='mb-2'>
                            Öğrencilerin dikkatinin dağılmaması için seste yankı ve arka plan gürültüsü olmadığından emin olun
                        </li>
                    </ul>
                </div>
                <div className='pt-3'>
                    <h2 className='fs-4 fw-bold'>Kaynaklar</h2>
                    <h3 className='fs-6 fw-bold mt-4'>
                        <a className='component-link fw-bold' href='!#'>Udemy İtimat ve Güvenlik</a>
                    </h3>

                    <p className='mb-4'>
                        Eğitmenlere ve öğrencilere yönelik politikalarımız
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>
                        <a className='component-link fw-bold' href='!#'>Eğitmen topluluğuna katılın</a>
                    </h3>

                    <p className='mb-4'>
                        Diğer eğitmenlerle konuşabileceğiniz bir platform
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>
                        <a className='component-link fw-bold' href='!#'>Resmi Udemy Kursu: Online Kurs Oluşturma</a>
                    </h3>

                    <p className='mb-4'>
                        Udemy Eğitmen Ekibi ve deneyimli eğitmenlerden kurs oluşturma hakkında bilgi alın
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Film