import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import '../styles/homePage.css'
import { useEffect, useState } from 'react'

function HomePage() {

    const [movies , setMovies] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
    }, []);

    return (

        <>
            <div className='homePage-container'>
                <TopBar />
                <div className='moviegrid-container'>
                    {movies.map((movie) => (
                        <MovieCard movie = {movie} key = {movie.id} />
                    ))}
                </div>
            </div>
        </>

    )

}

export default HomePage;