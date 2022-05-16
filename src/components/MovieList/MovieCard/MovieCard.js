import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({
    movie,
}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`/movies/${movie._id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="card-wrapper-outer">
            <img className="poster" src={movie.posterLink} onClick={onClickHandler}></img>
            <div className="movie-name" onClick={onClickHandler}>{movie.movieName}</div>
            <div className="extra-info-wrapper">
                <div className="movie-rating">* * * * *</div>
                <div className="movie-tags">Tag1 Tag2</div>
            </div>
        </div>
    );
}

export default MovieCard;