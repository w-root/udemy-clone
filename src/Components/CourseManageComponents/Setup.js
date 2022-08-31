import React from 'react'
import { Image } from 'react-bootstrap'
import '../../css/CourseManageComponents.css'

const Setup = () => {
    return (
        <div className='app-component'>
            <div className='app-component-header'>
                <h2 className='fs-4 fw-bold'>Kurs Yapısı</h2>
            </div>
            <div className='course-structure-page-content-only-header-panel'>
                <div className='course-structure-content-header-panel-left'>
                    <h2 className='fs-4 fw-bold mb-4' style={{ lineHeight: "28.8px" }}>
                        Stüdyonuzu en uygun şekilde düzenleyin ve erken geri bildirim alın
                    </h2>
                    <div style={{ fontSize: "19px", lineHeight: "26.6px" }}>
                        Kaydı tamamladıktan sonra videolarda düzeltme yapmak
                        çok daha zor olduğundan sesi ve videoyu en başta doğru şekilde oluşturmak oldukça önemlidir.
                        Profesyonel görünümlü bir video oluşturmak için elinizdeki malzemeleri kullanmanın birçok yaratıcı yolu vardır.
                    </div>
                </div>
                <div className='course-structure-content-header-panel-right'>
                    <Image src='https://s.udemycdn.com/instructor/manage/video-help.jpg' />
                    <h3 style={{ fontSize: "19px" }}>Video uzmanlarından ücretsiz yardım</h3>

                    <div className='fs-6 lh-2'>
                        Videonuzdaki ses ve görüntü hakkında size özel tavsiyeler alın
                    </div>
                    <button className='teaching-center-button'>Bir test videosu oluşturun</button>
                </div>
            </div>
            <div className='app-component-main-content'>
                <div className='me-5'>
                    <h2 className='fs-4 fw-bold'>İpuçları</h2>

                    <h3 className='fs-6 fw-bold mt-4'>Ekipman bulmak aslında çok kolay.</h3>
                    <p className='mb-4'>
                        Pahalı ekipmanlar almanıza gerek yok. Akıllı telefonların çoğu ile HD kalitesinde video çekebilir, sesi ise farklı bir telefon veya harici mikrofon ile kaydedebilirsiniz.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Öğrencilerin sizi duyması gerekir.</h3>
                    <p className='mb-4'>
                        Ekipmanınızın en önemli parçası olan mikrofonu uygun fiyatla satın alabilirsiniz. Mikrofonu doğru şekilde taktığınızdan ve kendinizden 15-30 cm uzakta olacak şekilde yerleştirdiğinizden emin olun.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Stüdyo oluşturun.</h3>
                    <p className='mb-4'>
                        Arka planınızı temizleyin ve sahne donanımını ayarlayın. Renkli kağıtlardan yapılmış bir fon veya ütülü bir çarşafla neredeyse tüm küçük alanları bir stüdyoya dönüştürebilirsiniz.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Sahneyi ve yüzünüzü aydınlatın.</h3>
                    <p className='mb-4'>
                        Tepe ışıklarını kapatın. Karşınıza iki adet, arka plana bir adet lamba yerleştirerek üç noktalı aydınlatmayı deneyin.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Gürültüyü ve yankılanmayı azaltın.</h3>
                    <p className='mb-4'>
                        Fanları veya havalandırmayı kapatın ve sessiz bir ortamda kayıt yapın. Duvarları akustik köpükle veya battaniyeyle kaplayın ve yankılanmayı azaltmak için stüdyoda halı veya mobilya bulundurun.
                    </p>

                    <h3 className='fs-6 fw-bold mt-4'>Yaratıcı olun.</h3>
                    <p className='mb-4'>
                        Öğrenciler perde arkasını görmez. İsterseniz ses yalıtımı sağlamak için etrafı yastıklarla kaplayın; topluluktaki diğer eğitmenlerle paylaşmadığınız sürece bunu yalnızca siz bilebilirsiniz!
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

export default Setup