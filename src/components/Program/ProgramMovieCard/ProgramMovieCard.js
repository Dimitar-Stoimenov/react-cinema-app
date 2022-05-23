import { useNavigate } from 'react-router-dom';

import './ProgramMovieCard.css';
import './Grid.css';

import { parseHour } from '../../../utils/utils';

const ProgramMovieCard = ({ movieId, projectionsArray }) => {
    const navigate = useNavigate();

    const onMovieClickHandler = () => {
        navigate(`/movies/${movieId}`);
        window.scrollTo(0, 0);
    };

    function returnHallType(hallAsString) {
        if (hallAsString.slice(0, 1) === "I") {
            return '3D';
        } else if (hallAsString.slice(0, 1) === "4") {
            return '4DX';
        } else {
            return '2D';
        }
    }

    return (
        <div className="program-movie-card">
            <div className="program-movie-tab">
                <div className="program-movie-poster-wrapper">
                    <img src={projectionsArray[0].movieId.posterLink} alt="poster" className="program-movie-poster" onClick={onMovieClickHandler} />
                </div>
                <div className="program-movie-info">
                    <div className="program-movie-header">
                        <div className="program-movie-title-wrapper">
                            <div className="program-movie-title" onClick={onMovieClickHandler}>{projectionsArray[0].movieId.movieName}</div>
                        </div>
                        <div className="program-movie-category">{projectionsArray[0].movieId.movieCategory}</div>
                        <div className="program-movie-rating">*****</div>
                    </div>
                    <div className="program-movie-projections-grid">
                        {projectionsArray.sort((a, b) => a.hour - b.hour).map((projection, index) => {
                            console.log(projection);
                            return <button key={projection._id} className={"div" + index}>{parseHour(projection.hour)} - {returnHallType(projection.hallId.hallName)}</button>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramMovieCard;