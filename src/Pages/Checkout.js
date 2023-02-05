import React from "react";
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import '../css/Checkout.css'
import { BsCreditCardFill } from 'react-icons/bs'
import { BuyACourse } from '../Services/CourseService'
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompleteThePaymentSchema = Yup.object().shape({
    cardName: Yup.string().required('Bu alan zorunludur !').min(2, 'İsim çok kısa!'),
    cardNo: Yup.string().length(16, "16 karakter olmalıdır")
        .required('Bu alan zorunludur !').matches(/^[0-9]+$/, "Sadece sayılardan oluşmalıdır"),
    cvc: Yup.string().length(3, "3 karakter olmalıdır")
        .required('Bu alan zorunludur !').matches(/^[0-9]+$/, "Sadece sayılardan oluşmalıdır"),
    expirationDate: Yup.string().length(5, '5 karakter olmalıdır ! ( / ile birlikte)').required('Bu alan zorunludur !'),
});

const Checkout = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))

    const CompleteThePayment = async () => {
        try {
            await BuyACourse(cart)
            toast.success('Satın alma başarıyla tamamlandı.', {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
            });
            localStorage.clear()
            setTimeout(() => {
                window.location.href = "/my-courses/learning"
            }, 1000);
        } catch (error) {
            toast.error('Hata oluştu ! ' + error.request.response, {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
            });
        }
    }

    const formik = useFormik({
        initialValues: {
            cardName: '',
            cardNo: '',
            cvc: '',
            expirationDate: '',
        },
        onSubmit: () => {
            CompleteThePayment()
        },
        validationSchema: CompleteThePaymentSchema
    });

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
                                                            onChange={formik.handleChange}
                                                            value={formik.values.cardName}
                                                            name="cardName" id="cardName" type="text" placeholder="Kart üzerindeki isim" />
                                                        {formik.errors.cardName && formik.touched.cardName ? (
                                                            <div className='text-danger'>{formik.errors.cardName}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className='credit-card-input-group' >
                                                        <label>Kart Numarası</label>
                                                        <input className='credit-card-input credit-card-no form-control'
                                                            maxLength={16}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.cardNo}
                                                            name="cardNo" id="cardNo" type="text" placeholder="0000000000000000" />
                                                        {formik.errors.cardNo && formik.touched.cardNo ? (
                                                            <div className='text-danger'>{formik.errors.cardNo}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className='credit-card-input-group d-flex justify-content-between' >
                                                        <div>
                                                            <label>CVC/CVV</label>
                                                            <input className='credit-card-input credit-card-cvc form-control'
                                                                onChange={formik.handleChange}
                                                                maxLength={3}
                                                                value={formik.values.cvc}
                                                                name="cvc" id="cvc" type="text" placeholder="CVC" />
                                                            {formik.errors.cvc && formik.touched.cvc ? (
                                                                <div className='text-danger'>{formik.errors.cvc}</div>
                                                            ) : null}
                                                        </div>
                                                        <div>
                                                            <label>Sona erme tarihi</label>
                                                            <input className='credit-card-input credit-card-exp-date form-control'
                                                                onChange={formik.handleChange}
                                                                value={formik.values.expirationDate}
                                                                name="expirationDate" id="expirationDate" type="text" placeholder="AA/YY" />
                                                            {formik.errors.expirationDate && formik.touched.expirationDate ? (
                                                                <div className='text-danger'>{formik.errors.expirationDate}</div>
                                                            ) : null}

                                                        </div>
                                                    </div>

                                                    <div className='reminding'>
                                                        Forma rastgele veriler girmelisiniz
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
                                {cart.map(c => {
                                    return <div key={c.id} className='order-items d-flex justify-content-between my-2'>
                                        <div className='d-flex'>
                                            <Image src={c.image} width={32} height={32} />
                                            <div>
                                                {c.title}
                                            </div>
                                        </div>
                                        <div>
                                            ₺{c.price}
                                        </div>
                                    </div>
                                })}
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
                                    <div>
                                        ₺{
                                            cart.length > 0 &&
                                            cart.reduce((acc, obj) => acc + parseFloat(obj.price), 0.00)
                                        }
                                    </div>
                                </div>
                                <hr />
                                <div className='total-price d-flex justify-content-between'>
                                    <div>
                                        Toplam:
                                    </div>
                                    <div>
                                        ₺{
                                            cart.length > 0 &&
                                            cart.reduce((acc, obj) => acc + parseFloat(obj.price), 0.00)
                                        }</div>
                                </div>
                            </div>

                            <div>
                                <div className='terms-of-service' >
                                    Satın alma işleminizi tamamlayarak bu Hizmet Şartları'nı kabul etmiş olursunuz.
                                </div>
                                <button type="submit" onClick={formik.handleSubmit} className='btn-complete-the-payment'>
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