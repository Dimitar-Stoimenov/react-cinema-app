const allMoviesList = [];
const topMoviesList = [];
const classiclMoviesList = [];
//fix all to actual queries;

export async function getAllMovies() {
    return await allMoviesList;
}

export async function getTopMovies() {
    return await topMoviesList;
}

export async function getClassicMovies() {
    return await classiclMoviesList;
}