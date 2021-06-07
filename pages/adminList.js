import { useState } from 'react';
import DataTable from '../components/DataTable';
import Sidebar from '../components/sidebar';
import styles from '../styles/adminList.module.css'
import withAuth from "../components/auth";
import {useRouter} from 'next/router'


const AdminList = () => {
    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem('admin_token')
        router.push('/')
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_details}>
                    <h4>Dashboard</h4>
                    <p>Welcome Bosun Jones</p>
                </div>
                <div onClick={handleClick} className={styles.logout}>
                    Log Out
                </div>
            </div>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.adminList}>
                        <DataTable />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withAuth(AdminList);
