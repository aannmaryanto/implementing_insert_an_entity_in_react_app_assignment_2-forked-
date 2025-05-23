// src/components/MovieCard.jsx
function MovieCard({ title, director, genre, year, synopsis, poster }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
      <h2>{title} ({year})</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Synopsis:</strong> {synopsis}</p>
      {poster && <img src={poster} alt={title} style={{ maxWidth: '200px' }} />}
    </div>
  );
}

export default MovieCard;

