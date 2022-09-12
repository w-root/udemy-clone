import React from 'react'
import InstructorPagesNavbarSidebar from '../../Layouts/InstructorPagesNavbarSidebar'
import '../../css/InstructorProfile.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import { UpdateUserProfile } from '../../Services/UserService'
import { GlobalContext, useContext } from '../../Context/MainContext'
import { toast } from "react-toastify";

const BasicInformation = () => {
    const { profile } = useContext(GlobalContext)

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            title: '',
            bio: '',
            language: '',
            website: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
        },
        onSubmit: async (values) => {
            FormValuesControl(profile, values)
            try {
                await UpdateUserProfile(profile)
                toast.success('Değişiklikler başarıyla kaydedildi.', {
                    position: toast.POSITION.BOTTOM_RIGHT, theme: 'colored'
                });
            } catch (error) {
                toast.error('Hata oluştu ! ' + error.request.response, {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            }
        },
    });
    const FormValuesControl = (profile, values) => {
        for (let key in values) {
            if (values[key] !== "")
                profile[key] = values[key]
        }
    }
    return (
        <div>
            <InstructorPagesNavbarSidebar></InstructorPagesNavbarSidebar>
            {profile &&
                <div className='profile-settings'>
                    <div className='profile-settings-header'>
                        <h1>
                            Profil ve Ayarlar
                        </h1>
                    </div>
                    <div className='profile-settings-nav-tabs'>
                        <div className='profile-settings-nav-tab navtab-udemy-profile'>
                            <button><Link to={"/instructor/profile/basic-information"}> Udemy profili </Link> </button>
                        </div>
                        <div className='profile-settings-nav-tab navtab-profile-image'>
                            <button> <Link to={"/instructor/profile/photo"}> Profile Resmi </Link>  </button>
                        </div>
                        <div className='profile-settings-nav-tab navtab-privacy'>
                            <button> <Link to={"/instructor/profile/privacy"}> Gizlilik ayarları </Link>  </button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <Row>
                            <Col xs={12} md={5}>
                                {profile && <form >
                                    <div className='user-profile-input-group' >
                                        <label>Ad</label>
                                        <input className='user-profile-input user-name form-control'
                                            onChange={formik.handleChange} defaultValue={profile.firstname}
                                            id="firstname" name="firstname" required type="text" />
                                    </div>

                                    <div className='user-profile-input-group' >
                                        <label>Soyadı</label>
                                        <input className='user-profile-input user-name form-control'
                                            onChange={formik.handleChange} defaultValue={profile.lastname}
                                            id="lastname" name="lastname" required type="text" />
                                    </div>

                                    <div className='user-profile-input-group' >
                                        <label>Başlık</label>
                                        <input className='user-profile-input user-name form-control'
                                            onChange={formik.handleChange} defaultValue={profile.title}
                                            id="title" name="title" required type="text" placeholder="Udemy'de eğitmen" />
                                    </div>

                                    <div className='user-profile-input-group' >
                                        <label>Özgeçmiş</label>
                                        <div className='editor'>
                                            <CKEditor
                                                id='bio'
                                                name='bio'
                                                className='basic-answer-input form-control'
                                                editor={ClassicEditor}
                                                data={profile.bio || ''}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData()
                                                    profile.bio = data
                                                }}
                                            />
                                        </div>
                                        <div className='mb-4 mt-2' style={{ color: "#6A6F73", fontSize: "12px" }}>
                                            Biyografiniz en az 50 karakter uzunluğunda olmalıdır; bağlantılara ve kupon kodlarına izin verilmez.
                                        </div>
                                    </div>

                                    <div className='user-profile-input-group'>
                                        <label>Dil</label>
                                        <select onChange={formik.handleChange} defaultValue={profile.language}
                                            id='language' name='language' className="user-profile-input">
                                            <option value={"Türkçe"}>Türkçe</option>
                                            <option value={"Almanca"}>Almanca</option>
                                            <option value={"İngilizce"}>İngilizce</option>
                                            <option value={"İspanyolca"}>İspanyolca</option>
                                        </select>
                                    </div>

                                </form>}
                                <button type='button' onClick={formik.handleSubmit} className='user-profile-save-button'>
                                    Kaydet
                                </button>
                            </Col>

                            <Col xs={12} md={5}>
                                <form >
                                    <div className='user-profile-input-group' >
                                        <label>Web sitesi</label>
                                        <input className='user-profile-input user-name form-control'
                                            onChange={formik.handleChange} defaultValue={profile.website}
                                            name='website' id='website' required placeholder='Url' type="text" />
                                    </div>

                                    <div className="user-profile-input-group mb-3">
                                        <label>Twitter</label>
                                        <div className='d-flex'>
                                            <span className="input-group-text" id="basic-addon3">http://www.twitter.com/</span>
                                            <input type="text" placeholder='Kullanıcı adı'
                                                onChange={formik.handleChange} defaultValue={profile.twitter}
                                                name='twitter' id='twitter' className="user-profile-input user-name form-control" aria-describedby="basic-addon3" />
                                        </div>
                                    </div>

                                    <div className="user-profile-input-group mb-3">
                                        <label>Facebook</label>
                                        <div className='d-flex'>
                                            <span className="input-group-text" id="basic-addon3">http://www.facebook.com/</span>
                                            <input type="text" placeholder='Kullanıcı adı'
                                                onChange={formik.handleChange} defaultValue={profile.facebook}
                                                className="user-profile-input user-name form-control" name='facebook' id='facebook' aria-describedby="basic-addon3" />
                                        </div>
                                    </div>

                                    <div className="user-profile-input-group mb-3">
                                        <label>Linkedin</label>
                                        <div className='d-flex'>
                                            <span className="input-group-text" id="basic-addon3">http://www.linkedin.com/</span>
                                            <input type="text" placeholder='Kaynak kimliği'
                                                onChange={formik.handleChange} defaultValue={profile.linkedin}
                                                className="user-profile-input user-name form-control" name='linkedin' id='linkedin' aria-describedby="basic-addon3" />
                                        </div>
                                    </div>

                                    <div className="user-profile-input-group mb-3">
                                        <label>Youtube</label>
                                        <div className='d-flex'>
                                            <span className="input-group-text" id="basic-addon3">http://www.youtube.com/</span>
                                            <input type="text" placeholder='Kullanıcı adı'
                                                onChange={formik.handleChange} defaultValue={profile.youtube}
                                                className="user-profile-input user-name form-control" name='youtube' id='youtube' aria-describedby="basic-addon3" />
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>}
        </div >
    )
}

export default BasicInformation