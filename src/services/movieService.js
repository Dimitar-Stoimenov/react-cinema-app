const allMoviesList = [
    {
        _id: 'dsitmom-2022',
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
];

const topMoviesList = [
    {
        _id: 'dsitmom-2022',
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
];
const classicMoviesList = [];
//fix all to actual queries;

export async function getAllMovies() {
    return await allMoviesList;
}

export async function getTopMovies() {
    return await topMoviesList;
}

export async function getClassicMovies() {
    return await classicMoviesList;
}