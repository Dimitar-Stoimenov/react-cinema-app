import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

import * as movieService from "../../services/movieService";

const Details = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movieResult => {
                setMovie(movieResult);
            });
    }, [movieId]);

    return (
        <div className='details-container'>
            <div className="details-inner">
                <div>Hello</div>
                <div>{movie.movieName}-hardcoded hehehe id:{movieId}</div>
            </div>
        </div>
    );
}

export default Details;