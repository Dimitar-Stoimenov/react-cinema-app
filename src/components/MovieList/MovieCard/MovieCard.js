import './MovieCard.css';

const MovieCard = ({
    item,
}) => {


    return (
        <div className="card-wrapper-outer">
            <img className="poster" src={item.posterLink}></img>
            <div className="movie-name">{item.movieName}</div>
            <div className="movie-rating">* * * * *</div>
            <div className="movie-tags">Tag1 Tag2</div>
        </div>
    );
}

export default MovieCard;