import React from 'react'
import InstructorPagesNavbarSidebar from '../../Layouts/InstructorPagesNavbarSidebar'
import '../../css/InstructorProfile.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const EditPhoto = () => {
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

                    edit photo

                </div>
            </div>

        </div>


    )
}

export default EditPhoto