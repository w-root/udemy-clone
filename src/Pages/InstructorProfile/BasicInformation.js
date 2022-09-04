import React, { useEffect, useState } from 'react'
import InstructorPagesNavbarSidebar from '../../Layouts/InstructorPagesNavbarSidebar'
import '../../css/InstructorProfile.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import { GetUserProfileInformation, UpdateUserProfile } from '../../Services/UserService'

const BasicInformation = () => {
    const [profile, setProfile] = useState("")

    const GetInformations = async () => {
        try {
            const response = await GetUserProfileInformation()
            setProfile(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetInformations()
    }, [])

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
            console.log(values)
            profile.title = values.title
            profile.language = values.language
            profile.website = values.website
            profile.twitter = values.twitter
            profile.facebook = values.facebook
            profile.linkedin = values.linkedin
            profile.youtube = values.youtube

            try {
                const response = await UpdateUserProfile(profile)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <div>
            <InstructorPagesNavbarSidebar></InstructorPagesNavbarSidebar>

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
                            <form >
                                <div className='user-profile-input-group' >
                                    <label>Ad</label>
                                    <input className='user-profile-input user-name form-control'
                                        onChange={formik.handleChange} value={formik.values.firstname}
                                        id="firstname" name="firstname" required type="text" />
                                </div>

                                <div className='user-profile-input-group' >
                                    <label>Soyadı</label>
                                    <input className='user-profile-input user-name form-control'
                                        onChange={formik.handleChange} value={formik.values.lastname}
                                        id="lastname" name="lastname" required type="text" />
                                </div>

                                <div className='user-profile-input-group' >
                                    <label>Başlık</label>
                                    <input className='user-profile-input user-name form-control'
                                        onChange={formik.handleChange} value={formik.values.title}
                                        id="title" name="title" required type="text" placeholder="Udemy'de eğitmen" />
                                </div>

                                <div className='user-profile-input-group' >
                                    <label>Özgeçmiş</label>
                                    <div className='editor'>
                                        <CKEditor
                                            id='description'
                                            name='description'
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
                                <label>Dil</label>
                                <select onChange={formik.handleChange} value={formik.values.language}
                                    id='language' name='language' className="user-profile-input">
                                    <option value={"Türkçe"}>Türkçe</option>
                                    <option value={"Almanca"}>Almanca</option>
                                    <option value={"İngilizce"}>İngilizce</option>
                                    <option value={"İspanyolca"}>İspanyolca</option>
                                </select>
                                <div className='user-profile-input-group'>

                                </div>

                            </form>
                            <button type='button' onClick={formik.handleSubmit} className='user-profile-save-button'>
                                Kaydet
                            </button>
                        </Col>

                        <Col xs={12} md={5}>
                            <form >
                                <div className='user-profile-input-group' >
                                    <label>Web sitesi</label>
                                    <input className='user-profile-input user-name form-control'
                                        onChange={formik.handleChange} value={formik.values.website}
                                        name='website' id='website' required placeholder='Url' type="text" />
                                </div>

                                <div className="user-profile-input-group mb-3">
                                    <label>Twitter</label>
                                    <div className='d-flex'>
                                        <span className="input-group-text" id="basic-addon3">http://www.twitter.com/</span>
                                        <input type="text" placeholder='Kullanıcı adı'
                                            onChange={formik.handleChange} value={formik.values.twitter}
                                            name='twitter' id='twitter' className="user-profile-input user-name form-control" aria-describedby="basic-addon3" />
                                    </div>
                                </div>

                                <div className="user-profile-input-group mb-3">
                                    <label>Facebook</label>
                                    <div className='d-flex'>
                                        <span className="input-group-text" id="basic-addon3">http://www.facebook.com/</span>
                                        <input type="text" placeholder='Kullanıcı adı'
                                            onChange={formik.handleChange} value={formik.values.facebook}
                                            className="user-profile-input user-name form-control" name='facebook' id='facebook' aria-describedby="basic-addon3" />
                                    </div>
                                </div>

                                <div className="user-profile-input-group mb-3">
                                    <label>Linkedin</label>
                                    <div className='d-flex'>
                                        <span className="input-group-text" id="basic-addon3">http://www.linkedin.com/</span>
                                        <input type="text" placeholder='Kaynak kimliği'
                                            onChange={formik.handleChange} value={formik.values.linkedin}
                                            className="user-profile-input user-name form-control" name='linkedin' id='linkedin' aria-describedby="basic-addon3" />
                                    </div>

                                </div>

                                <div className="user-profile-input-group mb-3">
                                    <label>Youtube</label>
                                    <div className='d-flex'>
                                        <span className="input-group-text" id="basic-addon3">http://www.youtube.com/</span>
                                        <input type="text" placeholder='Kullanıcı adı'
                                            onChange={formik.handleChange} value={formik.values.youtube}
                                            className="user-profile-input user-name form-control" name='youtube' id='youtube' aria-describedby="basic-addon3" />

                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>

                </div>
            </div>

        </div >
    )
}

export default BasicInformation