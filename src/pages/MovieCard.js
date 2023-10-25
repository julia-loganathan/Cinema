// MovieCard.js
import React from 'react';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.actors}</p>
            <p>{movie.director}</p>
            <p>{movie.releaseDate}</p>
            <p>{movie.genre}</p>
            <p>{movie.description}</p>
            <p>{movie.imageUrl}</p>
        </div>
    );
}

export default MovieCard;

