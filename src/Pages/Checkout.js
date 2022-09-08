import React from "react";
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import '../css/Checkout.css'
import { BsCreditCardFill } from 'react-icons/bs'
import Cookies from 'js-cookie'
import { BuyACourse } from '../Services/CourseService'
import { toast } from "react-toastify";

const Checkout = () => {
    const CompleteThePayment = async () => {
        try {
            var cart = JSON.parse(localStorage.getItem("cart"));
            cart[0].students.push(Cookies.get("username"))
            const response = await BuyACourse(cart[0])
            toast.success('Satın alma başarıyla tamamlandı.', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                theme: 'colored'
            });
            setTimeout(() => {
                window.location.href = "/my-courses/learning"
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div >
            <Container >
                <Row>
                    <Col className='ms-auto' md={5} >
                        <div className='marketplace-checkout-overview'>
                            <div className='marketplace-checkout--header'>
                                <h1>
                                    Ödeme Bilgileri
                                </h1>
                            </div>
                            <div className='billing-address'>
                                <h2>
                                    Fatura Adresi
                                </h2>
                                <Form className='border-1 justify-content-between'  >
                                    <label>
                                        Ülke
                                    </label>
                                    <div>
                                        <Form.Select style={{ border: "1px solid black", fontSize: "14px" }}
                                            className="bg-white w-50 rounded-0 p-2 fw-bold shadow-none">
                                            <option>Türkiye</option>
                                        </Form.Select>
                                    </div>
                                </Form>
                                <div className="checkout-term">
                                    Udemy, yasalar gereği belirli vergi bölgelerinde yapılan satın alımlar için geçerli
                                    işlem vergilerini toplamakla yükümlüdür.
                                </div>
                            </div>

                            <div className='payment-method'>
                                <h2 className="payment-menthot-header">Ödeme Yöntemi</h2>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <div className='accordion-item-header'>
                                                    <span className='accordion-item-header-payment-method'><BsCreditCardFill size={26} /></span>  Kredi/Hesap Kartı
                                                </div>
                                                <div className='ms-auto'>
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png' />
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://seeklogo.com/images/T/troy-logo-6A31281792-seeklogo.com.png' />
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' />
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://www.svgrepo.com/show/328116/discover.svg' />
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://w7.pngwing.com/pngs/851/123/png-transparent-diners-club-international-credit-card-american-express-mastercard-visa-credit-card-blue-text-service.png' />
                                                    <Image className='accordion-item-header-payment-method-options' width={42} height={28} src='https://seeklogo.com/images/A/amex-american-express-logo-8AA7F1A998-seeklogo.com.png' />
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <form>
                                                    <div className='credit-card-input-group' >
                                                        <label>Kart üzerindeki isim</label>
                                                        <input className='credit-card-input credit-card-name form-control'
                                                            required type="text" placeholder="Kart üzerindeki isim" />
                                                    </div>
                                                    <div className='credit-card-input-group' >
                                                        <label>Kart Numarası</label>
                                                        <input className='credit-card-input credit-card-no form-control'
                                                            required type="text" placeholder="0000 0000 0000 0000" />
                                                    </div>
                                                    <div className='credit-card-input-group d-flex justify-content-between' >
                                                        <div>
                                                            <label>CVC/CVV</label>
                                                            <input className='credit-card-input credit-card-cvc form-control'
                                                                required type="text" placeholder="CVC" />
                                                        </div>
                                                        <div>
                                                            <label>Sona erme tarihi</label>
                                                            <input className='credit-card-input credit-card-exp-date form-control'
                                                                required type="text" placeholder="AA/YY" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='order-summary'>
                                <h2>
                                    Sipariş
                                </h2>
                                <div className='order-items d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <Image width={32} height={32} />
                                        <div>
                                            Asp.Net Core 5.0 ile Adım Adım Web Geliştirme
                                        </div>
                                    </div>
                                    <div>
                                        ₺429,99
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className='me-auto'>
                        <div className='checkout-summary'>
                            <div>
                                <h2>
                                    Özet
                                </h2>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        Orijinal Fiyat:
                                    </div>
                                    <div>₺429,99</div>
                                </div>
                                <hr />
                                <div className='total-price d-flex justify-content-between'>
                                    <div>
                                        Toplam:
                                    </div>
                                    <div>₺429,99</div>
                                </div>
                            </div>

                            <div>
                                <div className='terms-of-service' >
                                    Satın alma işleminizi tamamlayarak bu Hizmet Şartları'nı kabul etmiş olursunuz.
                                </div>
                                <button onClick={CompleteThePayment} className='btn-complete-the-payment'>
                                    Ödemeyi Tamamla
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default Checkout