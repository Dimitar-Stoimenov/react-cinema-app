import './MovieList.css';

const MovieList = () => {

    return (
        <div className='movie-list-container'>
            <ul className="movie-tabs-container">
                <li className="movie-tab">Top Rated Movies</li>
                <li className="movie-tab">Classic Movies</li>
                <li className="movie-tab">All Movies</li>
            </ul>
            <ul className='movie-card-container'>
                
            </ul>
        </div>
    );
}

export default MovieList;