import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import '../styles/homePage.css'

function HomePage() {

    const movies = [{
        id: 0,
        title: "Game of thrones",
        genre: "Si-Fi",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C1zvb87cxPL28JSRzOFw1SAHMMKARQ2fswLBb6L17zy-f9h7" 
    },
    {
        id: 1,
        title: "Avatar",
        genre: "Si-Fi",
        pictureUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYWVMx6h59vKIGkku5l3hPkBbqsErDsCB7-QZ9zaKuhTN8edvL" 
    },
    {
        id: 2,
        title: "Pluribis",
        genre: "Si-Fi",
        pictureUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKGepljj5ZEHMnUyyV8AMbWx0N0nIZyin8y4rX-QU1BcjxJZBr" 
    },
    {
        id: 3,
        title: "Friends",
        genre: "Comedy",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbMoYCKmdh_l5iuEqVXpCHTbqEZM-yoG1KO-b8VY2IhZJUk39" 
    },
    {
        id: 4,
        title: "The Boys",
        genre: "Si-Fi",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6sh-fSNhWGnLXTavhG_1r1XXWKVL3jWq42ZUa9j0F-Jb7Zsf" 
    },
    {
        id: 5,
        title: "Spiderman No way Home",
        genre: "Si-Fi",
        pictureUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSdnOkKE9dBN68bYDK4FNPszoUkeG4X7XCJCTsgpfCP-EY9GIx" 
    },
    ]

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