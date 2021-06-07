import Sidebar from '../components/sidebar';
import styles from '../styles/dashboard.module.css'
import withAuth from "../components/auth";
import {useRouter} from 'next/router'

const Dashboard = () => {

    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem('admin_token')
        router.push('/')
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_details}>
                    <h1>Dashboard</h1>
                    <h4>Welcome Bosun Jones</h4>
                </div>
                <div onClick={handleClick} className={styles.logout}>
                    Log Out
                </div>
            </div>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.main}>
                    <h1>Dashboard, It works!!!</h1>
                </div>
            </div>

        </div>
    )
}

export default withAuth(Dashboard);