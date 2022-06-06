import { useNavigate } from 'react-router';

import { create } from '../../services/movieService';

import './Create.css';

const Create = () => {
    const navigate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        let { movieName, posterLink, description, movieCategory, genres, director, premiere, length, cast, movieType } = Object.fromEntries(new FormData(e.currentTarget));

        create(movieName, posterLink, description, movieCategory, genres, director, premiere, length, cast, movieType)
            .then(movieData => {
                navigate((`/movies/create/success`));
            })
            .catch(error => {
                console.log(error);
                alert('Creating movie was unsuccessful!');
            });
    }

    return (
        <div className="create-container">
            <form method="POST" onSubmit={createHandler}>
                <input type="text" className="form-input" name="movieName" placeholder="movieName" />
                <input type="text" className="form-input" name="posterLink" placeholder="posterLink" />
                <input type="text" className="form-input" name="description" placeholder="description" />
                <input type="text" className="form-input" name="genres" placeholder="genres - separate by coma" />
                <input type="text" className="form-input" name="movieCategory" placeholder="movieCategory" />
                <input type="text" className="form-input" name="director" placeholder="director" />
                <input type="text" className="form-input" name="premiere" placeholder="premiere" />
                <input type="text" className="form-input" name="length" placeholder="length" />
                <select name="movieType" id="movieType">
                    <option value="any">Any</option>
                    <option value="family">Family</option>
                    <option value="classic">Classic</option>
                </select>
                <input type="text" className="form-input" name="cast" placeholder="cast - separate by coma" />
                <button type="submit" className="submit-button">Create</button>
            </form>
        </div>
    );
}

export default Create;