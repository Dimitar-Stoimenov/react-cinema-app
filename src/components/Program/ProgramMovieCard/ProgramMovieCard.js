import './ProgramMovieCard.css';

const ProgramMovieCard = ({ movieId, projectionsArray }) => {

    return (
        <div className="program-movie-card">
            <div className="program-movie-tab">
                <div className="program-movie-poster-wrapper">
                    <img src={projectionsArray[0].movieId.posterLink} alt="poster" className="program-movie-poster" />
                </div>
                <div className="program-movie-info">

                </div>
            </div>
        </div>
    );
}

export default ProgramMovieCard;