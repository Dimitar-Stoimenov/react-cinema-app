import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';

import { parseHour, standartizeHour } from '../../../utils/utils';

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

    let currentHour = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    if (Number(currentHour) < 10) {
        currentHour = "0" + currentHour;
    }
    if (Number(currentMinutes) < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    let currentTime = standartizeHour(currentHour + ":" + currentMinutes);

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
                    <div className={projectionsArray.length < 5 ? "program-movie-projections-grid-smaller" : "program-movie-projections-grid"}>
                        {projectionsArray.sort((a, b) => a.hour - b.hour).map((projection, index) => {
                            return (
                                <Fragment key={projection._id}>
                                    <button className={currentTime > projection.hour ? `disabled btn${index}` : `btn${index}`}>{parseHour(projection.hour)} - {returnHallType(projection.hallId.hallName)}</button>
                                    <div className={"info" + index}>{"$" + projection.price.regular}/{"$" + projection.price.students}</div>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProgramMovieCard;