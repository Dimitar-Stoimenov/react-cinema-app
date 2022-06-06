import { useEffect, useState } from 'react';

import { getAllMovies, getClassicMovies, getTopMovies, getFamilyMovies, searchMoviesByName } from '../../services/movieService';
import { useDebounce } from "../../hooks/useDebounce";
import MovieCard from './MovieCard/MovieCard';

import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [activeMovieTab, setActiveMovieTab] = useState([0]);
    const [searchTerm, setSearchTerm] = useState(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            searchMoviesByName(debouncedSearchTerm)
                .then(res => {
                    setMovies(res);
                })
        } else if (debouncedSearchTerm === "") {
            clickAllMovies();
        } else {
            clickTopMovies();
        }
    }, [debouncedSearchTerm])

    const clickTopMovies = () => {
        getTopMovies()
            .then(res => {
                setMovies(res);
                setActiveMovieTab(0);
            })
    };
    const clickClassicMovies = () => {
        getClassicMovies()
            .then(res => {
                setMovies(res);
                setActiveMovieTab(1);
            })
    };
    const clickFamilyMovies = () => {
        getFamilyMovies()
            .then(res => {
                setMovies(res);
                setActiveMovieTab(2);
            })
    };
    const clickAllMovies = () => {
        getAllMovies()
            .then(res => {
                setMovies(res);
                setActiveMovieTab(3);
            })
    };

    return (
        <div className='movie-list-container'>
            <ul className="movie-tabs-container">
                <button className={activeMovieTab === 0 ? 'movie-tab active' : 'movie-tab'}
                    key={0}
                    onClick={clickTopMovies}>
                    Top Rated Movies
                </button>
                <button className={activeMovieTab === 1 ? 'movie-tab active' : 'movie-tab'}
                    key={1}
                    onClick={clickClassicMovies}>
                    Classic Movies
                </button>
                <button className={activeMovieTab === 2 ? 'movie-tab active' : 'movie-tab'}
                    key={2}
                    onClick={clickFamilyMovies}>
                    Family Movies
                </button>
                <button className={activeMovieTab === 3 ? 'movie-tab active' : 'movie-tab'}
                    key={3}
                    onClick={clickAllMovies}>
                    All Movies
                </button>
            </ul>

            {activeMovieTab === 3
                ? <input onChange={(e) => setSearchTerm(e.target.value)} className="searchBar" placeholder='Search...' type="text" />
                : null
            }

            <ul className="movie-card-container">
                {movies.length > 0
                    ? movies.map(x => <MovieCard key={x._id} movie={x} />)
                    : <p className="no-movies-yet">No movies available.</p>
                }
            </ul>
        </div>
    );
}

export default MovieList;