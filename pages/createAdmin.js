import Sidebar from '../components/sidebar';
import styles from '../styles/createAdmin.module.css'
import { Formik, Field, Form } from 'formik';
import axios from 'axios'
import withAuth from "../components/auth";
import {useRouter} from 'next/router'

const CreateAdmin = () => {

    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem('admin_token')
        router.push('/')
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_details}>
                    <h4>Create Admin</h4>
                    <p>Dashboard / All Admin / Create Admin</p>
                </div>
                <div onClick={handleClick} className={styles.logout}>
                    Log Out
                </div>
            </div>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.adminForm}>
                        <h4>CREATE ADMIN</h4>
                        <div>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    sex: '',
                                    state_id: '',
                                    city_id: '',
                                    country_id: '',
                                    password: '',
                                    about: '',
                                    profile_image: '',
                                    facebook: '',
                                    twitter: '',
                                    instagram: '',
                                    tiktok: '',
                                    youtube: '',
                                    linkedin: '',
                                    podcastCategory: '',
                                    podcastCover: '',
                                    status: ''
                                }}
                                onSubmit={async (values) => {

                                    axios.post('https://xchangeapp-api.herokuapp.com/api/v1/admin', {
                                    headers: {
                                        "body": values,
                                        'Accept': 'application/json',
                                        'Token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC94Y2hhbmdlYXBwLWFwaS5oZXJva3VhcHAuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjIyNzMyODc3LCJleHAiOjE2MjI3MzY0NzcsIm5iZiI6MTYyMjczMjg3NywianRpIjoiRkxhZk41YXVacjFVbUgzOCIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.bkb70-iYg5pD6vyEQQnBXDIVb5ztt2yhn5DqBnlBTNI"
                                        }
                                    })
                                    .then(res => console.log(res.data), )
                                    
                                    .catch(err => console.log(err));
                                    // window.location.reload()
                                }}
                                >
                                <Form className={styles.form}>
                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="firstName">First Name</label>
                                            <Field className={styles.field} id="firstName" name="firstName" placeholder="Jane" />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName">Last Name</label>
                                            <Field className={styles.field} id="lastName" name="lastName" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <Field
                                            className={styles.field}
                                            id="email"
                                            name="email"
                                            placeholder="jane@acme.com"
                                            type="email"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone">Phone Number</label>
                                            <Field className={styles.field} id="phone" name="phone" placeholder="Phone Number" />
                                        </div>
                                    </div>

                                    <label htmlFor="sex">Sex</label>
                                    <select className={styles.field} name="sex" id="sex">
                                        <option value="male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>

                                    <label htmlFor="country_id">Country</label>
                                    <select className={styles.field} name="country_id" id="country_id">
                                        <option value="nigeria">Nigeria</option>
                                        <option value="ghana">Ghana</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>

                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="state_id">State</label>
                                            <select className={styles.field} name="state_id" id="state_id">
                                                <option value="lagos">Lagos</option>
                                                <option value="oyo">Oyo</option>
                                                <option value="osun">Osun</option>
                                                <option value="rivers">Rivers</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="city_id">City</label>
                                            <Field className={styles.field} id="city_id" name="city_id" placeholder="Ikeja" />
                                        </div>
                                    </div>

                                    <label htmlFor="about">About Admin</label>
                                    <textarea className={styles.field} rows="10" cols="50" name="about" />

                                    <label htmlFor="profile_image">Profile Picture:</label>
                                    <input className={styles.field} type="file" accept="image/jpeg" id="profile_image" name="profile_image" />

                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="facebook">Facebook Profile</label>
                                            <Field className={styles.field} id="facebook" name="facebook" />
                                        </div>

                                        <div>
                                            <label htmlFor="twitter">Twitter Handle</label>
                                            <Field className={styles.field} id="twitter" name="twitter" />
                                        </div>
                                    </div>

                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="instagram">Instagram Handle</label>
                                            <Field className={styles.field} id="instagram" name="instagram" />
                                        </div>

                                        <div>
                                            <label htmlFor="tiktok">Tiktok Handle</label>
                                            <Field className={styles.field} id="tiktok" name="tiktok" />
                                        </div>
                                    </div>
                                    
                                    <div className={styles.formSplit}>
                                        <div>
                                            <label htmlFor="youtube">YouTube Page</label>
                                            <Field className={styles.field} id="youtube" name="youtube" />
                                        </div>

                                        <div>
                                            <label htmlFor="linkedin">Linkedin Profile</label>
                                            <Field className={styles.field} id="linkedin" name="linkedin" />
                                        </div>
                                    </div>
                                    
                                    <label htmlFor="role">Role</label>
                                    <select className={styles.field} name="role" id="role">
                                        <option value="administrator">Administrator</option>
                                        <option value="storeAuthor">Store Author</option>
                                        <option value="ordersManager">Orders Manager</option>
                                    </select>
                                    
                                    <div className={styles.field}>
                                        <h2>Administrator</h2>
                                        <p>This user will have access to every module and feature of the system</p>
                                    </div>

                                    <label htmlFor="podcastCategory">Podcast Category</label>
                                    <select className={styles.field} name="podcastCategory" id="podcastCategory">
                                        <option value="business">Business</option>
                                        <option value="sport">Sport</option>
                                        <option value="games">Games</option>
                                    </select>

                                    <label htmlFor="podcastCover">Podcast Cover:</label>
                                    <input className={styles.field} type="file" id="podcastCover" name="podcastCover" />

                                    <label htmlFor="status">Status</label>
                                    <select className={styles.field} name="status" id="status">
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>

                                    <button className={styles.field} type="submit">Create Account</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withAuth(CreateAdmin);
