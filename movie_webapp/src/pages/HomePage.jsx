import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import '../styles/homePage.css'
import { useEffect, useState } from 'react'

function HomePage() {

    const [movies , setMovies] = useState([])
    const [shows , setShows] = useState([])
    const [nav , setNav] = useState("movies")

    useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
    }, []);

    useEffect(() => {
    fetch("http://localhost:3000/tv")
      .then(res => res.json())
      .then(data => setShows(data.results))
      .catch(err => console.error(err));
    },[])

    return (

        <>
            <div className='homePage-container'>
                <TopBar />
                <div className='nav-container'>
                    <button className='nav-button'>Movies</button>
                    <button className='nav-button'>Shows</button>
                </div>
                <div className='moviegrid-container'>
                    {nav === "movies" && movies.map((movie) => (
                        <MovieCard movie = {movie} type = {"movie"} key = {movie.id} />
                    ))}
                    {nav === "shows" && shows.map((show) => (
                        <MovieCard movie = {show} type = {"show"} key = {show.id} />
                    ))}
                </div>
            </div>
        </>

    )

}

export default HomePage;