import "../styles/movieCard.css";

function MovieCard({ movie }) {

  return (
    <div className="movie-card">

      <img
        className="movie-card__poster"
        src={movie.pictureUrl}
        alt={movie.title}
        loading="lazy"
      />

      <div className="movie-card__rating" aria-label={`Rating: ${8} out of 10`}>
        <span className="movie-card__rating-star">★</span>
        <span className="movie-card__rating-score">{8}</span>
        <span className="movie-card__rating-max">/10</span>
      </div>

      <div className="movie-card__footer">
        <h3 className="movie-card__title">{movie.title}</h3>
        {movie.genre && <p className="movie-card__genre">{movie.genre}</p>}
      </div>

    </div>
  );
}

export default MovieCard;