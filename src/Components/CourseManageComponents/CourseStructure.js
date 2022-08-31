import React from 'react'
import { Image } from 'react-bootstrap'
import '../../css/CourseManageComponents.css'

const CourseStructure = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Kurs Yapısı</h2>
            </div>
            <div className='course-structure-page-content-only-header-panel'>
                <div className='course-structure-content-header-panel-left'>
                    <h2 className='fs-4 fw-bold mb-4' style={{ lineHeight: "28.8px" }}>
                        Kursunuzu yayınlamak için vakit kaybetmeyin.<br /> Hemen planlamaya başlayın.
                    </h2>
                    <div style={{ fontSize: "19px", lineHeight: "26.6px" }}>
                        Kursunuzu dikkatli bir şekilde planlamak, ö
                        ğrencileriniz için daha anlaşılır bir öğrenim yolu çizer ve çekim sırasında size yardımcı olur.
                        Öğreteceğiniz beceriler, tahmini video uzunluğu, kursa dahil edeceğiniz alıştırma etkinlikleri,
                        giriş bölümlerini ve özetleri nasıl oluşturacağınız dahil olmak üzere her bir dersin ayrıntılarını düşünün.
                    </div>
                </div>
                <div className='course-structure-content-header-panel-right'>
                    <Image src='https://s.udemycdn.com/instructor/manage/library-help.jpg' />
                    <h3 style={{ fontSize: "19px" }}>Kaynak kitaplığımız</h3>
                    <div className='fs-6 lh-2'>
                        Öğrencilerin seveceği bir kurs oluşturmak için ipuçları ve kılavuzlar
                    </div>
                    <button className='teaching-center-button'>Teaching Center</button>
                </div>
            </div>
            <div className='app-component-main-content'>
                <div className='me-5'>
                    <h2 className='fs-4 fw-bold'>İpuçları</h2>

                    <h3 className='fs-6 fw-bold mt-4'>Hedeflerinize ulaşmak için ilk adımı atın.</h3>
                    <p className='mb-4'>
                        Kursun başında öğrencilerinizin kursunuzda başaracakları konusunda hedefler belirlemek
                        (Buna aynı zamanda <span>
                            <a className='component-link' href='!#'>öğrenim hedefleri</a>
                        </span> de denir), kursunuza hangi içerikleri dahil edeceğinizi
                        belirlemenize ve öğrencilerinizin hedeflerine ulaşmalarına yardımcı olmak için içeriği nasıl
                        öğreteceğinize karar vermenize yardımcı olur.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Ana hatları belirleyin.</h3>
                    <p className='mb-4'>
                        Öğreteceğiniz yetkinliklere ve bunları nasıl öğreteceğinize karar verin.
                        Dersleri bölümlere ayırın. Her bölümde en az 3 ders olmalı ve en az bir ödev veya
                        pratik faaliyeti yer almalıdır.
                        <span>
                            <a className='component-link' href='!#'>Daha fazla bilgi edinin.</a>
                        </span>
                    </p>


                    <h3 className='fs-6 fw-bold mt-4'>Kendinizi tanıtın ve heyecan katın.</h3>
                    <p className='mb-4'>
                        İnsanlar online platformlarda hemen öğrenmeye başlamak ister.
                        Öğrencilerin ilk 10 dakikada heyecanlanmasını sağlayacak bir giriş bölümü hazırlayın.
                    </p>


                    <h3 className='fs-6 fw-bold mt-4'>Her bölüm için net öğrenim hedefleri belirleyin.</h3>
                    <p className='mb-4'>
                        Her bölümü tanıtırken bölümün<span>
                            <a className='component-link' href='!#'>amacını ve neden önemli olduğunu</a>
                        </span>  açıklayın.
                        Dersler ve bölümler için başlık belirlerken başlıkların içeriği yansıtmasına
                        ve mantıklı bir sırayı takip etmesine dikkat edin.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Derslerde tek bir konsepte odaklanın.</h3>
                    <p className='mb-4'>
                        İyi bir ders, öğrencilerin ilgisini korumak ve kısa videolarla öğrenmelerine yardımcı
                        olmak için 2-7 dakika arasında olmalıdır. Öğrencilerin dersleri daha sonra kolayca
                        bulup yeniden izleyebilmesi için her derste bir konu işleyin.
                    </p>


                    <h3 className='fs-6 fw-bold mt-4'>Ders türlerinizi birleştirip eşleştirin.</h3>
                    <p className='mb-4'>
                        Değişimli olarak kendinizi, ekranınızı, slaytları veya diğer
                        görselleri çekin. Kendinizi çekmeniz öğrencilerin sizinle bağ kurmasına yardımcı olur.
                    </p>


                    <h3 className='fs-6 fw-bold mt-4'>Alıştırma faaliyetleri öğrencilerin uygulamalı olarak öğrenmesini sağlar.</h3>
                    <p className='mb-4'>
                        Projeler, ödevler, kodlama egzersizleri veya çalışma kağıtları
                        ile öğrencilerin <span>
                            <a className='component-link' href='!#'>derslerinizde öğrendiklerini gerçek hayatta kullanmasına yardımcı olun.</a>
                        </span>

                    </p>

                </div>
                <div className='my-5'>
                    <h2 className='fs-4 fw-bold my-4'>Gereksinimler</h2>
                    <ul>
                        <li className='mb-2'>
                            Kurs kalite gereksinimleriyle ilgili
                            <span>
                                <a className='component-link' href='!#'>eksiksiz listeyi görüntüleyin</a>
                            </span>
                        </li>
                        <li className='mb-2'>
                            Kursunuzda en az beş ders olmalıdır
                        </li>
                        <li className='mb-2'>
                            Tüm derslerin toplamı en az 30+ dakikalık bir video oluşturmalıdır
                        </li>
                        <li className='mb-2'>
                            Kursunuz değerli eğitim içeriklerinden oluşur ve promosyon öğeleri veya dikkat dağıtıcı materyaller içermez
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

export default CourseStructure