import React, { useState } from 'react'
import InstructorPagesNavbarSidebar from '../../Layouts/InstructorPagesNavbarSidebar'
import '../../css/InstructorProfile.css'
import { Link } from 'react-router-dom'
import { Image, } from 'react-bootstrap'
import { useFormik } from 'formik';
import { UpdateUserProfilePhoto } from '../../Services/UserService'
import { toast } from "react-toastify";
const EditPhoto = () => {
    const [photo, setPhoto] = useState()

    const formik = useFormik({
        initialValues: {
            photo: ''
        },
        onSubmit: async (values) => {
            try {
                let form_data = new FormData();
                form_data.append('photo', photo, photo.name);
                await UpdateUserProfilePhoto(form_data)
                toast.success('Değişiklikler başarıyla kaydedildi.', {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            } catch (error) {
                toast.error('Hata oluştu ! ' + error.request.response, {
                    position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000, theme: 'colored'
                });
            }
        },
        validateOnChange: (e) => {
            setPhoto(e.target.files[0])
            var reader = new FileReader();
            reader.onload = function () {
                document.getElementById("profile-image-preview").src = reader.result;
            }
            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0]);
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
                    <div className='image-preview'>
                        <h4>Görüntü önizleme</h4>
                        <div>
                            Minimum 200x200 piksel, Maksimum 6000x6000 piksel
                        </div>
                    </div>
                    <div>
                        <div className="image-upload-preview-wrapper">
                            <div className="image-upload-preview-with-crop-image-wrapper">
                                <Image id='profile-image-preview' alt="image-preview" height={200} width={200} src={"https://img-c.udemycdn.com/user/200_H/anonymous_3.png"} />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: "12rem" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='profile-image-input-group'>
                                <input hidden accept="image/*" type="file" id="files" name='photo' onChange={formik.validateOnChange}
                                    value={formik.values.photo} />
                                <label htmlFor='files' className='image-upload-button'>Görüntü Yükle</label>
                            </div>

                            <button type='submit' className='user-profile-save-button'>
                                Kaydet
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default EditPhoto