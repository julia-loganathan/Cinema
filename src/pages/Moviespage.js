
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios'
function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/movies', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json', } })

            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des Films</h1>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;



/*

import React from 'react';

function MoviesPage() {
    const moviesData = [
        {
            title: "La La Land",
            description: "Dans la ville de Los Angeles, deux artistes en herbe, un pianiste de jazz et une actrice, tombent amoureux tout en poursuivant leurs rêves de carrière. Le film est une ode à la créativité, à la passion et à la magie du cinéma.",
            actors: [
                "Ryan Gosling",
                "Emma Stone",
                "John Legend"
            ],
            director: "Damien Chazelle",
            releaseDate: "2016-12-25T00:00:00.000Z",
            genre: "Comédie musicale, Drame, Romance",
            imageUrl: "https://momsla.com/wp-content/uploads/2020/12/La-La-Land-movie-poster-427x640.jpg"
        },
        {
            title: "Interstellar",
            description: "Dans un futur proche où la Terre est devenue inhabitable, un groupe d'explorateurs entreprend un voyage interstellaire à la recherche d'une nouvelle planète pour l'humanité. Le film explore les concepts de l'espace-temps et de l'amour intergalactique.",
            actors: [
                "Matthew McConaughey",
                "Anne Hathaway",
                "Jessica Chastain"
            ],
            director: "Christopher Nolan",
            releaseDate: "2014-11-05T00:00:00.000Z",
            genre: "Science-Fiction, Aventure, Drame",
            imageUrl: "https://th.bing.com/th/id/R.a9e6b040baac3da8d98356373c7b3920?rik=S%2bid%2bBcoFaGdmQ&riu=http%3a%2f%2fwww.dvdsreleasedates.com%2fcovers%2finterstellar-dvd-cover-71.jpg&ehk=Vk2TtmGhH5p9o17jAegt1DEUAiRqi09ynlz514VIv60%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            _id: 3,
            title: "Inception",
            description: "Un voleur d'élite qui vole les secrets les plus profonds pendant la phase de rêve de l'esprit est pris pour cible par des hommes d'affaires rivaux qui utilisent une technologie similaire pour le vol de l'entreprise.",
            actors: [
                "Leonardo DiCaprio",
                "Joseph Gordon-Levitt",
                "Ellen Page"
            ],
            director: "Christopher Nolan",
            releaseDate: "2010-07-16T00:00:00.000Z",
            genre: "Science-Fiction, Action, Thriller",
            imageUrl: "https://movieswithaplottwist.com/wp-content/uploads/2016/03/Inception-movie-poster.jpg"
        },
    ];

    return (
        <div>
            <h1>Liste des Films</h1>
            <div className="movie-list">
                {moviesData.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img src={movie.imageUrl} alt={movie.title} className="movie-thumbnail" />
                        <div className="movie-details">
                            <h2>{movie.title}</h2>
                            <p>Genre : {movie.genre}</p>
                            <p>Description : {movie.description}</p>
                            <p>Date de sortie : {movie.releaseDate}</p>
                            <p>Acteurs : {movie.actors.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;
*/