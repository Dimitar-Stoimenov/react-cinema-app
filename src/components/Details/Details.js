import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

import * as movieService from "../../services/movieService";

const Details = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    const average = (list) => {
        if (typeof list !== 'undefined' && list.length > 0) {
            let result = Number(list.reduce((prev, curr) => prev + curr) / list.length);
            return result.toFixed(1);
        }
        return 'n/a';
    }

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movieResult => {
                setMovie(movieResult);
            });
    }, [movieId]);

    return (
        <div className='details-container'>
            <div className="details-inner">
                <div className="details-movie-header">
                    <div className="details-movie-name">{movie.movieName}</div>
                    <button className='details-tickets-button'>BUY TICKETS</button>
                </div>
                <div className="details-movie-wrapper">
                    <div className="details-movie-report">
                        <div className="report">
                            <div className="item">
                                <div className="name">Length</div>
                                <div className="value">{movie.length}</div>
                            </div>
                            <div className="item">
                                <div className="name">Premiere</div>
                                <div className="value">{movie.premiere}</div>
                            </div>
                            <div className="item">
                                <div className="name">Director</div>
                                <div className="value">{movie.director}</div>
                            </div>
                            <div className="item">
                                <div className="name">Genres</div>
                                <div className="value">{movie.genres?.join(', ') || "n/a"}</div>
                            </div>
                            <div className="item">
                                <div className="name">Cast</div>
                                <div className="value">{movie.cast?.join(', ') || "n/a"}</div>
                            </div>
                            <div className="item">
                                <div className="name">Rating</div>
                                <div className="value">{average(movie.movieRating)}</div>
                            </div>
                            <div className="item">
                                <div className="name">Category</div>
                                <div className="value">{movie.movieCategory || "n/a"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="details-movie-description">
                        {movie.description}
                    </div>
                    <div className="details-movie-poster-wrapper">
                        <img className="details-movie-poster" src={movie.posterLink} alt="poster" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;