import './MovieList.css';
import { getAllMovies, getClassicMovies, getTopMovies } from '../../services/movieService';
import MovieCard from './MovieCard/MovieCard';
import { useEffect, useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    // set active button state

    useEffect(() => {
        getTopMovies()
            .then(res => {
                setMovies(res);
            })
    }, [movies])

    return (
        <div className='movie-list-container'>
            <ul className="movie-tabs-container">
                <button className="movie-tab active">Top Rated Movies</button>
                <button className="movie-tab">Classic Movies</button>
                <button className="movie-tab">All Movies</button>
            </ul>
            <ul className="movie-card-container">
                {movies.length > 0
                    ? movies.map(x => <MovieCard key={x._id} item={x} />)
                    : <p>No movies available yet.</p>
                }
            </ul>
        </div>
    );
}

export default MovieList;