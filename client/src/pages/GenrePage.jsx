import { AppContext } from "../context/AppContext"
import {useNavigate} from 'react-router-dom'
import defaultGenres from "../data/genre"
import { useState,useContext, useEffect } from "react"
import styles from './GenrePage.module.css'
import Action from '../assets/Action.png'
import drama from '../assets/Drama.png'
import romance from '../assets/romance.png'
import thriller from '../assets/thriller.png'
import western from '../assets/western.png'
import horror from '../assets/horror.png'
import fantasy from '../assets/fantacy.png'
import music from '../assets/music.png'
import fiction from '../assets/fiction.png'
export default function GenrePage() {

	const genreImages=[
		Action,
		drama,
		romance,
		thriller,
		western,
		horror,
		fantasy,
        music,
        fiction
	]
  const [error, setError] = useState();
	const { selectedGenres, setSelectedGenres } = useContext(AppContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (selectedGenres.length >= 3) {
			setError(false);
		}
	}, [selectedGenres]);
	const handleSelectGenre = (genre) => {
		if (selectedGenres.includes(genre)) {
		
			setSelectedGenres(
				selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
			);
		} else {
			setSelectedGenres([...selectedGenres, genre]);
		}
	};
	const handleNext = () => {
		if (selectedGenres.length < 3) {
			setError(true);
		} else {
			 navigate("/carousel");
		}
	};

	
  return (
    <div className={styles.container}>
			<div className={styles.left}>
				<h3 className={styles.heading}>Super App</h3>
				<h2 className={styles.subHeading}>
					Choose your entertainment category
				</h2>
				<div className={styles.selectedGenres}>
					{selectedGenres.map((genre, index) => (
						<div
							onClick={() => handleSelectGenre(genre)}
							key={index}
							className={styles.selectedGenre}
						>
							<div className={styles.cg}>
							<div className={styles.g}>{genre}<span>X</span></div> 
							
							</div>
						</div>
					))}
				</div>
				{error && <p className={styles.error}>Minimum 3 category required</p>}
			</div>
			<div className={styles.right}>
				<div className={styles.genres}>
					{defaultGenres.map((genre, index) => (
						<div
							key={index}
							className={`${styles.genre} ${styles[`genre-${index}`]}`}
							onClick={() => {
								handleSelectGenre(genre);
							}}
						>

							{genre}
							<img src={genreImages[index]} alt={genre} />
						</div>
					))}
				</div>
				<button onClick={handleNext} className={styles.button}>Next</button>
			</div>
		</div>
  )
}
