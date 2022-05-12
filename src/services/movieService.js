const allMoviesList = [
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 1000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
];

const topMoviesList = [];
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