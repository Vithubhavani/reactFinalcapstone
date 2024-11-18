import { useEffect, useState } from 'react'
import fetchMovies from '../api/fetchMovies'
import defaultGenres from '../data/genre'
import styles from './GenreRow.module.css'

const genreIDs=[28,18,10749,53,37,27,14,10402,878]

export default function GenreRow({genre}) {
    const index=defaultGenres.indexOf(genre)
    const genreID=genreIDs[index]
    const[movies,setMovies]=useState([])

    useEffect(()=>
        {fetchMovies(genreID).then((data)=>setMovies(data.results))

        })
  return (
    <div className={styles.container}>
     {movies.slice(0,4).map((movie)=>(
      <div key={movie.id} className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
      </div>))} 
    </div>
  )
}
