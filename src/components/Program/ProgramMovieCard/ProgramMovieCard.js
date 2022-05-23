import { useNavigate } from 'react-router-dom';
import './ProgramMovieCard.css';


const ProgramMovieCard = ({ movieId, projectionsArray }) => {
    const navigate = useNavigate();
    const onPosterClickHandler = () => {
        navigate(`/movies/${movieId}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="program-movie-card">
            <div className="program-movie-tab">
                <div className="program-movie-poster-wrapper">
                    <img src={projectionsArray[0].movieId.posterLink} alt="poster" className="program-movie-poster" onClick={onPosterClickHandler} />
                </div>
                <div className="program-movie-info">

                </div>
            </div>
        </div>
    );
}

export default ProgramMovieCard;