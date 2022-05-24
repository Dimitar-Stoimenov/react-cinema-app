import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { parseHour } from '../../../utils/utils';

import './ProgramMovieCard.css';
import './Grid.css';

const ProgramMovieCard = ({ movieId, projectionsArray }) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const categoriesExplained = {
        "G": "General Audiences, All Ages Admitted.",
        "PG": "Parental Guidance Suggested, Some Material May Not Be Suitable for Children.",
        "PG-13": "Parents Strongly Cautioned, Some Material May Be Inappropriate for Children Under 13.",
        "R": "Restricted, Children Under 17 Require Accompanying Parent or Adult Guardian.",
        "NC-17": "No One 17 and Under Admitted."
    }

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

                        <div className="program-movie-category">
                            <div className="program-movie-category-content" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setTimeout(() => setVisible(false), 300)}>{projectionsArray[0].movieId.movieCategory}</div>
                            {visible && <div className="program-movie-category-hover-hidden" >{categoriesExplained[projectionsArray[0].movieId.movieCategory]}</div>}
                        </div>

                        <div className="program-movie-rating">*****</div>
                    </div>
                    <div className="program-movie-projections-grid">
                        {projectionsArray.sort((a, b) => a.hour - b.hour).map((projection, index) => {
                            return <button key={projection._id} className={"div" + index}>{parseHour(projection.hour)} - {returnHallType(projection.hallId.hallName)}</button>
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProgramMovieCard;