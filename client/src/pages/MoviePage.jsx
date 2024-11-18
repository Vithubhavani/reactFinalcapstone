import styles from './MoviePage.module.css'
import moviepage  from '../assets/movieimage.png'
import { useContext } from "react"
import{AppContext} from '../context/AppContext'
import GenreRow from '../component/GenreRow'
export default function MoviePage() {
  const{selectedGenres}=useContext(AppContext)
  return (
    <div  className={styles.container}>
        <div className={styles.navs}>
      <div className={styles.head}>Super app</div>
      <img src={moviepage} alt="" />
      </div>
      <div className={styles.para}>Entertainment according to your choice</div>
      <div className={styles.movies}>
         {selectedGenres?.slice(0,4).map((genre,index)=>(
          <div key={index} className={styles.gen}>
           <p className={styles.genre}>{genre}</p>
           <GenreRow genre={genre}/>
            </div>
         ))}
        
      </div>
    </div>
  )
}
