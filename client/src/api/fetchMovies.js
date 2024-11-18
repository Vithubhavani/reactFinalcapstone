import axios from 'axios'

const BASE_URL="https://api.themoviedb.org/3/discover/movie";

const API_KEY=import.meta.env.VITE_MOVIES_API_KEY


const fetchMovies=async(genreIDs)=>{
    try{
        const {data}=await axios.get(`${BASE_URL}`,{
            params:{
                api_key:API_KEY,
                language:"en-US",
                page:1,
                sort_by:"popularity.desc",
                with_genres:genreIDs,
    },
        });

    return data
}catch(error){
    console.log(error)
}



};

export default fetchMovies