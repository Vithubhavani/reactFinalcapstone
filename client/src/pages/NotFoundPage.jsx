import {Link} from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Oops! Page Not Found</p>
      <p className={styles.text1}>The page you are looking for might have been removed, 
        had its name changed or is temporarily unavailable.</p>
      <Link to='/' className={styles.button}> Go to Homepage</Link>
    </div>
  )
}
