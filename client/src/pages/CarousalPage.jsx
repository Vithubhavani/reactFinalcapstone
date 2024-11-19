import {useNavigate} from 'react-router-dom'
import styles from './CarousalPage.module.css'
import Profilewidget from '../component/Profilewidget'
import Weatherwidget from '../component/Weatherwidget'
import Newswidget from '../component/Newswidget'


export default function CarousalPage() {
const navigate=useNavigate()
  const handleNext=()=>{
    navigate('/dashboard')
  }
  return (
    <div className={styles.container}>
    
<div className={styles.profile}>
<Profilewidget/>
   </div>
<div className={styles.weatherWidget}> 
<Weatherwidget/>
</div>
<div className={styles.news}><Newswidget/> </div>
    
       { <button onClick={handleNext} className={styles.button}>Next</button> }
    

    </div>
  )
}
