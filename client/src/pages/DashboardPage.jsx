import styles from './DashboardPage.module.css'
import  Timerwidget  from '../component/Timerwidget'
import Notes from '../component/Notes'
import Newswidget from '../component/Newswidget'
import Profilewidget from '../component/Profilewidget'
import Weatherwidget from '../component/Weatherwidget'
import { useNavigate } from 'react-router-dom'
export default function DashboardPage() {
  const navigate=useNavigate()
  const handleNext=()=>{
    navigate('/movies')
  }
  return (
    <div className={styles.container}>
 
 <div className={styles.profile}><Profilewidget/></div>
	<div className={styles.weather}><Weatherwidget/></div>
	<div className={styles.timer}>
    <Timerwidget/>
    </div>
	<div className={styles.notes}><Notes/></div>
	<div className={styles.news}><Newswidget/></div>
  <button onClick={()=>handleNext()} className={styles.button}>Next</button>
    </div>
  )
}
