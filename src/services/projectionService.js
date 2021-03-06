import { errorCheck, standartizeDate, standartizeHour } from '../utils/utils';
const url = "http://localhost:3030/projections";


export async function create(movieId, hallId, date, hour, regularPrice, studentsPrice) {
    date = standartizeDate(date);
    hour = standartizeHour(hour);

    let res = await fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ movieId, hallId, date, hour, regularPrice, studentsPrice }),
    });

    return await errorCheck(res);
}

export async function getProjections(date) {
    let res = await fetch(`${url}/program/${date}`);

    return await errorCheck(res);
}

export async function getProjectionsByMovieId(movieId) {
    let res = await fetch(`${url}/movieId/${movieId}`);

    return await errorCheck(res);
}

export async function getProjectionById(projectionId) {
    let res = await fetch(`${url}/id/${projectionId}`);

    return await errorCheck(res);
}

export async function addTicketsAndSeats(ticketId, seatsObj, projectionId) {
    let res = await fetch(`${url}/add-ticket`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ ticketId, seatsObj, projectionId }),
    });

    return await errorCheck(res);
}