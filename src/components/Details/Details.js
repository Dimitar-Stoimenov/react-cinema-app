import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

import * as movieService from "../../services/movieService";
import NextProjectionsOfMovie from "./NextProjectionsOfMovie/NextProjectionsOfMovie";

const Details = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movieResult => {
                setMovie(movieResult);
            });
    }, [movieId]);

    const submitHandler = (e) => {
        e.preventDefault();

        let { rating, user } = Object.fromEntries(new FormData(e.currentTarget));
        movieService.rate(movie, rating, user);
    };
   
    return (
        <div className='details-container'>
            <div className="details-inner">
                <div className="details-movie-header">
                    <div className="details-movie-name">{movie.movieName}</div>
                    <button className='details-tickets-button' onClick={() => window.scrollTo(0, 400)}>BUY TICKETS</button>
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
                                <div className="value">{movie.director || "n/a"}</div>
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
                                <div className="value">{movie.movieRating?.toFixed(2) || 'n/a'}</div>
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
            <form id="hidden" method="PUT" onSubmit={submitHandler}>
                <input type="number" className="rating-input" name="rating" placeholder="add rating from 1 to 5" />
                <input type="text" className="rating-user" name="user" placeholder="add your username" />
                <button type="submit" className="rating-button">Push rating</button>
            </form>
            <NextProjectionsOfMovie key={movieId} movieId={movieId} movieName={movie.movieName} />
        </div>
    );
}

export default Details;