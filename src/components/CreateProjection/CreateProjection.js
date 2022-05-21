import { useEffect, useState } from "react";
import "./CreateProjection.css";

import { getAllHalls } from '../../services/hallService';
import { getAllMovies } from '../../services/movieService';
import { create } from '../../services/projectionService';

const CreateProjection = () => {
    const [halls, setHalls] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then(res => {
                setMovies(res);
            });

        getAllHalls()
            .then(res => {
                setHalls(res);
            });
    }, []);

    const createHandler = (e) => {
        e.preventDefault();

        let { movieId, hallId, date, hour } = Object.fromEntries(new FormData(e.currentTarget));

        create(movieId, hallId, date, hour)
            .then(projectionData => {
                console.log('created projection!')
            })
    }

    return (
        <div className="create-container">
            <form method="POST" onSubmit={createHandler}>
                <select className="form-input" defaultValue="no-value" name="movieId" id="movieId">
                    <option value="no-value" disabled hidden>Select movie...</option>
                    {movies.map(movie => <option value={movie._id} key={movie._id}>{movie.movieName}</option>)}
                </select>
                <select className="form-input" defaultValue="no-value" name="hallId" id="hallId">
                    <option value="no-value" disabled hidden >Select hall...</option>
                    {halls.map(hall => <option value={hall._id} key={hall._id}>{hall.hallName}</option>)}
                </select>
                <input type="text" className="form-input" name="date" placeholder="date - example 30/12/2022" />
                <input type="text" className="form-input" name="hour" placeholder="hour - example 19:00" />
                <button type="submit" className="submit-button">Create Projection</button>
            </form>
        </div>
    );
}

export default CreateProjection;