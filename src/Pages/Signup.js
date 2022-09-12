import React, { useState } from 'react'
import { useFormik } from 'formik';
import '../css/Signup.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import { UserSignup } from '../Services/UserService';
import Cookies from 'js-cookie'

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'İsim çok kısa!').required('Bu alan zorunludur !'),
    email: Yup.string().email('Email formatına uygun değil !').required('Bu alan zorunludur !'),
    password1: Yup.string().min(8, 'Minimum 8 karakter olmalıdır !').matches(/[a-zA-Z]+/, "Şifrede en az bir tane harf bulunmalıdır !").required('Bu alan zorunludur !'),
});

const Signup = () => {
    const [error, setError] = useState()

    const Register = async (user) => {
        try {
            const response = await UserSignup(user)
            Cookies.set('sessionid', response.data.key)
            Cookies.set('username', user.username)
            window.location.href = "/"
        } catch (error) {
            setError(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password1: '',
            password2: '',
        },
        onSubmit: (values) => {
            values.password2 = values.password1
            Register(values)
        },
        validationSchema: SignupSchema
    });

    return (
        <Container style={{ width: "25rem" }}>
            <div className='my-5'>
                <div className='fs-6 fw-bold' >Kaydolun ve Öğrenmeye Başlayın </div>
                {error && <div className='alert alert-danger fw-bold rounded-0 mt-3'>
                    Hesabınız oluşturulurken bir sorun meydana geldi.
                    E-posta adresinizin ve kullanıcı adınızın doğru yazılıp yazılmadığını kontrol edin.
                </div>}
                <div className='my-3'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='input-group'>
                            <input className='form-item' id="username" name="username" placeholder="Tam ad"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.errors.username && formik.touched.username ? (
                                <div className='text-danger'>{formik.errors.username}</div>
                            ) : null}
                        </div>

                        <div className='input-group'>
                            <input
                                className='form-item'
                                id="email"
                                name="email"
                                placeholder="E-Posta"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-danger'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className='input-group'>
                            <input className='form-item' type="password" id="password1" name="password1" placeholder="Şifre"
                                onChange={formik.handleChange}
                                value={formik.values.password1}
                            />
                            {formik.errors.password1 && formik.touched.password1 ? (
                                <div className='text-danger'>{formik.errors.password1}</div>
                            ) : null}
                        </div>

                        <div className='d-flex'>
                            <input name="subscribeToEmails"
                                className="d-inline real-toggle-input" id="checkbox--7" type="checkbox" />
                            <label className="toggle-input-container ms-2 mt-3" htmlFor="checkbox--7">
                                Bana özel teklifler, kişiselleştirilmiş öneriler ve öğrenim ipuçları gönder.
                            </label>
                        </div>
                        <button className='btn-signup' type="submit">Kaydol</button>
                    </form>
                </div>

                <div className='text-center'>
                    <div className='form-text-1'>
                        Kaydolurken Kullanım Şartlarımızı ve Gizlilik Politikamızı kabul edersiniz.
                    </div>
                    <hr />
                    <div className='form-text-2'>
                        Zaten hesabınız var mı? <Link to={"join/login"}>
                            Oturum açın</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Signup