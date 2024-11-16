import styles from './RegisterPage.module.css'
import { AppContext } from "../context/AppContext"
import { useContext,useState } from "react"
import Form from "../component/Form"
import ValidateForm from '../utils/ValidateForm'
import left from '../assets/left.png'
import {useNavigate} from 'react-router-dom'

export default function RegisterPage() {

  const {user,setUser}=useContext(AppContext);
  const[name,setName]=useState(user?.name||"")
  const[username,setUsername]=useState(user?.name||"")
const[email,setEmail]=useState(user?.email||" ")
const[mobile,setMobile]=useState(user?.mobile||"")
const[error,setError]=useState()
const navigate=useNavigate()

const submitHandler=()=>{
  const{valid,invalid}=ValidateForm(name,username,email,mobile)
  if(!valid){
    setError({...invalid})
    return
  }

  setError(null)
  setUser({name,username,email,mobile})
  navigate('/genre')
}


  return (
    <div className={styles.container}>
    <div className={styles.left}>

      <div className={styles.label}>Discover new things on Superapp</div>
    </div>
    <div className={styles.right}>
      <h1 className={styles.title}>Super app</h1>
      <h2 className={styles.subtitle}>Create your new account</h2>
<Form 
name={name}
username={username}
email={email}
mobile={mobile}
setUsername={setUsername}
setName={setName}
setEmail={setEmail}
setMobile={setMobile}
error={error}
setError={setError}
submitHandler={submitHandler}/>
      <footer className={styles.foot}>
        <p className={styles.foot1}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
        <p className={styles.foot1}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
      </footer>
    </div>
    </div>
  )
}
