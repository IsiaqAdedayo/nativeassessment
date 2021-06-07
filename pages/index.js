import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import styles from '../styles/Home.module.css';
import axios from 'axios'
import {useRouter} from 'next/router'
import { connect } from 'react-redux';
import { Redirect, Router, useLocation, useHistory } from 'react-router-dom';


export const Home = ({}) => {

  const [passwordCheck, setPasswordCheck] = useState(false);
  const [token, setToken] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const router = useRouter();
  const hostname = typeof window !== 'undefined' && window.location.pathname ? window.location.pathname : '';
        // console.log(hostname)

  useEffect(() => {
    setAccessKey(localStorage.getItem('admin_token'));  
  }, [])
  
  if((accessKey) && hostname){
    location.replace("/dashboard")
  }

     

  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h5 className={styles.title}>Admin</h5>

        <p className={styles.description}> Sign in into your account to continue </p>

        
          <div className={styles.card}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={(values) => {
                // console.log(values)
                axios.post('https://xchangeapp-api.herokuapp.com/api/auth/login', values)
                .then(res => {if( res && res.data && res.data.access_token){
                  localStorage.setItem('admin_token', res.data.access_token)
                  setPasswordCheck(false)
                  setToken(res.data.access_token)
                  router.push('/dashboard')
                }})

                .catch(err =>{
                  if(err){
                    console.log(err) ,setPasswordCheck(true)
                  }
                }  );
                
              } }
            >
              <Form className={styles.form}>
                <label htmlFor="email">Email</label>
                <Field
                  className={styles.field}
                  id="email"
                  name="email"
                  type="email"
                  required
                />

                <label htmlFor="password">Password</label>
                <Field
                  className={styles.field}
                  type='password'
                  name='password'
                  required
                />
                {!token && passwordCheck ? (
                  <p class="alert alert-danger mb-2" role="alert">Incorrect Email or Password!!!</p>
                ):null
              }
                <button className={styles.signin} type="submit">Sign In </button>
              </Form>
            </Formik>
          </div>

          
      </main>

    </div>
  )
}



const mapDispatchToProps = dispatch => {
  return{
      isLoading: () => dispatch(isLoading())
  }
}


export default connect(null, mapDispatchToProps)(Home)