import { AppContext } from "../context/AppContext"
import { useContext } from "react"
import avatar from '../assets/avatar.png'
import styles from './Profilewidget.module.css'
export default function Profilewidget() {

    const {user,selectedGenres}=useContext(AppContext)
  return (
    <div className={styles.container}>
        <div className={styles.avatar}><img src={avatar} alt="" /></div>
        <div className={styles.detailsContainer}>
    <div className={styles.userdetail}>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div className={styles.username}>{user?.username}</div>
    </div>
    <div className={styles.genres}>
        {selectedGenres.slice(0,4).map((genre,index)=>(
            <div key={index} className={styles.gen}>{genre}</div>
            ))}
    </div>
      </div>
    </div>
  )
}
