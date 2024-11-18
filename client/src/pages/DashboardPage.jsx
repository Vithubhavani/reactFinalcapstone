import styles from './DashboardPage.module.css'
import  Timerwidget  from '../component/Timerwidget'
import Notes from '../component/Notes'

export default function DashboardPage() {
  return (
    <div className={styles.container}>
 
 <div className={styles.profile}>div1</div>
	<div className={styles.weather}>div2</div>
	<div className={styles.timer}>
    <Timerwidget/>
    </div>
	<div className={styles.notes}><Notes/></div>
	<div className={styles.news}>div5</div>
    </div>
  )
}
