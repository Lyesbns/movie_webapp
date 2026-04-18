import "../styles/movieCard.css";

function MovieCard({ movie, type }) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "";
  const rating = Number((movie.vote_average ?? 0).toFixed(1));
  const displayTitle = type === "show" ? movie.name : movie.title;
  const displayDate = type === "show" ? movie.first_air_date : movie.release_date;
  const displayYear = displayDate ? displayDate.split("-")[0] : "";

  return (
    <div className="movie-card">

      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={displayTitle}
        loading="lazy"
      />

      <div className="movie-card__rating" aria-label={`Rating: ${rating} out of 10`}>
        <span className="movie-card__rating-star">★</span>
        <span className="movie-card__rating-score">{rating}</span>
        <span className="movie-card__rating-max">/10</span>
      </div>

      <div className="movie-card__footer">
        <h3 className="movie-card__title">{displayTitle}</h3>
        {displayYear && <p className="movie-card__releaseDate">{displayYear}</p>}
      </div>

    </div>
  );
}

export default MovieCard;