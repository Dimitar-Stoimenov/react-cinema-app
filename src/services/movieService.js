const url = "http://localhost:3030/movies";

export async function create(movieName, posterLink, description, movieCategory, genres, director, premiere, length, cast, movieType, movieRating) {
    let res = await fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ movieName, posterLink, description, movieCategory, genres, director, premiere, length, cast, movieType, movieRating }),
    });

    return res;
}

export async function rate(movie, rating, user) {
    let res = await fetch(`${url}/${movie._id}/rate`, {
        method: 'PUT',
        headers: {
            "Content-movieType": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({movie, rating, user})
    });

    return await errorCheck(res);
}

export async function getAllMovies() {
    let res = await fetch(`${url}/`);

    return await errorCheck(res);
}

export async function getTopMovies() {
    let res = await fetch(`${url}/top-movies`);

    return await errorCheck(res);
}

export async function getClassicMovies() {
    let res = await fetch(`${url}/classic-movies`);

    return await errorCheck(res);
}

export async function getFamilyMovies() {
    let res = await fetch(`${url}/family-movies`);

    return await errorCheck(res);
}

export async function getOne(id) {
    let res = await fetch(`${url}/${id}`);

    return await errorCheck(res);
}

async function errorCheck(response) {
    try {
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}