import ProgramMovieCard from '../ProgramMovieCard/ProgramMovieCard';

const ProgramSortByMovie = ({ projections }) => {
    let moviesObj = {};

    for (const projection of projections) {
        if (!moviesObj[projection.movieId._id]) {
            moviesObj[projection.movieId._id] = [projection];
        } else {
            moviesObj[projection.movieId._id].push(projection);
        }
    }

    let movies = Object.entries(moviesObj);

    return (
        <>
            {movies.map(([movieId, projectionsArray]) => <ProgramMovieCard key={movieId} movieId={movieId} projectionsArray={projectionsArray} />)}
        </>
    );
}

export default ProgramSortByMovie;