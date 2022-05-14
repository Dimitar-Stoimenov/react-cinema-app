const allMoviesList = [
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
];
const topMoviesList = [
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieTags: 'asd asd2',
    },
];
const classicMoviesList = [
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieTags: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieTags: 'asd asd2 asd3',
    },
];
const familyMoviesList = [
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieTags: 'asd asd2',
    },
];
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

export async function getFamilyMovies() {
    return await familyMoviesList;
}