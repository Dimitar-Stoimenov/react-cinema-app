const allMoviesList = [
    {
        _id: 'drstr',
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: 'interstellar',
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2',
    },
    {
        _id: 'jstclg',
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieCategory: 'asd asd2',
    },
    {
        _id: 'inception',
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: 'drstr-1',
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: 'shrek',
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: 'drstr-2',
        movieName: "Doctor Strange In The Multiverse Of Madness",
        posterLink: "https://xl.movieposterdb.com/22_04/2/9419884/xl_9419884_2dddcf0c.jpg",
        movieRating: 4.7,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2 asd3',
    },
];
const topMoviesList = [
    {
        _id: 'interstellar',
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'PG-13',
        length: '169 minutes',
        premiere: '07/11/2014',
        director: 'Christopher Nolan',
        genres: "Sci-Fi, Drama, Adventure", // must be array in db, but feed string to the front-end
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn", // same as above
        description: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
    },
    {
        _id: 'inception',
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'PG-13',        
    },
    {
        _id: 'jstclg',
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2 asd3',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Zack Snyder's Justice League",
        posterLink: "https://xl.movieposterdb.com/21_06/2021/12361974/xl_12361974_e6b24dc8.jpg?v=2022-05-03%2023:45:02",
        movieRating: 4.8,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2',
    },
    {
        _id: (Math.random() * 10000).toFixed(0),
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieCategory: 'asd asd2',
    },
];
const classicMoviesList = [
    {
        _id: 'interstellar',
        movieName: "Interstellar",
        posterLink: "https://xl.movieposterdb.com/15_03/2014/816692/xl_816692_284eb9d5.jpg?v=2022-02-08%2007:13:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2',
    },
    {
        _id: 'inception',
        movieName: "Inception",
        posterLink: "https://xl.movieposterdb.com/20_05/2010/1375666/xl_1375666_7699a7d7.jpg?v=2022-03-24%2022:50:16",
        movieRating: 4.9,
        movieCategory: 'asd asd2 asd3',
    },
];
const familyMoviesList = [
    {
        _id: 'shrek',
        movieName: "Shrek",
        posterLink: "https://xl.movieposterdb.com/13_04/2001/126029/xl_126029_6011e23e.jpg",
        movieRating: 4.3,
        movieCategory: 'asd asd2',
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

export async function getOne(id) {
    return await topMoviesList[0];
    // hard-coded to return interstellar
}