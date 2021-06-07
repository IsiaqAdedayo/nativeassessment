import Sidebar from '../components/sidebar';
import styles from '../styles/singleAdmin.module.css'
import { connect } from 'react-redux';
import withAuth from "../components/auth";
import {useRouter} from 'next/router'
import Loader from 'react-loader-spinner'

const SingleAdmin = ({userData}) => {

    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem('admin_token')
        router.push('/')
    }
    
    // console.log(userData)
    return(
        userData ? (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.header_details}>
                        <h4>Manage Single Admin</h4>
                        <p>Dashboard / Manage Single Admin</p>
                    </div>
                    <div onClick={handleClick} className={styles.logout}>
                        Log Out
                    </div>
                </div>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.profile}>
                        <div className={styles.profileWrapper}>
                            <div className={styles.singleAdmin}>
                                <div className={styles.adminProfile}>
                                    <h6>SINGLE ADMIN</h6>
                                    <div><h6>Edit Profile</h6></div>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Full Name:</p>
                                    <p>{userData.name.first} {userData.name.last}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Email Address:</p>
                                    <p>{userData.email}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Phone NUmber:</p>
                                    <p>{userData.phone}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Sex:</p>
                                    <p>{userData.gender}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>DOB:</p>
                                    <p>{userData.dob.date ? userData.dob.date.substring(0,10) : '' }</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Country:</p>
                                    <p>{userData.location.country}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>City:</p>
                                    <p>{userData.location.city}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>State:</p>
                                    <p>{userData.location.state}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Status:</p>
                                    <p>Active</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Role:</p>
                                    <p>Administrator</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Date Created:</p>
                                    <p>{userData.registered.date ? userData.registered.date.substring(0,10) : '' }</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Facebook:</p>
                                    <p>https://facebook.com/{userData.login.username}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Twitter:</p>
                                    <p>https://twitter.com/{userData.login.username}</p>
                                </div>
                                <div className={styles.adminProfile}>
                                    <p style={{fontWeight:"bold"}}>Linkedin:</p>
                                    <p>https://linkedin.com/{userData.login.username}</p>
                                </div>
                                

                            </div>
                            {/* <div className={styles.singleAbout}> about</div> */}
                        </div>
                        <div className={styles.profilePicture}> 
                            { userData && userData.picture && ( <img className={styles.profilePicture_img} src={userData.picture.large} alt={userData.name}/>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        ) : (
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <Loader 
                type="Puff"
                color = "#f17d11"
                height = {100}
                width = {100}
                />
            </div>
        )
    )
}

const mapStateToProps = ({ user }) => {
    return{
        userData: user.mainUser,
    }
}

// export default withAuth(singleAdmin);
export default withAuth(connect(mapStateToProps,null )(SingleAdmin))