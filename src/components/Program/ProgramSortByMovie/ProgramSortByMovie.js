import ProgramMovieCard from '../ProgramMovieCard/ProgramMovieCard';

const ProgramSortByMovie = ({ projections }) => {

    console.log(projections)

    let movies = [
        {
            _id: 1
        },
        {
            _id: 2
        },
    ];

    return (
        <>
            {movies.map(movie => <ProgramMovieCard key={movie._id} movie />)}
        </>
    );
}

export default ProgramSortByMovie;