import "../styles/movieCard.css";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "";
  const rating = parseFloat(movie.vote_average.toFixed(1)) ?? 0;

  return (
    <div className="movie-card">

      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={movie.title}
        loading="lazy"
      />

      <div className="movie-card__rating" aria-label={`Rating: ${rating} out of 10`}>
        <span className="movie-card__rating-star">★</span>
        <span className="movie-card__rating-score">{rating}</span>
        <span className="movie-card__rating-max">/10</span>
      </div>

      <div className="movie-card__footer">
        <h3 className="movie-card__title">{movie.title}</h3>
        {movie.release_date && <p className="movie-card__releaseDate">{movie.release_date.split('-')[0]}</p>}
      </div>

    </div>
  );
}

export default MovieCard;