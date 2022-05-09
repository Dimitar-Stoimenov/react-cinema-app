import './MovieList.css';
import { getAllMovies, getClassicMovies, getTopMovies } from '../../services/movieService';
import MovieCard from './MovieCard/MovieCard';
import { useEffect, useState } from 'react';

const MovieList = () => {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then(res => {
                setAllMovies(res);
            })
    }, [])

    return (
        <div className='movie-list-container'>
            <ul className="movie-tabs-container">
                <li className="movie-tab">Top Rated Movies</li>
                <li className="movie-tab">Classic Movies</li>
                <li className="movie-tab">All Movies</li>
            </ul>
            <ul className="movie-card-container">
                {allMovies.length > 0
                    ? allMovies.map(x => <MovieCard key={x._id} item={x} />)
                    : <p>No movies available yet.</p>
                }
            </ul>
        </div>
    );
}

export default MovieList;