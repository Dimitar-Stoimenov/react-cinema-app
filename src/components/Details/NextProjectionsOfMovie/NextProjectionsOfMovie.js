import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProjectionsByMovieId } from "../../../services/projectionService";
import { parseDate, parseHour, standartizeDate } from "../../../utils/utils";
import "./NextProjectionsOfMovie.css";


const NextProjectionsOfMovie = ({ movieId, movieName }) => {
    const [projections, setProjections] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProjectionsByMovieId(movieId)
            .then(result => {
                let sortedByDateObj = {};

                result.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(x => {
                    let date = parseDate(new Date(x.date));

                    if (!sortedByDateObj[date]) {
                        sortedByDateObj[date] = [x];
                    } else {
                        sortedByDateObj[date].push(x);
                    }
                })

                setProjections(Object.entries(sortedByDateObj));
            });
    }, [movieId])

    function returnHallType(hallAsString) {
        if (hallAsString.slice(0, 1) === "I") {
            return '3D';
        } else if (hallAsString.slice(0, 1) === "4") {
            return '4DX';
        } else {
            return '2D';
        }
    }

    function clickProjection(projectionId) {
        navigate(`/projections/${projectionId}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className="next-projections-container">
            <div className="next-projections-title">Next projections of <span className="bold">{movieName}</span></div>

            {projections.map(([date, projectionsArray]) => {
                const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let dayOfWeek = weekday[new Date(standartizeDate(date)).getDay()];
                let dateAsString = date.substring(0, 5).replace("-", "/");

                return (
                    <div className="next-projections-tab" key={date}>
                        <div className="next-projections-day">{dayOfWeek + " " + dateAsString}</div>
                        <div className="next-projections-info-container">
                            <div className="next-projections-info-projections-list">
                                {projectionsArray.sort((a, b) => a.hour - b.hour).map((projection, index) => {
                                    if (index > 5) return null;

                                    return (
                                        <Fragment key={projection._id}>
                                            <button onClick={() => clickProjection(projection._id)} className="btn-7 custom-btn-next">{parseHour(projection.hour)} - {returnHallType(projection.hallId.hallName)}</button>
                                            {/* <div className={"next-projection-info"}>{"$" + projection.price.regular}/{"$" + projection.price.students}</div> */}
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}



        </div>
    );
}

export default NextProjectionsOfMovie;