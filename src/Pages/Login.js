import React from 'react'
import { useFormik } from 'formik';
import '../css/Login.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import { UserSignin } from '../Services/UserService';
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { GrApple } from 'react-icons/gr'
import Cookies from 'js-cookie'
import { useState } from 'react';

const SigninSchema = Yup.object().shape({
    username: Yup.string().min(2, 'İsim çok kısa!').required('Bu alan zorunludur !'),
    password: Yup.string().min(8, 'Minimum 8 karakter olmalıdır !').required('Bu alan zorunludur !'),
});

const Login = () => {
    const [error, setError] = useState()
    const UserLogin = async (user) => {
        try {
            const response = await UserSignin(user)
            Cookies.set('sessionid', response.data.key)
            Cookies.set('username', user.username)
            window.location.href = "/"
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            UserLogin(values)
        },
        validationSchema: SigninSchema
    });

    return (
        <Container style={{ width: "25rem" }}>
            <div className='my-5'>
                <div className='fs-6 fw-bold' >Udemy hesabınızda oturum açın </div>
                <hr />
                <div className='btn-login-buttons'>
                    <button className='btn-login btn-login-facebook'>
                        <MdFacebook size={27} className='me-2' />
                        <span>Facebook ile devam et</span>
                    </button>

                    <button className='btn-login btn-login-google'>
                        <FcGoogle size={27} className='me-2' />
                        <span>Google ile devam et</span>
                    </button>

                    <button className='btn-login btn-login-apple'>
                        <GrApple size={27} className='me-2' />
                        <span>Apple ile devam et</span>
                    </button>
                </div>
                <div className='my-3'>
                    {error &&
                        <div className='alert alert-danger rounded-0'>
                            Oturum açılırken bir sorun oluştu. E-posta adresinizi ve şifrenizi kontrol edin veya bir hesap oluşturun.
                        </div>}
                    <form onSubmit={formik.handleSubmit}>
                        <div className='input-group'>
                            <input className='form-item' id="username" name="username" placeholder="Kullanıcı adı"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.errors.username && formik.touched.username ? (
                                <div className='text-danger'>{formik.errors.username}</div>
                            ) : null}

                        </div>
                        <div className='input-group'>
                            <input className='form-item' type="password" id="password" name="password" placeholder="Şifre"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-danger'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <button className='btn-signin' type="submit">Oturum Aç</button>
                    </form>
                </div>

                <div className='text-center'>
                    <div >
                        veya <Link to={""}>
                            Şifremi unuttum</Link>
                    </div>
                    <div >
                        Hesabınız yok mu?  <Link to={"join/signup"}>
                            Kaydol</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login