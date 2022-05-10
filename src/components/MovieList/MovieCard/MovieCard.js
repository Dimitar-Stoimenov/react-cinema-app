import './MovieCard.css';

const MovieCard = ({
    item,
}) => {


    return (
        <div className="card-wrapper-outer">
            <img className="poster" src={item.posterLink}></img>
            <a className="movie-name">{item.movieName}</a>
            <div className="extra-info-wrapper">
                <div className="movie-rating">* * * * *</div>
                <div className="movie-tags">Tag1 Tag2</div>
            </div>
        </div>
    );
}

export default MovieCard;