import Link from 'next/link';
import styles from '../styles/404.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div className="not-found">
            <h1 className={styles.h1}>Oops!</h1>
            <h2 className={styles.h2}>404 - Page not found</h2>
            <p>The page you are looking for might have been removed</p>
            <Link href="/">
                <button className={styles.button}>Back to Home</button>
            </Link>
        </div>
    );
}

export default NotFound;